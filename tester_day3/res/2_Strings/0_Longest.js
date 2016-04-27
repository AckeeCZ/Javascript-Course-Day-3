/**
 * Task:
 * Find & return longest string in array
 * If there are more of them, return the one with lowest index
 * 	
 * @param {[String]} arr - Array of strings
 * @return {String} Longest string of arr
 */

function longestString(arr) {
	var longest="", lemax = 0;
	for(var i=0;i<arr.length;i++){
		var cur = arr[i];
		if (cur.length > lemax) {
			lemax=cur.length;
			longest=cur;
		}
	}
	return longest;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: longestString,
	tests: [
		{ in: [["Hi","how","are","you","today","?"]], out:  "today"  },
		{ in: [["a"]], out:  "a"  },
		{ in: [["a","bb","ccc","dddd"]], out:  "dddd"  },
		{ in: [["a","b","c"]], out:  "a"  }
	]
});
