import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "On the first day, the kitchen chair sat an inch from the table where I left it; on the second, it was tucked in neatly, as if someone had finally sat down to wait.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, line + "\n", "utf8");
