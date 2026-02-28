import fs from "fs/promises";
import AXIOS_CLIENT_INTERCEPTORS from "../code/frontend-codes/axios-interceptor";
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx axios-inter-scaffold <target-file> ##Example: npx axios-inter-scaffold src/utils/axiosInterceptors.ts`,
    );
  }
  const axiosInterceptorsCode = AXIOS_CLIENT_INTERCEPTORS;
  await fs.write(targetFile, axiosInterceptorsCode, "utf-8");
  console.log(
    `✅ Axios interceptor code successfully scaffolded into ${targetFile}`,
  );
};
main();
