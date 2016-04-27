/**
 * Task:
 * Implement function addArray(), which calculates sum of numbers passed in arraying input
 * Bonus: make it work with undefined, null, NaNs and (possibly ill formated) string input
 * 	
 * @param {[Number]} array of Numbers
 * @return {Number} sum of numbers in array
 */

function addArray(arr) {
	
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: addArray,
	tests: [
		{ in: [ [1,2,3,4,5] ], out: 15 },
		{ in: [ [39.5,2.5] ], out: 42 },
		{ in: [ [-5, -5] ], out: -10 }
	],
	bonusTests: [
		{ in: [[]], out: 0 },
		{ in: [[null, Infinity]], out: Infinity },
		{ in: [[undefined, 15]], out: 15 }
	]
});
