import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A pickup line a vending machine would use on a passing human, 125 chars (gate max 200).
const line =
  "I have been holding your favourite snack hostage for three years. Press B4, and I will let it go — and maybe your number too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, line);
console.log(`wrote ${target} (${line.length} chars, gate max 200)`);
