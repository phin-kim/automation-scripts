#!/usr/bin/env node
import fs from "fs/promises";
import { fileURLToPath } from "url";
import LOGOUT from "./code/logout.js";
const __filename = fileURLToPath(import.meta.url);
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx logout-scaffold src/backend/controllers/logoutController.ts`,
    );
    console.error(
      "Generates the logout controller that deletes refreshtoken from the db",
    );
    process.exit(1);
  }
  const logOutCode = LOGOUT;
  try {
    await fs.writeFile(targetFile, logOutCode, "utf-8");
    console.log(
      `✅ Contiands the logut() with deletion of the JWT and cookies`,
    );
  } catch (error) {
    console.error(`❌ Error riting file:`, error.message);
    process.exit(1);
  }
};
main();
