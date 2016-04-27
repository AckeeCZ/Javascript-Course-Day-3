/**
 * Task:
 * Now the other way around: convert binary number represented by string of zero and ones into JS Number
 * The length of string wont exceed 52 characters
 * 	
 * @param {String} string of zero and ones - binary representation of number
 * @return {Number} number
 */

function binaryToNum(str) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: binaryToNum,
	tests: [
		{ in: ["1011"], out:  11  },
		{ in: ["0"], out:  0  },
		{ in: ["11110001001000000"], out:  123456  },
		{ in: ["1010111011110011000011001111000110001000101010100"], out:  384717834883412  },
		{ in: ["11111111111111111111111111111111"], out:  4294967295  },
		{ in: ["0"], out: 0  }
	]
});
