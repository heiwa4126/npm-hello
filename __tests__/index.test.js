const test = require("tape");
const { hello, Hello } = require("../src/index");

test("hello function returns the correct greeting", (t) => {
	const result = hello();
	t.equal(result, "Hello, NPM package!", "Should return the correct greeting");
	t.end();
});

test("say function returns the correct greeting", (t) => {
	const obj = new Hello("World");
	const result = obj.say();
	t.equal(result, "hello World", "Should return the correct greeting");
	t.end();
});
