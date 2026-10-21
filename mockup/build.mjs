import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("src", "dist", { recursive: true });

const [html, css, javascript, favicon] = await Promise.all([
  readFile("src/index.html", "utf8"),
  readFile("src/styles.css", "utf8"),
  readFile("src/app.js", "utf8"),
  readFile("src/favicon.svg", "utf8")
]);

const faviconDataUrl = `data:image/svg+xml,${encodeURIComponent(favicon)}`;
const singleFile = html
  .replace(
    '<link rel="icon" href="./favicon.svg" type="image/svg+xml" />',
    `<link rel="icon" href="${faviconDataUrl}" type="image/svg+xml" />`
  )
  .replace(
    '<link rel="stylesheet" href="./styles.css" />',
    `<style>\n${css}\n    </style>`
  )
  .replace(
    '<script src="./app.js"></script>',
    `<script>\n${javascript.replace(/<\/script/gi, "<\\/script")}\n    </script>`
  );

await Promise.all([
  writeFile("intelex-view.txt", singleFile, "utf8"),
  writeFile("dist/intelex-view.txt", singleFile, "utf8")
]);

console.log("Built static site and intelex-view.txt");
