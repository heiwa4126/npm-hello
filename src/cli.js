#!/usr/bin/env node

const pkg = require("../package.json");
const { hello } = require(".");

console.log(`${hello()} (v${pkg.version})`);
