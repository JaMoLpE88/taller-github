#!/usr/bin/env node
// Comprueba que los enlaces relativos de los .md apunten a ficheros que existen.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, resolve, extname } from "node:path";

const mdFiles = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const p = resolve(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".md")) mdFiles.push(p);
  }
}
walk(".");

let broken = 0;
for (const file of mdFiles) {
  const text = readFileSync(file, "utf8");
  const links = [...text.matchAll(/\]\(([^)#\s]+)(?:#[^)]*)?\)/g)].map((m) => m[1]);
  for (const link of links) {
    if (/^[a-z]+:|^\/|^www\./i.test(link) || link.startsWith("{")) continue; // URLs absolutas y plantillas: fuera
    const target = resolve(dirname(file), decodeURIComponent(link));
    if (!existsSync(target)) {
      console.error(`Enlace roto en ${file}: (${link})`);
      broken++;
    }
  }
}

if (broken > 0) {
  console.error(`✖ ${broken} enlace(s) roto(s)`);
  process.exit(1);
}
console.log(`✔ ${mdFiles.length} archivos .md, todos los enlaces relativos apuntan a ficheros reales`);
