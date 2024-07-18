const fs = require("node:fs");
const path = require("node:path");

const packagePath = path.join(__dirname, "..", "package.json");
const backupPath = path.join(__dirname, "..", "package.json.bak");

// オリジナルのpackage.jsonを読み込む
const packageJson = require(packagePath);
// console.log(packageJson);

// バックアップを作成
fs.writeFileSync(backupPath, JSON.stringify(packageJson, null, 2));

// 不要なスクリプトを削除
// postpublishスクリプトを保存
const postpublishScript = packageJson.scripts.postpublish;

// scriptsオブジェクトを削除
packageJson.scripts = undefined;

// postpublishスクリプトだけを再追加
packageJson.scripts = {
	postpublish: postpublishScript,
};

// 更新されたpackage.jsonを書き込む
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
