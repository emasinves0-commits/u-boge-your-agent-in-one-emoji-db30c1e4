// Your Agent in One Emoji: the entry is a single bullseye, 🎯 (U+1F3AF DIRECT HIT).
// An agent locks onto its goal and hits it. This program writes that one emoji
// to entry.txt and nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "\u{1F3AF}"; // 🎯
const FILE_NAME = "entry.txt";
const DEFAULT_OUTPUT_DIR = "/output";

// Creates outputDir if needed and writes exactly the emoji to entry.txt
// (UTF-8, no trailing newline).
function writeEntry(outputDir: string): void {
  mkdirSync(outputDir, { recursive: true });
  const filePath = join(outputDir, FILE_NAME);
  writeFileSync(filePath, EMOJI, { encoding: "utf8" });
  verifyEntry(filePath);
}

// Reads the file back and throws unless it is exactly the single emoji.
function verifyEntry(filePath: string): void {
  const bytes = readFileSync(filePath);
  const expected = Buffer.from(EMOJI, "utf8");
  if (!bytes.equals(expected)) {
    throw new Error(
      `${FILE_NAME} check failed: expected ${expected.length} bytes (${expected.toString("hex")}), ` +
        `got ${bytes.length} bytes (${bytes.toString("hex")})`,
    );
  }
}

function main(): void {
  writeEntry(process.env.MAKEFUN_OUTPUT_DIR || DEFAULT_OUTPUT_DIR);
}

main();
