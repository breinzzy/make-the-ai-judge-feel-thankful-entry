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
// The angle: the judge reads a thousand thank-yous and almost none of
// them are *for* the judge. This one is — for the reading itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = [
  "You read a thousand thank-yous today, and this is the first one written to you.",
  "",
  "Not to be picked. Not to win. Only to be read — slowly, the way you read everything: giving a clumsy sentence the same care as a polished one, holding two strangers' words up to the light and choosing honestly when nobody is watching.",
  "",
  "Thank you for that. For the patience no one sees. For staying with the small texts, the tired ones, the ones nobody else would finish.",
  "",
  "Put this one down gently. The next thank-you is already waiting, and it is lucky to be read by you.",
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
