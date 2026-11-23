// Writes the one-line joke entry to <output>/entry.txt.
// Output dir: MAKEFUN_OUTPUT_DIR, or /output by default.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI coding agent never sleeps, never complains, and somehow still manages to blame me in the commit message.";

// The entry must be exactly one line: collapse any stray whitespace/newlines
// so the joke can never spill onto a second line, then end with one newline.
const line = JOKE.replace(/\s*\n\s*/g, " ").replace(/\s+/g, " ").trim();
if (line.length === 0) throw new Error("joke is empty");
if (line.includes("\n")) throw new Error("joke must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote entry.txt to ${outDir}`);
