const workItems = [
  { title: "Annual Electrical Safety Refresher", detail: "Assigned learning requirement", app: "Training", due: "Sep 24", priority: "High" },
  { title: "Battery Energy Storage — Weekly", detail: "Edwards Sanborn · 18 questions", app: "Inspections", due: "Today", priority: "High" },
  { title: "Hot Work Permit Procedure", detail: "Approval · Revision 4.0", app: "Documents", due: "Today", priority: "Medium" },
  { title: "Verify corrective action: BESS-204", detail: "Assigned by Sarah Chen", app: "Tasks", due: "Sep 29", priority: "Medium" },
  { title: "Review Solar Site Housekeeping", detail: "Inspection approval", app: "Inspections", due: "Sep 30", priority: "Normal" },
  { title: "Review exposed cable tray observation", detail: "Mojave Wind · HZ-2026-041", app: "Hazard ID", due: "Today", priority: "High" },
  { title: "Complete supervisor review: INC-2026-018", detail: "Workflow access", app: "Incidents", due: "Sep 30", priority: "Medium" }
];

document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat("en-US", {
  weekday: "long", month: "long", day: "numeric"
}).format(new Date());

const documents = [
  ["TG-EHS-PRO-014", "Hot Work Permit Procedure", "Revision 4.0 · Effective Sep 12, 2026", "Controlled"],
  ["TG-OPS-WI-028", "Battery Isolation Work Instruction", "Revision 2.1 · Effective Aug 30, 2026", "Controlled"],
  ["TG-EHS-POL-002", "Environmental, Health & Safety Policy", "Revision 6.0 · Effective Jul 1, 2026", "Corporate"],
  ["TG-OPS-FRM-104", "Pre-Task Planning Form", "Revision 3.2 · Effective Jun 18, 2026", "Form"]
];

const courses = [
  ["Annual Electrical Safety Refresher", "Online · 38 minutes", "0", "Overdue"],
  ["Lockout / Tagout — Authorized Employee", "Instructor-led · Completed Sep 10", "100", "Complete"],
  ["Fleet Safety Training", "Online · Due Oct 14", "35", "In progress"],
  ["Environmental Compliance Fundamentals", "Document review · Due Nov 2", "0", "Not started"]
];

const inspections = [
  ["26", "Sep", "Battery Energy Storage — Weekly", "Edwards Sanborn · 18 questions", "Start"],
  ["29", "Sep", "Solar Site Housekeeping", "Sanborn Solar · 24 questions", "Start"],
  ["02", "Oct", "Wind Turbine Safety Walkdown", "Mojave Wind · 31 questions", "Preview"],
  ["06", "Oct", "Stormwater BMP Inspection", "Edwards Sanborn · 22 questions", "Preview"]
];

const hazards = [
  ["HZ-2026-041", "Exposed cable tray at inverter pad", "Mojave Wind · Reported today", "Awaiting action"],
  ["HZ-2026-039", "Blocked access to emergency disconnect", "Edwards Sanborn BESS · Sep 23", "Action assigned"],
  ["HZ-2026-036", "Standing water near transformer enclosure", "Sanborn Solar · Sep 18", "Controlled"],
  ["HZ-2026-031", "Damaged anti-slip tread at stair landing", "Mojave Wind · Sep 11", "Closed"]
];

const incidents = [
  ["INC-2026-018", "Equipment contact — no injury", "Edwards Sanborn BESS", "Supervisor review", "Sep 30"],
  ["INC-2026-014", "First aid event", "Mojave Wind", "Investigation input", "Oct 2"]
];

const views = [...document.querySelectorAll(".view")];
const validViews = views.map(view => view.id.replace("view-", ""));

function showView(name) {
  if (!validViews.includes(name)) name = "home";
  views.forEach(view => view.classList.toggle("active", view.id === `view-${name}`));
  if (window.location.hash !== `#${name}`) history.pushState(null, "", `#${name}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-view-link]").forEach(item => item.addEventListener("click", () => showView(item.dataset.viewLink)));
window.addEventListener("hashchange", () => showView(window.location.hash.slice(1) || "home"));

document.getElementById("taskRows").innerHTML = workItems.map(item => `<article class="task-row"><div><strong>${item.title}</strong><p>${item.detail}</p></div><span>${item.app}</span><span>${item.due}</span><span class="priority ${item.priority.toLowerCase()}">${item.priority}</span><span>›</span></article>`).join("");
document.getElementById("documentList").innerHTML = documents.map(item => `<article class="document-row"><div class="file-badge">PDF</div><div><strong>${item[1]}</strong><p>${item[0]} · ${item[2]}</p></div><div class="row-meta"><strong>${item[3]}</strong><span>View current →</span></div></article>`).join("");
document.getElementById("courseList").innerHTML = courses.map(item => `<article class="course-row"><div class="app-icon training-icon">◇</div><div><strong>${item[0]}</strong><p>${item[1]}</p></div><div class="row-meta"><strong>${item[3]}</strong><div class="course-progress"><i style="width:${item[2]}%"></i></div></div></article>`).join("");
document.getElementById("inspectionList").innerHTML = inspections.map(item => `<article class="inspection-row"><div class="date-box"><strong>${item[0]}</strong><span>${item[1]}</span></div><div><strong>${item[2]}</strong><p>${item[3]}</p></div><button class="row-button" ${item[4] === "Start" ? "data-open-inspection" : ""}>${item[4]}</button></article>`).join("");
document.getElementById("hazardList").innerHTML = hazards.map(item => `<article class="document-row"><div class="app-icon hazard-icon">△</div><div><strong>${item[1]}</strong><p>${item[0]} · ${item[2]}</p></div><div class="row-meta"><strong>${item[3]}</strong><span>Open record →</span></div></article>`).join("");
document.getElementById("incidentList").innerHTML = incidents.map(item => `<article class="document-row"><div class="app-icon incident-icon">!</div><div><strong>${item[1]}</strong><p>${item[0]} · ${item[2]}</p></div><div class="row-meta"><strong>${item[3]}</strong><span>Due ${item[4]} →</span></div></article>`).join("");

const modal = document.getElementById("inspectionModal");
function openModal() { modal.hidden = false; document.body.style.overflow = "hidden"; modal.querySelector("select").focus(); }
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
document.addEventListener("click", event => { if (event.target.closest("[data-open-inspection]")) openModal(); });
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
  if (event.key === "Escape" && !simpleModal.hidden) closeSimpleModal();
});
document.getElementById("modalStart").addEventListener("click", () => {
  closeModal(); const toast = document.getElementById("toast"); toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2800);
});

const simpleModal = document.getElementById("simpleModal");
const simpleTitle = document.getElementById("simple-modal-title");
const simpleEyebrow = document.getElementById("simpleModalEyebrow");
const simpleIntro = document.getElementById("simpleModalIntro");
function openSimpleModal(type) {
  const incident = type === "incident";
  simpleEyebrow.textContent = incident ? "New incident" : "New observation";
  simpleTitle.textContent = incident ? "Report an incident" : "Report a hazard";
  simpleIntro.textContent = incident ? "Capture the initial event. Sensitive details and investigation work are added through the controlled workflow." : "Start with the essentials. You can add supporting detail after the record is saved.";
  document.getElementById("simpleModalText").placeholder = incident ? "Describe the event and immediate response" : "Describe what you observed";
  simpleModal.hidden = false;
  document.body.style.overflow = "hidden";
  simpleModal.querySelector("select").focus();
}
function closeSimpleModal() { simpleModal.hidden = true; document.body.style.overflow = ""; }
document.addEventListener("click", event => {
  if (event.target.closest("[data-open-hazard]")) openSimpleModal("hazard");
  if (event.target.closest("[data-open-incident]")) openSimpleModal("incident");
});
document.getElementById("simpleModalClose").addEventListener("click", closeSimpleModal);
simpleModal.addEventListener("click", event => { if (event.target === simpleModal) closeSimpleModal(); });
document.getElementById("simpleModalStart").addEventListener("click", () => {
  closeSimpleModal();
  const toast = document.getElementById("toast");
  toast.textContent = "Draft saved. Continue when you are ready.";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
});

let attentionOnly = false;
document.getElementById("filterButton").addEventListener("click", event => {
  attentionOnly = !attentionOnly;
  event.currentTarget.innerHTML = attentionOnly ? "Needs attention <span>⌄</span>" : "All work <span>⌄</span>";
  document.querySelectorAll(".work-item").forEach(item => item.hidden = attentionOnly && !["overdue", "today"].includes(item.dataset.status));
});

showView(window.location.hash.slice(1) || "home");
