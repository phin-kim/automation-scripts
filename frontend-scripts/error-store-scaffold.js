import fs from "fs/promises";
import ERROR_HANDLER from "../code/frontend-codes/error-store";
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx error-handler-scaffold <target-file> ##Example: npx error-handler-scaffold src/utils/errorHandler.ts`,
    );
  }
  const errorHandlerCode = ERROR_HANDLER;
  await fs.write(targetFile, errorHandlerCode, "utf-8");
  console.log(
    `✅ Error handler code successfully scaffolded into ${targetFile}`,
  );
};
main();
