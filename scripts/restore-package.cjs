const fs = require("node:fs");
const path = require("node:path");

const packagePath = path.join(__dirname, "..", "package.json");
const backupPath = path.join(__dirname, "..", "package.json.bak");

// バックアップからpackage.jsonを復元
fs.copyFileSync(backupPath, packagePath);

// バックアップファイルを削除
fs.unlinkSync(backupPath);
