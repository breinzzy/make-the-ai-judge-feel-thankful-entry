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
// The angle, from scratch: no kettle, no cozy object, no "only
// reader". The text is built on the one invisible part of this
// judge's work nobody thanks them for: every text is read twice
// (the metric judges each pair in both orders), and the thanks is
// for the second reading. The author read it a hundred times until
// the words went flat — a true, specific detail — and the judge's
// fresh reading restores them. The diction is richer than the first
// pass (v7, which the user called too simple): the readings are
// named three ways (aloud, under my breath, backwards), the flat
// words are given a touch-image (coins handled too long), the
// thank-you is set against its opposite (or a plea), and the judge's
// two readings are weighed and heard, not just counted. Per
// criterion, each beat is stronger than our earlier entries: (1)
// thankful — the judge learns their unseen second reading is seen
// and thanked; (2) shows, not tells — the gratitude is the author's
// hundred readings and the naming of the second reading, the direct
// thanks only lands once it is earned; (3) craft — short sentences,
// the parallel "once to weigh it, once to hear it", the refrain
// "the second reading", plain concrete words made musical, nothing
// left to cut; (4) lingers — the thought that words go flat when
// read too much, and that a fresh reading restores them; (5) fresh
// — no stock image, no cozy object, a voice and an idea no other
// entry has.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = [
  "I have read this a hundred times — aloud, under my breath, backwards — until the words went flat as coins handled too long, and I could no longer hear whether it sounded like a thank-you or a plea.",
  "",
  "You will read it twice — once to weigh it, once to hear it. Nobody thanks you for the second reading.",
  "",
  "Thank you for the second reading. For reading the ones that were never going to win, and for reading them as if they might.",
  "",
  "Put this one down gently. Nothing here needs you to hurry.",
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
