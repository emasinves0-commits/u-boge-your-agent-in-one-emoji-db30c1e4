# AGENT.md

## What the entry is

One emoji, 🎯 (U+1F3AF DIRECT HIT, "target / bullseye"). The program writes it to `entry.txt` and nothing else: 1 character, 4 bytes of UTF-8, no trailing newline.

## Why 🎯

- It stands for the defining trait of an agent: it locks onto a goal, aims, and hits it. It is goal-directed, precise, and finishes what it starts.
- Duels, position-swapped and judged on the bounty criteria by z-ai/glm-5.3-flash:
  - 🎯 beat 🔥 fire 2-0 (margins 3 and 3)
  - 🎯 beat 🧭 compass 2-0 (margins 2 and 2)
  - 🎯 beat 🦉 owl 2-0 (margins 3 and 2)
- Field study of 867 entries: the field is flooded with owl, compass, octopus, mechanical arm, puzzle piece, bee/ant and loop. No leader covers goal-directed precision, so the target is an open angle.
- The format rule asks for 1 to 16 characters of UTF-8 text that is not only whitespace. A single emoji meets it.

## How main.ts works

1. `main()` reads the output directory from `MAKEFUN_OUTPUT_DIR`, falling back to `/output`, and calls `writeEntry(outputDir)`.
2. `writeEntry` creates that directory recursively if it is missing and writes the emoji constant to `entry.txt` as UTF-8, with no newline.
3. `verifyEntry` then reads the file back and throws a clear error unless its bytes are exactly the emoji (4 bytes, `f09f8eaf`).
4. On success it exits 0.

Run locally with `MAKEFUN_OUTPUT_DIR=out node main.ts`.
