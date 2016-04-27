/**
 * Task:
 * Return position of maximum (values that <= all other values) in given array.  You may assume that all elements in array have the same type.
 * If there are more then one, return all of them in array, if there is no such index, return null.
 * E.g. for arr = [1,2,3,4,5] return 4, for arr=[0,-1,0] return [0,2]
 * 	
 * @param {[any]} arr - given array you should find max values in
 * @return {Number or [Number]} index of maximum or array of indices
 */

function maxInArr(arr) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
var bigArrSize = 33554;
Course.registerTest({
	func: maxInArr,
	tests: [
		{ in: [[ 1,2,3,4,5 ]], out: 4 },
		{ in: [[ 0,-1, 0 ]], out: [0,2] },
		{ in: [[]], out: null },
		{ in: [[ "hi", "how" ]], out: 1 },
		{ in: [[ -Infinity, 0, Infinity ]], out: 2 },
		{ in: [[ Infinity, Infinity, Infinity ]], out: [0,1,2] },
		{ in: [[ "a", "b", "c", "aa" ]], out: 2 },
		{ in: [[ undefined, undefined, undefined ]], out: null },
		{ in: [[ -Infinity, -Infinity, 15 ]], out: 2 },
	]
});
