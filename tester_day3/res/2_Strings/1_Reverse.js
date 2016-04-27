/**
 * Task:
 * Reverse array of strings and each string inside them
 * 	
 * @param {[String]} Array of strings
 * @return {[String]} Array of reversed strings
 */

function reverseStrings(arr) {
	var ret = [];
	for(var i=0;i<arr.length;i++) {
		var strArr = [];
		for(var j=0;j<arr[i].length;j++){
			strArr.unshift(arr[i][j]);
		}
		ret.unshift(strArr.join(""));
	}
	return ret;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: reverseStrings,
	tests: [
		{ in: [["Hi", "how", "are", "you", "today", "?"]], out:  ["?", "yadot", "uoy", "era", "woh", "iH" ] },
		{ in: [["42"]], out:  ["24" ] },
	]
});
