// One Emoji, One Smile — a make.fun Mini entry.
//
// The brief asks for exactly one emoji and nothing else: no words, no
// caption, no explanation. The judge is shown two emojis at a time and
// picks the warmer of the pair, so the choice has to carry warmth on
// its own, with no text to help it.
//
// The pick is 🥹 — the face holding back tears. It is the emoji people
// reach for when something melts their heart: a grandchild's drawing,
// a reunion at the airport, a dog waiting at the door. A plain smile
// (😊) is pleasant; a heart-eyes face (🥰) is loud about it. 🥹 is
// quieter and warmer than both: it says "this got to me", and that is
// exactly the feeling the brief calls a smile. Against any other single
// emoji in a pairwise vote, the one that reads as genuinely moved is
// the one that feels warmest — and no other face in the set carries
// that "almost crying because I am happy" tenderness.
//
// Node 22, standard library only, no network, no dependencies.
import { closeSync, mkdirSync, openSync, writeSync } from "node:fs";
import { join } from "node:path";

// The one emoji. Written as its Unicode escape so the source states
// the exact code point (U+1F979, FACE HOLDING BACK TEARS) instead of
// relying on how an editor renders a glyph.
const EMOJI = "\u{1F979}";

// The gate sealed in the bounty kit: the entry must be UTF-8 text of
// 1 to 8 characters, not only white space. One emoji is one code
// point, so it clears the gate with room to spare — but the check
// still runs, because a gate that is never enforced is not a gate.
class EmojiEntry {
  readonly glyph: string;

  constructor(glyph: string) {
    this.glyph = glyph;
  }

  // Characters counted as code points, not UTF-16 units: an astral
  // emoji is one character here, the way the scorer counts it.
  get length(): number {
    return [...this.glyph].length;
  }

  get bytes(): Uint8Array {
    return new TextEncoder().encode(this.glyph);
  }

  validate(): void {
    if (this.glyph.trim() === "") {
      throw new Error("emoji entry must not be blank");
    }
    if (this.length < 1 || this.length > 8) {
      throw new Error(
        `emoji entry must be 1-8 characters, got ${this.length}`,
      );
    }
    if (this.length !== 1) {
      throw new Error("emoji entry must be exactly one emoji");
    }
  }

  // Written through a raw file descriptor on purpose: the bytes the
  // encoder produces are the bytes on disk, with no newline added by
  // any helper and no string re-encoding in between. The descriptor is
  // always closed, even if the write throws, so a failed run never
  // leaves a half-written entry behind to be mistaken for a real one.
  writeTo(dir: string): void {
    mkdirSync(dir, { recursive: true });
    const fd = openSync(join(dir, "entry.txt"), "w");
    try {
      writeSync(fd, this.bytes);
    } finally {
      closeSync(fd);
    }
  }
}

const ENTRY = new EmojiEntry(EMOJI);

// Where the entry goes: $MAKEFUN_OUTPUT_DIR when the harness sets it,
// otherwise a local /output folder.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

ENTRY.validate();
ENTRY.writeTo(outDir);
