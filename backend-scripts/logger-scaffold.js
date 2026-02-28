#!/usr/bin/env node
import fs from "fs/promises";
import { fileURLToPath } from "url";
import CREATELOGGER from "../code/backend-codes/logger.js";
const __filename = fileURLToPath(import.meta.url);
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(`USAGE: npx logout-scaffold src/backend/utils/logger.ts`);
    console.error("Full logger middleware that logs all requests ");
    process.exit(1);
  }
  const loggerMiddleware = CREATELOGGER;
  try {
    await fs.writeFile(targetFile, loggerMiddleware, "utf-8");
    console.log(`✅ logger middleware created`);
  } catch (error) {
    console.error(`❌ Error writing file:`, error.message);
    process.exit(1);
  }
};
main();
