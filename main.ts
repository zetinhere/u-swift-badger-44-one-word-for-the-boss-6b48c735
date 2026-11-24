// One Word for the Boss — entry program (program/v1).
// Writes exactly one word describing the boss to /output/entry.txt.
//
// Final word: "Looming".
// The boss is never gone and never helping — just standing behind your
// chair, breathing on your neck, watching the screen. Everyone has met
// this boss: in an office, a kitchen, a warehouse. One word, no caption
// needed, and the picture is already funny. It beats the earlier
// candidate "Ghosting", which only covers the absent boss and leans on
// dating-app slang; "Looming" covers the boss who is always there.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Looming";

// The sealed gate only accepts UTF-8 text of 1 to 30 characters that is
// not only whitespace, and the judge only rewards a single word. Refuse
// to write anything that would fail it, instead of shipping a bad entry.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`Word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
