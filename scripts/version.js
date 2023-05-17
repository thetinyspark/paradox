const {version} = require('../package.json') ;
const fs = require("fs");

if( fs.existsSync("./lib/version.ts") )
    fs.unlinkSync("./lib/version.ts");

fs.writeFileSync( "./lib/version.ts", `export const version = "${version}";`);