#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import AUTHCONTROLLER from "../code/backend-codes/authcontoller.js";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
const main = async () => {
  //get target filename from user
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error("USAGE: npx auth-scaffold authController.ts");
    console.error(
      "Generates complete Express auth contorller with register/login",
    );
    process.exit(1);
  }
  const authCode = AUTHCONTROLLER;
  try {
    await fs.writeFile(targetFile, authCode, "utf-8");
    console.log(`✅ Auth controller scaffolded: ${path.resolve(targetFile)}`);
    console.log(
      `Contains complete register ()+login() with JWT,cookies,vaidation`,
    );
  } catch (error) {
    console.error(`❌ Error writng file`, error.message);
    process.exit(1);
  }
};
main();
