// Loading Screen Gold: A Tip in 200 Characters
// One line: a loading-screen tip for a stressed developer and their AI coding agent.
// Text: "Tip: while this loads, the agent is waiting too — for you to decide what you actually wanted."

import { writeFileSync, mkdirSync } from "node:fs";

const TIP =
  "Tip: while this loads, the agent is waiting too — for you to decide what you actually wanted.";

// Guard: gate is 1-200 characters; count code points (not UTF-16 units)
// so the em dash counts as one character, matching the gate.
const charCount = [...TIP].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`tip must be 1-200 characters, got ${charCount}`);
}
if (TIP.includes("\n")) {
  throw new Error("tip must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
console.log(`wrote ${charCount} characters to /output/entry.txt`);
