/**
 * Task:
 * Return the greatest difference between two numbers in an array
 * 	
 * @param {[Number]} arr - given array you should find max difference in
 * @return {Number} index of maximum or array of indices
 */

function maxInArr(arr) {
	if (!arr.length) return 0;
	var lemax = arr[0];
	var lemin = arr[0];
	for(var i=1;i<arr.length;i++){
		lemax = Math.max(lemax, arr[i]);
		lemin = Math.min(lemin, arr[i]);
	}
	return Math.abs(lemax-lemin);
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
