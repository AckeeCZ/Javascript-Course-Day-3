/**
 * Task:
 * Implement function add(), which adds two numbers
 * Bonus: make it work with undefined, null, NaNs and (possibly ill formated) string input
 * 	
 * @param {Number} a
 * @param {Number} b
 * @return a+b
 */

function add(a, b) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: add,
	tests: [
		{ in: [1,2], out: 3 },
		{ in: [39.5,2.5], out: 42 },
		{ in: [-5, -5], out: -10 }
	],
	bonusTests: [
		{ in: [], out: 0 },
		{ in: [null, Infinity], out: Infinity },
		{ in: [undefined, 15], out: 15 },
		{ in: ["9", "15"], out: 24 },
		{ in: ["-123.4", true], out: -122.4, precision: true },
		{ in: ["012.05", 3.05], out: 15.1, precision: true }
	]
});
