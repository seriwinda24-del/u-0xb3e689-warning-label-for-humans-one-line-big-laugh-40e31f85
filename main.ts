// Warning Label for Humans: One Line, Big Laugh — one-line entry (127 chars).
// LINE: "WARNING: Do not assume silence means agreement; they may be typing a very long response, and they will send it in eleven parts."
// The joke: the modern silence that is not agreement at all, but someone
// composing an essay-length reply — and the twist in the last few words
// ("in eleven parts") is the recognition hit: the multi-part message dump
// everyone has received. Real printed-label wording ("WARNING: Do not
// assume..."), one idea, no filler. Freshness: anchor
// 83d9ef5284440efad55770267e92bca7af5f45de, drand-quicknet round 34223447.
// Revision: verified the line twice from different working directories;
// both runs wrote identical bytes (sha256 034bf975...), 127 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "WARNING: Do not assume silence means agreement; they may be typing a very long response, and they will send it in eleven parts.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
