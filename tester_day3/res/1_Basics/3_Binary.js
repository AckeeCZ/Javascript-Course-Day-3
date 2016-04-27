/**
 * Task:
 * Convert positive integer to its binary code representation (in string) eg. (Number)11 -> (String)"1011"
 * If number is not positive integer, return 0
 * 	
 * @param {Number} number to be converted
 * @return {Number} string of zero and ones - binary representation of number
 */

function numToBinary(num) {
	num = Number(num);
	if (!Number.isInteger(num) || num < 0)
		return "0";
	var arr = [];
	while (num > 0) {
		arr.unshift(Number((num % 2 !== 0)));
		num = Math.floor(num/2);
	}
	if (arr.length == 0) return "0";
	return arr.join('');
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: numToBinary,
	tests: [
		{ in: [ 11 ], out: "1011" },
		{ in: [ 0 ], out: "0" },
		{ in: [ 123456 ], out: "11110001001000000" },
		{ in: [ 384717834883412 ], out: "1010111011110011000011001111000110001000101010100" },
		{ in: [ 4294967295 ], out: "11111111111111111111111111111111" },
		{ in: [ 1.5 ], out: "0" }
	]
});
