#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import APPERROR from "./code/appError.js";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
const main = async () => {
  //get target filename from user
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error("USAGE: npx auth-scaffold src/backend/src/utils/AppError.ts");
    console.error(
      "Generates complete Apperror class with the possible errors to be encounters",
    );
    process.exit(1);
  }
  const appErrorCode = APPERROR;
  try {
    await fs.writeFile(targetFile, appErrorCode, "utf-8");
    console.log(`✅ App error generated in : ${path.resolve(targetFile)}`);
    console.log(`Contains complete App error class`);
  } catch (error) {
    console.error(`❌ Error writing file`, error.message);
    process.exit(1);
  }
};
main();
