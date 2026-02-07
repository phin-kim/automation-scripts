#!/usr/bin/env node
import fs from "fs/promises";
import { fileURLToPath } from "url";
import AUTHENTICATEMIDDLEWARE from "./code/authenticate.js";
const __filename = fileURLToPath(import.meta.url);
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx logout-scaffold src/backend/utils/authenticate.ts`,
    );
    console.error("Full authenticate midddleware that checks the tokens ");
    process.exit(1);
  }
  const authMiddleware = AUTHENTICATEMIDDLEWARE;
  try {
    await fs.writeFile(targetFile, authMiddleware, "utf-8");
    console.log(`✅ authenticate middlware`);
  } catch (error) {
    console.error(`❌ Error writing file:`, error.message);
    process.exit(1);
  }
};
main();
