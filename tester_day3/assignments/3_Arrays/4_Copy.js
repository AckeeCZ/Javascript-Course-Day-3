/**
 * Task:
 * Return shallow copy of given array
 * (Shallow copy doesn't follows reference inside array)
 * 	
 * @param {[any]} arr - array to be copied
 * @return {[any]} copied array
 */

function arrCopy(arr) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
function checkEq(arr1, arr2) {
	if (!arr1 || !arr2) return false;
	if (arr1.length != arr2.length) return false;
	for(var i=0;i<arr1.length;i++) {
		if (!(arr1[i] === arr2[i] || (typeof arr1[i] == 'number' && typeof arr2[i] == 'number' && isNaN(arr1[i]) && isNaN(arr2[i])))) return false
	}
	return true;
}
function checkFunc(iinArr) {
	return function(arr) {
		if (arr == iinArr) return {ret: false, mess: "Value wasn't copied, you've returned the same object."};
		if (!checkEq(arr,iinArr)) return { ret: false, mess: "Copied value is different: " + arr + " expected: " + inArr };
		return {ret: true};
	};
}
var inArr = [ 1,2,3,4,5 ];
var inArr2 = [];
var inArr3 = [undefined,undefined,1];
Course.registerTest({
	func: arrCopy,
	dontUseWorkers: true,
	tests: [
		{ in: [inArr], check: checkFunc(inArr)  },
		{ in: [inArr2], check: checkFunc(inArr2)  },
		{ in: [inArr3], check: checkFunc(inArr3)  },
	]
});
