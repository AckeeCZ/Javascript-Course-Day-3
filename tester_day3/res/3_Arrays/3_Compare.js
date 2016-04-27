/**
 * Task:
 * Return whether 2 arrays on input are equal
 * 	
 * @param {[any]} arr1 - first array
 * @param {[any]} arr2 - second array
 * @return {Boolean} true if arr1 is equal to arr2
 */

function arrEquals(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	for(var i=0;i<arr1.length;i++) {
		if (!(arr1[i] === arr2[i] || (typeof arr1[i] == 'number' && typeof arr2[i] == 'number' && isNaN(arr1[i]) && isNaN(arr2[i])))) return false
	}
	return true;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: arrEquals,
	tests: [
		{ in: [[ 1,2,3,4,5 ], [ 1,2,3,4,5 ]], out: true },
		{ in: [[ 1,2,3,4,"5" ], [ 1,2,3,4,5 ]], out: false },
		{ in: [[ 1,2,3,4 ], [ 1,2,3,4,5 ]], out: false },
		{ in: [[ 1,2,3,4 ], [ true,2,3 ]], out: false },
		{ in: [[ Infinity ], [ Infinity ]], out: true },
		{ in: [[ NaN ], [ NaN ]], out: true },
		{ in: [[ undefined, undefined ], [ NaN, NaN ]], out: false },
		{ in: [[ undefined, undefined ], [ undefined, undefined ]], out: true },
	]
});
