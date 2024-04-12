const test = require("tape");
const { hello } = require("../src/index");

test("hello function returns the correct greeting", (t) => {
  const result = hello();
  t.equal(result, "Hello, NPM package!", "Should return the correct greeting");
  t.end();
});
