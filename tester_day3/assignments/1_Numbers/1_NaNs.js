/**
 * Task:
 * Count how many "not a number" numbers are there in an array.
 * 
 * Bonus task:
 * Array may contain something else than numbers
 * 	
 * @param {[Number]} Array of numbers
 * @return {Number} Number of NaNs
 */

function howManyNans(nums) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: howManyNans,
	tests: [
		{ in: [[NaN, 1, NaN]], out:  2  },
		{ in: [[2,null]], out:  0  },
		{ in: [[0.0001, Infinity, NaN, 0/0]], out:  2  },
		{ in: [[0/0, Math.log(-1), Number("hallo")]], out:  3  },
		{ in: [[1,2],[3,4]], out:  0  },
		{ in: [[]], out:  0  },
	],
	bonusTests: [
		{ in: [[undefined, null, NaN]], out:  1  },
	]
});
