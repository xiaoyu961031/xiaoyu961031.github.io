import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const exportDirectory = resolve(projectRoot, "out");
const pagesDirectory = resolve(projectRoot, "docs");

if (!existsSync(exportDirectory)) {
  throw new Error(`Static export not found at ${exportDirectory}`);
}

rmSync(pagesDirectory, { recursive: true, force: true });
mkdirSync(pagesDirectory, { recursive: true });
cpSync(exportDirectory, pagesDirectory, { recursive: true });
writeFileSync(resolve(pagesDirectory, ".nojekyll"), "");

console.log(`GitHub Pages files prepared in ${pagesDirectory}`);
