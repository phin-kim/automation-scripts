import fs from "fs/promises";
import PRETTIER_IGNORE from "./code/prettier-ignore.js";
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(`USAGE: npx prettier-ignore-scaffold .prettierignore`);
    console.error("The files that prettier ignore while formatting the code");
    process.exit(1);
  }
  const prettierIgnoreCode = PRETTIER_IGNORE;
  try {
    await fs.writeFile(targetFile, prettierIgnoreCode, "utf-8");
    console.log(`✅ Prettier ignore file scaffolded into ${targetFile}`);
  } catch (error) {
    console.error(`❌ Error writing into file${targetFile} `, error);
    process.exit(1);
  }
};
main();
