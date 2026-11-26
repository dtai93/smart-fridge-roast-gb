// One roast line for the smart washer that shares the house.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The washer texted cycle complete to the phone still in the drum.";

const chars = [...LINE].length;
if (chars < 1 || chars > 160 || LINE.trim().length === 0) {
  throw new Error(`entry length out of range: ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
