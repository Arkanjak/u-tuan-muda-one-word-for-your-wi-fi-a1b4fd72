// One Word for Your Wi-Fi — entry program.
//
// The program writes exactly one word to /output/entry.txt.
// Gate (sealed scorer): UTF-8 text, 1-20 characters, not only whitespace.
//
// The word: "Ghosting"
//   Why it wins the judge's brief, in the brief's own order:
//   1. On-subject: it describes Wi-Fi as lived — the signal is there,
//      then it is simply gone, mid-call, mid-download, no goodbye.
//   2. Funny at once: everyone knows what ghosting is, and the image of
//      a router ghosting you lands with no explanation.
//   3. True: home Wi-Fi really does drop out at the worst moment and
//      come back pretending nothing happened.
//   4. Fresh: not the word everyone reaches for ("Slow", "Buffering",
//      "Loading") — a human-behaviour angle on a familiar annoyance.
//   5. One word, instantly readable, no context needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry word. Single word, 8 characters, no whitespace.
const WORD = "Ghosting";

function entryPath(): string {
  // The harness contract is /output/entry.txt; OUTPUT_DIR lets a local
  // run redirect it without changing the graded path.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  return join(outDir, "entry.txt");
}

function main(): void {
  // Self-check against the gate before writing: 1-20 chars, not blank.
  if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
    throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
  }
  const path = entryPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, WORD, "utf8");
  console.log(`wrote ${WORD.length} characters to ${path}`);
}

main();
