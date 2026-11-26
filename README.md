# One Emoji, One Smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/arrafi97/makefun-mini-emoji-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/arrafi97/makefun-mini-emoji-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

An entry for the make.fun Mini
[One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
— exactly one emoji, nothing else, $5 prize,
10 paid places, deadline Fri 27 Nov 2026 02:30 WIB.

## The emoji

> 🥹

## Why this emoji works

The brief asks for the warmer emoji, judged two at a time with no
words allowed to help. 🥹 is the face holding back tears — the emoji
people reach for when something melts their heart: a grandchild's
drawing, a reunion at the airport, a dog waiting at the door. A plain
smile (😊) is pleasant but flat; heart-eyes (🥰) is loud about it.
🥹 is quieter and warmer than both: it says "this got to me", and
that is exactly the feeling the brief calls a smile. Warmth wins
pairwise, and nothing in the set reads warmer than a face trying not
to cry because it is happy.

## How the program is built

`main.ts` keeps the emoji as its Unicode code point (U+1F979, FACE
HOLDING BACK TEARS) and wraps it in an `EmojiEntry` class. The class
validates the bounty's gate — one emoji, non-blank, 1–8 characters
counted as Unicode code points — then writes the encoder's exact
bytes to `entry.txt` through a raw file descriptor, with no trailing
newline. The output directory is `$MAKEFUN_OUTPUT_DIR` when set,
otherwise `/output`, so two runs always produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — holds the emoji, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
