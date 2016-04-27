/**
 * Task:
 * Return the greatest difference between two numbers in an array
 * 	
 * @param {[Number]} arr - given array you should find max difference in
 * @return {Number} index of maximum or array of indices
 */

function maxInArr(arr) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: maxInArr,
	tests: [
		{ in: [[ 1,2,3,4,5 ]], out: 4 },
		{ in: [[ 0,-1, 0 ]], out: 1 },
		{ in: [[]], out: 0 },
		{ in: [[ Infinity, Infinity, 2 ]], out: Infinity },
		{ in: [[ -Infinity, -Infinity, 1 ]], out: Infinity },
		{ in: [[ Infinity, -Infinity ]], out: Infinity },
		{ in: [[ Infinity, 15 ]], out: Infinity },
		{ in: [[ 0, 0, 0 ]], out: 0 },
	]
});
