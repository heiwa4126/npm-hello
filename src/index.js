/**
 * Returns a greeting message.
 * @returns {string} The greeting message.
 */
function hello() {
	return "Hello, NPM package!";
}

/**
 * Represents a greeting.
 */
class Hello {
	/**
	 * A class that represents a greeting.
	 * @param {string} name - The name of the object.
	 */
	constructor(name) {
		this.name = name;
	}

	/**
	 * Returns a greeting message.
	 * @returns {string} The greeting message.
	 */
	say() {
		return `hello ${this.name}`;
	}
}

module.exports = { hello, Hello };
