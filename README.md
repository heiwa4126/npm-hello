# npm-hello (@heiwa4126/hello)

npm パッケージの練習。最初は CommonJS のみで始める。

"Hello, NPM package!" を返すだけの関数。

## インストール

```sh
npm install @heiwa4126/hello
```

CLI として `heiwa4126-hello` がインストールされる。

## 使用例

```javascript
const { hello } = require("@heiwa4126/hello");

console.log(hello());
```

output:

```text
Hello, NPM package!
```

または

```sh
npx @heiwa4126/hello
```

## 開発メモ

ソースには run-scripts に

- `npm test` - [tape](https://www.npmjs.com/package/tape) によるテスト
- `npm lint` - [biome](https://www.npmjs.com/package/@biomejs/biome) による lint
- `npm fix` - biome による [安全な修正(Safe fixes)](https://biomejs.dev/ja/linter/#%E5%AE%89%E5%85%A8%E3%81%AA%E4%BF%AE%E6%AD%A3safe-fixes)
- `npm run lint:package` - [npm-package-json-lint](https://www.npmjs.com/package/npm-package-json-lint) による package.json の lint

が書いてあります。

また数字のみの git タグ(例:"v1.0.0")をつけて、
GitHub に push すると
GitHub Packages が生成される
GitHub Actions が書いてあります
([release-package.yml](.github/workflows/release-package.yml))。

GitHub Packages については
[GitHub Packages のクイックスタート - GitHub Docs](https://docs.github.com/ja/packages/quickstart)
を参照してください。
