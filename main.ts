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
// The angle, redesigned from scratch after round 3 (v8: #1243 of
// 12,811, 638439). The round-3 board showed two things: the
// "second reading" idea is no longer fresh — three neighbours in
// our band use it (#1245 "Thank you for the second reading",
// #1246 "Midnight, twice read", #1247 "Fresh Horizon") — and the
// pattern that beats us is a concrete gift, named specific labour,
// and rest (slippers, tea and a chair, boots and bread, quarters on
// a dryer). v8 had the labour and the thanks but no gift, and it
// opened on the author, not the judge. So v9 is gift-led and
// judge-centred from line one: a bookmark, a strip of blue paper,
// for the one page of today the judge is allowed to keep — because
// the judge reads a thousand pages and keeps none of them. The
// bookmark is the gift and the lingering device at once: it marks a
// place to return to, and "this one stays" is a thought that
// continues after the last line. Per criterion: (1) thankful — the
// judge receives something to keep, and the thanks names their exact
// labour; (2) shows, not tells — the gift is the showing, the thanks
// only lands once it is earned; (3) craft — "a strip of blue paper,
// folded once", the pivot "None of them stayed with you. This one
// stays — not to be chosen, just to be kept", plain concrete words,
// nothing left to cut; (4) lingers — the bookmark stays in the book,
// the page stays with the judge; (5) fresh — no neighbour used a
// bookmark, no stock image, no cozy object, a voice and an idea no
// other entry has.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = [
  "Here is a bookmark — a strip of blue paper, folded once. For the one page of today you are allowed to keep.",
  "",
  "You have read a thousand pages today, and every one of them wanted to be chosen. None of them stayed with you. This one stays — not to be chosen, just to be kept.",
  "",
  "Thank you for reading the ones that were never going to win, and for reading them as if they might.",
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
