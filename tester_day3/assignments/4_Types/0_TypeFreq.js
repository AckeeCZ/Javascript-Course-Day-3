/**
 * Task:
 * Another task on frequency analysis, this time on types.
 * Return object that contains number of occurances of given types (indexed by string names - see example), that are in the input array.
 * 
 * Example: for array [false, "hi", NaN, Infinity, null, "hallo", undefined, function(){}, {x:1}, true, {}, []]
 * return following object: {
 * 		"boolean": 2,
 * 		"number": 2,
 * 		"function": 1,
 * 		"object": 2,
 * 		"null": 1,
 * 		"array": 1,
 * 		"string": 2
 * }
 * 	
 * @param {[any]} array of elements to analyse
 * @return {{String: Number}} Object of pair {(name of type) : (number of occurances)}
 */

function typeFreqAnalysis(arr) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: typeFreqAnalysis,
	dontUseWorkers: true,
	tests: [
		{ in: [[false, "hi", NaN, Infinity, null, "hallo", undefined, function(){}, {x:1}, true, {}, []]], out:  {
 				"array": 1,
 				"boolean": 2,
 				"function": 1,
 				"null": 1,
 				"number": 2,
 				"object": 2,
 				"string": 2,
 				"undefined": 1,
 		} },
	]
});
