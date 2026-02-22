# HOW TO CREATE SCRIPTS THAT CAN BE EXECUTED ANYWHERE

## CREATING THE SCRIPTS:

- First create the scripts themselves sample:
  **ensure theres the shebang [#!/usr/bin/env node]this tells the system to run it with node**

```ts
#!/usr/bin/env node
import fs from "fs/promises";
import { fileURLToPath } from "url";
import ASYNCHANDLER from "./code/asyncHandler.js";
const __filename = fileURLToPath(import.meta.url);
const main = async () => {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error(
      `USAGE: npx logout-scaffold src/backend/utils/asyncHandler.ts`,
    );
    console.error("Generates async handler to use instead of try catch block");
    process.exit(1);
  }
  const asyncHandelerCode = `/**
* The problem this solves (why it exists)
In Express:

If a sync route throws → Express catches it ✅
If an async route throws or rejects → Express does NOT catch it ❌
 */
import type{Request,Response,NextFunction,RequestHandler} from "express"
const asyncHandler=<T extends RequestHandler>(fn:T):RequestHandler=>(req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
}
export default asyncHandler`;
  try {
    await fs.writeFile(targetFile, asyncHandelerCode, "utf-8");
    console.log(`✅ general async handler`);
  } catch (error) {
    console.error(`❌ Error writing file:`, error.message);
    process.exit(1);
  }
};
main();
```

- Then in the go to the package.json and write
  into the bin the folders:

```json
{
  "name": "scripts",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "logger-scaffold": "./logger-scaffold.js",
    "logout-scaffold": "./logout-scaffold.js"
  }
}
```

- In the same directory run `npm link`
- To verify the success
  **i have run this on both the er with the scripts and the one where i want the scripts to be written to and the output is the same**

```bash
dir "$env:APPDATA\npm\*scaffold*.cmd"
```

- It should produce the [.cmd] files:

```bash
PS C:\Users\USER\Desktop\hands-on-NODE\testProject> dir "$env:APPDATA\npm\*scaffold*.cmd"


    Directory: C:\Users\USER\AppData\Roaming\npm


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          2/7/2026  10:59 AM            343 appError-scaffold.cmd
-a----          2/7/2026  10:59 AM            347 asyncHandeler-scaffold.cmd
-a----          2/7/2026  10:59 AM            339 auth-scaffold.cmd
-a----          2/7/2026  10:59 AM            343 authMidd-scaffold.cmd
-a----          2/7/2026  10:59 AM            347 errorHandler-scaffold.cmd
-a----          2/7/2026  10:59 AM            341 logger-scaffold.cmd
-a----          2/7/2026  10:59 AM            341 logout-scaffold.cmd


PS C:\Users\USER\Desktop\hands-on-NODE\testProject>
```

```bash
PS C:\Users\USER\Desktop\SIDE-PROJECTS\scripts> dir "$env:APPDATA\npm\*scaffold*.cmd"




Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          2/7/2026  10:59 AM            343 appError-scaffold.cmd
-a----          2/7/2026  10:59 AM            347 asyncHandeler-scaffold.cmd
-a----          2/7/2026  10:59 AM            339 auth-scaffold.cmd
-a----          2/7/2026  10:59 AM            343 authMidd-scaffold.cmd
-a----          2/7/2026  10:59 AM            347 errorHandler-scaffold.cmd
-a----          2/7/2026  10:59 AM            341 logger-scaffold.cmd
-a----          2/7/2026  10:59 AM            341 logout-scaffold.cmd


PS C:\Users\USER\Desktop\SIDE-PROJECTS\scripts> where.exe logout-scaffold
C:\Users\USER\Desktop\SIDE-PROJECTS\scripts\logout-scaffold.js
C:\Users\USER\AppData\Roaming\npm\logout-scaffold
C:\Users\USER\AppData\Roaming\npm\logout-scaffold.cmd
PS C:\Users\USER\Desktop\SIDE-PROJECTS\scripts>
```

- To actually run the script and scaffold into your project do :

```bash
npx logger-scaffold src/utils/logger.ts
```

**I have conducted to tests to see if [npm link scripts] affects the scaffolding and results show that whether linking or not it still works but the folder containing the scripts you should run [npm link]**
