#!/usr/bin/env node
import fs from "fs/promises";
import PRETTIER from "./code/prettier.js";
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(`USAGE: npx prettier-scaffold .prettierrc`);
    console.error("Prettier code that helps in styling your files");
    process.exit(1);
  }
  const prettierCode = PRETTIER;
  try {
    await fs.writeFile(targetFile, prettierCode, "utf-8");
    console.log(`✅ Prettier code successfully scaffolded into ${targetFile}`);
  } catch (error) {
    console.error(`❌ Error writing into file ${targetFile}`, error);
    process.exit(1);
  }
};
main();
