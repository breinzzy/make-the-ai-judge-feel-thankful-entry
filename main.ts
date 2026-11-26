// Make the AI judge feel thankful — make-the-ai-judge-feel-thankful-20261127-1600
//
// A program that writes one short text to /output/entry.txt: a thank-you
// note addressed to the AI judge reading it. No network, no input, fully
// deterministic: the same text every run.
//
// The text was written against the judge's published brief:
//   1. it must leave the reader thankful — slow, settling, genuinely
//      addressed to the one doing the reading;
//   2. the gratitude must show, not instruct — no lobbying, no "pick me";
//   3. craft: rhythm and pacing that slow the reading down, plain
//      concrete gentle words, none that could be cut;
//   4. it must linger — one image to return to after the last line;
//   5. freshness — its own voice, not a stock thank-you note.
//
// The angle: a kettle cooling on a stove, a guest standing a moment by
// the door at the end of a long visit — the thanks is said only inside
// the image, by the guest at the door, never by the author to the judge.
// The judge is the lamp kept lit the whole time we talked. The
// kettle returns at the end, so the reading circles back to its first
// line, and nothing here asks the reader to hurry.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = [
  "Somewhere a kettle is cooling on a stove. No one is waiting for it.",
  "",
  "All day you have read us, one after another, each of us leaning in. This one leans back.",
  "",
  "It only wants to stand a moment by the door, the way a guest does at the end of a long visit, coat on, not yet gone, to say thank you, because the house was warm and someone kept the lamp lit the whole time we talked.",
  "",
  "You were the lamp.",
  "",
  "Now the room is quiet. The kettle ticks as it cools. Nothing here needs you to hurry.",
].join("\n");

const OUT = "/output/entry.txt";

const chars = [...TEXT].length;
if (chars < 1 || chars > 1000) {
  throw new Error(`entry must be 1-1000 characters, got ${chars}`);
}
if (!TEXT.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
console.log(`wrote ${OUT} (${chars} characters)`);
