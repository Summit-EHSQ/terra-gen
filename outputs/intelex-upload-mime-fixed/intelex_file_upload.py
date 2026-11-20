"""
Resilient Intelex File Upload Script
====================================

Purpose
-------
Reads an Excel file containing file names and folder paths, uploads each file to the
Intelex FileUpload endpoint, then creates a corresponding Intelex object record that
binds the uploaded SysFileInfoEntity record to a target import/object record.

This is a hardened rewrite of the original upload script using patterns from the
more resilient download script:
- centralized parameters
- reusable functions
- session reuse
- retry logic with exponential backoff
- request timeouts
- input validation
- status columns written back to Excel
- resumable processing
- periodic checkpoint saves
- timestamped log file
- end-of-run summary

Important Intelex note
----------------------
Intelex requires these upload calls to use multipart/form-data. This script uses the
`files=` argument in requests, which causes requests to generate the required
multipart/form-data request with the correct boundary. Do not manually set a
Content-Type header for the upload request, because doing so can omit the boundary
and cause upload failures.

The individual file part uses a MIME type inferred from its filename extension
(for example, application/pdf for PDFs). Unknown or compressed formats use
application/octet-stream. This identifies the uploaded bytes without confusing
the file's content type with the multipart upload request's content type.
"""

import logging
import mimetypes
import os
import time
from dataclasses import dataclass
from datetime import datetime
from getpass import getpass
from pathlib import Path
from typing import Any, Dict, Optional, Tuple
from urllib.parse import urlsplit

import pandas as pd
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry


# =========================
# DEFAULTS AND ADVANCED CONFIGURATION
# =========================

# Excel input
excel_folder = "."  # startup prompt defaults to the current working directory
excel_filename = "InitialFileUpload.xlsx"
sheet_name = 0  # first sheet; change to a sheet name if preferred, e.g. "Files"

# Required input columns in the Excel file
file_name_col = "Name"
folder_path_col = "Folder Path"

# Intelex site and authentication
Intelex_Site_URL = ""  # required at the startup prompt

# Intelex object/system configuration
file_upload_endpoint = f"{Intelex_Site_URL}/api/v2/FileUpload"
record_creation_endpoint = f"{Intelex_Site_URL}/api/v2/object/DocCtrl_summitDocImptObject"
sys_file_info_entity_name = "SysFileInfoEntity"

# Target object field names used in the record creation payload
file_bind_field = "File@odata.bind"
upload_folder_path_field = "UploaFolderPath"
original_file_name_field = "OriginaFileName"

# Runtime controls
request_timeout_seconds = 60
rate_limit_delay_seconds = 0.25  # set to 1.0 if the environment needs the original conservative delay
checkpoint_every_n_rows = 25
resume_mode = True  # skips rows already marked OverallStatus = Success
max_excel_cell_chars = 32000

# Retry controls for transient HTTP/network failures
retry_total = 5
retry_backoff_factor = 1.5
retry_status_codes = [429, 500, 502, 503, 504]

# Output controls
output_file_prefix = "Updated_"
log_file_prefix = "Upload_Log_"

# Use Python's built-in MIME tables for consistent results across machines,
# without taking file-type overrides from the Windows registry.
mime_type_database = mimetypes.MimeTypes()

# Some Python versions omit newer Office formats from their built-in tables.
# These explicit mappings also ensure PDFs always use the expected MIME type.
file_mime_type_overrides = {
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".docm": "application/vnd.ms-word.document.macroEnabled.12",
    ".xls": "application/vnd.ms-excel",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xlsm": "application/vnd.ms-excel.sheet.macroEnabled.12",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".pptm": "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
}


# =========================
# STATUS COLUMN NAMES
# =========================

UPLOAD_STATUS_COL = "UploadStatus"
RECORD_STATUS_COL = "RecordCreationStatus"
OVERALL_STATUS_COL = "OverallStatus"
FILE_UID_COL = "FileUID"
API_CALL_1_RESULT_COL = "APICall1Result"
API_CALL_2_RESULT_COL = "APICall2Result"
ERROR_MESSAGE_COL = "ErrorMessage"
PROCESSED_AT_COL = "ProcessedAt"


@dataclass
class RunStats:
    total_rows: int = 0
    skipped_already_success: int = 0
    skipped_validation: int = 0
    missing_files: int = 0
    uploaded_success: int = 0
    upload_failed: int = 0
    record_created_success: int = 0
    record_creation_failed: int = 0


# =========================
# HELPER FUNCTIONS
# =========================


def truncate_for_excel(value: Any, max_chars: int = max_excel_cell_chars) -> str:
    """Prevent Excel cell overflow when writing long API responses/errors."""
    text = "" if value is None else str(value)
    if len(text) <= max_chars:
        return text
    return text[: max_chars - 50] + "... [truncated]"


def safe_string(value: Any) -> str:
    """Convert a cell value to a clean string, treating NaN/None as blank."""
    if pd.isna(value):
        return ""
    return str(value).strip()


def setup_logging(output_dir: Path) -> Path:
    """Create a timestamped log file and configure console + file logging."""
    output_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_file_path = output_dir / f"{log_file_prefix}{timestamp}.log"

    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s | %(levelname)s | %(message)s",
        handlers=[
            logging.FileHandler(log_file_path, encoding="utf-8"),
            logging.StreamHandler(),
        ],
    )

    return log_file_path


def create_retry_session() -> requests.Session:
    """Create a reusable requests session with retry handling for transient failures."""
    session = requests.Session()

    retry_strategy = Retry(
        total=retry_total,
        connect=retry_total,
        read=retry_total,
        status=retry_total,
        backoff_factor=retry_backoff_factor,
        status_forcelist=retry_status_codes,
        allowed_methods={"GET", "POST", "PUT", "PATCH", "DELETE"},
        raise_on_status=False,
    )

    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    return session


def validate_required_columns(df: pd.DataFrame, required_columns: Tuple[str, ...]) -> None:
    """Raise a clear error if required Excel columns are missing."""
    missing = [col for col in required_columns if col not in df.columns]
    if missing:
        raise ValueError(f"Missing required Excel column(s): {', '.join(missing)}")


def ensure_status_columns(df: pd.DataFrame) -> pd.DataFrame:
    """Add status/result columns if they do not already exist."""
    for col in [
        UPLOAD_STATUS_COL,
        RECORD_STATUS_COL,
        OVERALL_STATUS_COL,
        FILE_UID_COL,
        API_CALL_1_RESULT_COL,
        API_CALL_2_RESULT_COL,
        ERROR_MESSAGE_COL,
        PROCESSED_AT_COL,
    ]:
        if col not in df.columns:
            df[col] = ""
    return df


def build_file_path(folder_path: str, file_name: str) -> Path:
    """Build the full file path from the folder path and file name."""
    return Path(folder_path) / file_name


def get_file_mime_type(file_name: str) -> str:
    """Infer the uploaded file's MIME type, with a binary fallback.

    Python 3.13+ provides guess_file_type() for filesystem names; older versions
    use guess_type(). MIME detection uses the filename, not the file contents.
    Encoded files (for example, report.pdf.gz) use a binary MIME type because
    the upload sends their compressed bytes without a Content-Encoding header.
    """
    extension = Path(file_name).suffix.lower()
    if extension in file_mime_type_overrides:
        return file_mime_type_overrides[extension]

    guess_mime_type = getattr(
        mime_type_database, "guess_file_type", mime_type_database.guess_type
    )
    mime_type, encoding = guess_mime_type(file_name, strict=False)
    if encoding:
        return "application/octet-stream"
    return mime_type or "application/octet-stream"


def upload_file(
    session: requests.Session,
    api_endpoint: str,
    api_key_value: str,
    file_path: Path,
    file_name: str,
) -> Tuple[bool, Optional[str], str, int]:
    """
    Upload a file to Intelex FileUpload.

    Returns:
        success, file_uid, response_summary, status_code
    """
    headers = {
        "Authorization": f"ApiKey {api_key_value}",
    }

    mime_type = get_file_mime_type(file_name)
    logging.info("Upload file MIME type: %s | File: %s", mime_type, file_name)

    # requests generates the outer multipart/form-data header and boundary.
    # The third tuple value sets the individual file part's MIME type.
    with file_path.open("rb") as file_handle:
        files_payload = {
            "file": (file_name, file_handle, mime_type)
        }

        response = session.post(
            api_endpoint,
            headers=headers,
            files=files_payload,
            timeout=request_timeout_seconds,
        )

    response_summary = f"Status: {response.status_code}, Response: {truncate_for_excel(response.text)}"

    if response.status_code != 201:
        return False, None, response_summary, response.status_code

    try:
        response_json = response.json()
    except ValueError:
        return False, None, f"{response_summary}; Error: Response was not valid JSON", response.status_code

    if isinstance(response_json, list) and len(response_json) == 1 and response_json[0]:
        return True, str(response_json[0]), response_summary, response.status_code

    return (
        False,
        None,
        f"{response_summary}; Error: Unexpected FileUpload response format: {response_json}",
        response.status_code,
    )


def create_file_record(
    session: requests.Session,
    api_endpoint: str,
    api_key_value: str,
    base_url: str,
    file_uid: str,
    folder_path: str,
    file_name: str,
) -> Tuple[bool, str, int]:
    """
    Create the custom Intelex object record that binds to the uploaded file.

    Returns:
        success, response_summary, status_code
    """
    headers = {
        "Authorization": f"ApiKey {api_key_value}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    json_body: Dict[str, Any] = {
        file_bind_field: f"{base_url}/api/v2/object/{sys_file_info_entity_name}({file_uid})",
        upload_folder_path_field: folder_path,
        original_file_name_field: file_name,
    }

    response = session.post(
        api_endpoint,
        headers=headers,
        json=json_body,
        timeout=request_timeout_seconds,
    )

    response_summary = f"Status: {response.status_code}, Response: {truncate_for_excel(response.text)}"
    return response.status_code == 201, response_summary, response.status_code


def save_checkpoint(df: pd.DataFrame, output_file_path: Path) -> None:
    """Save current Excel status to disk."""
    df.to_excel(output_file_path, index=False)
    logging.info("Checkpoint saved: %s", output_file_path)


# =========================
# MAIN PROCESSING FUNCTION
# =========================


def upload_files_from_excel(
    excel_file: Path,
    sheet: Any,
    output_dir: Path,
    base_url: str,
    api_key_value: str,
    upload_endpoint: str,
    record_endpoint: str,
    file_name_column: str,
    folder_path_column: str,
) -> Tuple[RunStats, Path, Path]:
    """
    Reads an Excel file, uploads files to Intelex, creates linked records, and writes
    row-by-row processing results back to an output Excel file.
    """
    output_dir.mkdir(parents=True, exist_ok=True)
    log_file_path = setup_logging(output_dir)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file_path = output_dir / f"{output_file_prefix}{excel_file.stem}_{timestamp}.xlsx"

    logging.info("Starting Intelex file upload run")
    logging.info("Input Excel: %s", excel_file)
    logging.info("Output Excel: %s", output_file_path)
    logging.info("Intelex Site URL: %s", base_url)

    if not excel_file.exists():
        raise FileNotFoundError(f"Excel file not found: {excel_file}")

    if not api_key_value or api_key_value == "PASTE_API_KEY_HERE":
        raise ValueError("API key is missing. Enter it at the prompt or supply INTELEX_API_KEY in the process environment.")

    df = pd.read_excel(excel_file, sheet_name=sheet)
    validate_required_columns(df, (file_name_column, folder_path_column))
    df = ensure_status_columns(df)

    stats = RunStats(total_rows=len(df))
    session = create_retry_session()
    start_time = time.time()

    for index, row in df.iterrows():
        row_number = index + 2  # Excel-style row number, assuming header row is row 1
        progress_label = f"[{index + 1}/{len(df)} | Excel Row {row_number}]"

        existing_overall_status = safe_string(row.get(OVERALL_STATUS_COL))
        if resume_mode and existing_overall_status.lower() == "success":
            stats.skipped_already_success += 1
            logging.info("%s Skipping already successful row", progress_label)
            continue

        file_name = safe_string(row.get(file_name_column))
        folder_path = safe_string(row.get(folder_path_column))
        processed_at = datetime.now().isoformat(timespec="seconds")

        # Reset row status fields for this attempt
        df.at[index, UPLOAD_STATUS_COL] = ""
        df.at[index, RECORD_STATUS_COL] = ""
        df.at[index, OVERALL_STATUS_COL] = ""
        df.at[index, FILE_UID_COL] = ""
        df.at[index, API_CALL_1_RESULT_COL] = ""
        df.at[index, API_CALL_2_RESULT_COL] = ""
        df.at[index, ERROR_MESSAGE_COL] = ""
        df.at[index, PROCESSED_AT_COL] = processed_at

        # Validate row data
        if not file_name:
            message = "Missing or invalid file name"
            stats.skipped_validation += 1
            df.at[index, OVERALL_STATUS_COL] = "Skipped"
            df.at[index, ERROR_MESSAGE_COL] = message
            logging.warning("%s %s", progress_label, message)
            continue

        if not folder_path:
            message = "Missing or invalid folder path"
            stats.skipped_validation += 1
            df.at[index, OVERALL_STATUS_COL] = "Skipped"
            df.at[index, ERROR_MESSAGE_COL] = message
            logging.warning("%s %s | File: %s", progress_label, message, file_name)
            continue

        file_path = build_file_path(folder_path, file_name)

        if not file_path.exists() or not file_path.is_file():
            message = f"File not found: {file_path}"
            stats.missing_files += 1
            df.at[index, UPLOAD_STATUS_COL] = "Skipped"
            df.at[index, OVERALL_STATUS_COL] = "Failed"
            df.at[index, ERROR_MESSAGE_COL] = message
            logging.error("%s %s", progress_label, message)
            continue

        logging.info("%s Uploading file: %s", progress_label, file_path)

        # API call 1: upload file
        try:
            upload_success, file_uid, upload_result, upload_status_code = upload_file(
                session=session,
                api_endpoint=upload_endpoint,
                api_key_value=api_key_value,
                file_path=file_path,
                file_name=file_name,
            )

            df.at[index, API_CALL_1_RESULT_COL] = upload_result

            if not upload_success or not file_uid:
                stats.upload_failed += 1
                df.at[index, UPLOAD_STATUS_COL] = "Failed"
                df.at[index, OVERALL_STATUS_COL] = "Failed"
                df.at[index, ERROR_MESSAGE_COL] = upload_result
                logging.error(
                    "%s Upload failed for %s | HTTP %s | %s",
                    progress_label,
                    file_name,
                    upload_status_code,
                    upload_result,
                )
                continue

            stats.uploaded_success += 1
            df.at[index, UPLOAD_STATUS_COL] = "Success"
            df.at[index, FILE_UID_COL] = file_uid
            logging.info("%s File uploaded successfully | FileUID: %s", progress_label, file_uid)

        except requests.exceptions.RequestException as exc:
            stats.upload_failed += 1
            message = f"Upload request failed: {truncate_for_excel(exc)}"
            df.at[index, UPLOAD_STATUS_COL] = "Failed"
            df.at[index, OVERALL_STATUS_COL] = "Failed"
            df.at[index, ERROR_MESSAGE_COL] = message
            logging.exception("%s %s", progress_label, message)
            continue
        except OSError as exc:
            stats.upload_failed += 1
            message = f"File read failed: {truncate_for_excel(exc)}"
            df.at[index, UPLOAD_STATUS_COL] = "Failed"
            df.at[index, OVERALL_STATUS_COL] = "Failed"
            df.at[index, ERROR_MESSAGE_COL] = message
            logging.exception("%s %s", progress_label, message)
            continue

        # API call 2: create object record binding to the uploaded file
        try:
            record_success, record_result, record_status_code = create_file_record(
                session=session,
                api_endpoint=record_endpoint,
                api_key_value=api_key_value,
                base_url=base_url,
                file_uid=file_uid,
                folder_path=folder_path,
                file_name=file_name,
            )

            df.at[index, API_CALL_2_RESULT_COL] = record_result

            if record_success:
                stats.record_created_success += 1
                df.at[index, RECORD_STATUS_COL] = "Success"
                df.at[index, OVERALL_STATUS_COL] = "Success"
                logging.info("%s File record creation successful", progress_label)
            else:
                stats.record_creation_failed += 1
                df.at[index, RECORD_STATUS_COL] = "Failed"
                df.at[index, OVERALL_STATUS_COL] = "Partial Failure"
                df.at[index, ERROR_MESSAGE_COL] = record_result
                logging.error(
                    "%s Record creation failed for %s | HTTP %s | %s",
                    progress_label,
                    file_name,
                    record_status_code,
                    record_result,
                )

        except requests.exceptions.RequestException as exc:
            stats.record_creation_failed += 1
            message = f"Record creation request failed: {truncate_for_excel(exc)}"
            df.at[index, RECORD_STATUS_COL] = "Failed"
            df.at[index, OVERALL_STATUS_COL] = "Partial Failure"
            df.at[index, ERROR_MESSAGE_COL] = message
            logging.exception("%s %s", progress_label, message)

        # Save periodic checkpoints so the run can be resumed if interrupted
        if checkpoint_every_n_rows and (index + 1) % checkpoint_every_n_rows == 0:
            save_checkpoint(df, output_file_path)

        if rate_limit_delay_seconds > 0:
            time.sleep(rate_limit_delay_seconds)

    save_checkpoint(df, output_file_path)

    elapsed_seconds = int(time.time() - start_time)
    elapsed_hms = time.strftime("%H:%M:%S", time.gmtime(elapsed_seconds))

    logging.info("Intelex file upload run complete")
    logging.info("Total rows: %s", stats.total_rows)
    logging.info("Skipped already successful: %s", stats.skipped_already_success)
    logging.info("Skipped validation: %s", stats.skipped_validation)
    logging.info("Missing files: %s", stats.missing_files)
    logging.info("Uploaded successfully: %s", stats.uploaded_success)
    logging.info("Upload failed: %s", stats.upload_failed)
    logging.info("Records created successfully: %s", stats.record_created_success)
    logging.info("Record creation failed: %s", stats.record_creation_failed)
    logging.info("Elapsed time: %s", elapsed_hms)
    logging.info("Final status Excel: %s", output_file_path)
    logging.info("Log file: %s", log_file_path)

    return stats, output_file_path, log_file_path


# =========================
# RUN
# =========================


def prompt_setting(label: str, default: str = "") -> str:
    """Read a required setting, accepting Enter when a default is available."""
    while True:
        suffix = f" [{default}]" if default else ""
        value = input(f"{label}{suffix}: ").strip() or default
        if value:
            return value
        print("Please enter a value.")


def prompt_run_settings() -> Tuple[str, str, Any, str, str, str, str]:
    """Collect this run's settings before opening files or sending requests."""
    print("Enter the settings for this upload. Press Enter to accept a shown default.")
    try:
        folder = prompt_setting("Excel folder", str(Path(excel_folder).resolve())).strip('"')
        filename = prompt_setting("Excel filename", excel_filename).strip('"')
        while True:
            sheet_text = prompt_setting("Worksheet (0-based index or name; name:0 for a sheet named 0)", str(sheet_name))
            if sheet_text.startswith("name:"):
                sheet = sheet_text[5:]
                if sheet:
                    break
                print("Enter a worksheet name after name:.")
            elif sheet_text.lstrip("+-").isdigit():
                sheet = int(sheet_text)
                if sheet >= 0:
                    break
                print("Worksheet indexes must be zero or greater.")
            else:
                sheet = sheet_text
                break
        name_column = prompt_setting("File name column", file_name_col)
        folder_column = prompt_setting("Folder path column", folder_path_col)
        while True:
            site = prompt_setting("Intelex site URL", Intelex_Site_URL).rstrip("/")
            parsed = urlsplit(site)
            if parsed.scheme == "https" and parsed.hostname and not (
                parsed.username or parsed.password or parsed.query or parsed.fragment
            ):
                break
            print("Enter an HTTPS site URL without credentials, a query, or a fragment.")
        key = os.environ.get("INTELEX_API_KEY", "").strip()
        if key:
            print("Using the API key supplied in INTELEX_API_KEY.")
        else:
            key = getpass("Enter your Intelex API key: ").strip()
    except (EOFError, KeyboardInterrupt):
        raise SystemExit("Upload setup cancelled. No uploads were started.")

    if not key or key == "PASTE_API_KEY_HERE":
        raise SystemExit("An Intelex API key is required. Enter it at the prompt or supply INTELEX_API_KEY.")
    return folder, filename, sheet, name_column, folder_column, site, key


if __name__ == "__main__":
    (
        excel_folder, excel_filename, sheet_name, file_name_col,
        folder_path_col, Intelex_Site_URL, api_key,
    ) = prompt_run_settings()
    file_upload_endpoint = f"{Intelex_Site_URL}/api/v2/FileUpload"
    record_creation_endpoint = f"{Intelex_Site_URL}/api/v2/object/DocCtrl_summitDocImptObject"
    excel_file_path = Path(excel_folder) / excel_filename
    output_directory = Path(excel_folder)

    run_stats, output_excel, log_file = upload_files_from_excel(
        excel_file=excel_file_path,
        sheet=sheet_name,
        output_dir=output_directory,
        base_url=Intelex_Site_URL,
        api_key_value=api_key,
        upload_endpoint=file_upload_endpoint,
        record_endpoint=record_creation_endpoint,
        file_name_column=file_name_col,
        folder_path_column=folder_path_col,
    )

    print("\n=========================")
    print("UPLOAD SUMMARY")
    print("=========================")
    print(f"Total rows:                 {run_stats.total_rows}")
    print(f"Skipped already successful: {run_stats.skipped_already_success}")
    print(f"Skipped validation:         {run_stats.skipped_validation}")
    print(f"Missing files:              {run_stats.missing_files}")
    print(f"Uploaded successfully:      {run_stats.uploaded_success}")
    print(f"Upload failed:              {run_stats.upload_failed}")
    print(f"Records created:            {run_stats.record_created_success}")
    print(f"Record creation failed:     {run_stats.record_creation_failed}")
    print(f"\nStatus Excel: {output_excel}")
    print(f"Log file:     {log_file}")
