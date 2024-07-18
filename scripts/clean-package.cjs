const fs = require("node:fs");
const path = require("node:path");

const packagePath = path.join(__dirname, "..", "package.json");
const backupPath = path.join(__dirname, "..", "package.json.bak");

// オリジナルのpackage.jsonを読み込む
const packageJson = require(packagePath);

// バックアップを作成
fs.writeFileSync(backupPath, JSON.stringify(packageJson, null, 2));

// 不要なスクリプトを削除
delete packageJson.scripts.build;
delete packageJson.scripts.test;
// 他の不要なスクリプトも同様に削除

// 更新されたpackage.jsonを書き込む
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
