#!/usr/bin/env node
import fs from "fs/promises";
import { fileURLToPath } from "url";
import ERRORHANDLER from "../code/backend-codes/errorHandler.js";
const __filename = fileURLToPath(import.meta.url);
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx logout-scaffold src/backend/utils/errorHandler.ts `,
    );
    console.error("Full authenticate midddleware that checks the tokens ");
    process.exit(1);
  }
  const errorHadlerCode = ERRORHANDLER;
  try {
    await fs.writeFile(targetFile, errorHadlerCode, "utf-8");
    console.log(`✅ error handler middlware`);
  } catch (error) {
    console.error(`❌ Error writing file:`, error.message);
    process.exit(1);
  }
};
main();
