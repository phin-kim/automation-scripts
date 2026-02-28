#!/usr/bin/env node
import fs from "fs/promises";
import { fileURLToPath } from "url";
import ASYNCHANDLER from "../code/backend-codes/asyncHandler.js";
const __filename = fileURLToPath(import.meta.url);
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx logout-scaffold src/backend/utils/asynchandler.ts`,
    );
    console.error("Generates async handler to use instead of trycatch block");
    process.exit(1);
  }
  const asyncHandelerCode = ASYNCHANDLER;
  try {
    await fs.writeFile(targetFile, asyncHandelerCode, "utf-8");
    console.log(`✅ general async handler`);
  } catch (error) {
    console.error(`❌ Error writing file:`, error.message);
    process.exit(1);
  }
};
main();
