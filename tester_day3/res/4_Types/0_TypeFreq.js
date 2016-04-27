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
	var freq = {}
	for(var i=0;i<arr.length;i++) {
		switch (typeof arr[i]) {
			case "number":
			case "string":
			case "boolean":
			case "function":
			case "undefined":
				freq[typeof arr[i]] = (freq[typeof arr[i]] ? freq[typeof arr[i]]:0 )+ 1;
				break;
			case "object":
				if(arr[i] === null) freq["null"] = (freq["null"] ? freq["null"]:0) + 1;
				else if(Array.isArray(arr[i])) freq["array"] = (freq["array"] ? freq["array"]:0) + 1;
				else freq["object"] = (freq["object"]?freq["object"]:0) + 1;
				break;
			default:
				console.error("Unrecognized type " + arr[i] + " that is type " + typeof arr[i]);
		}
	}
console.log(freq);
	return freq;
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
