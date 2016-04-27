/**
 * Task:
 * Repair function numberToText(), which converts given SINGLEDIGIT number into english text, e.g.: 1 -> one, 9 -> nine.
 * For other inputs, than 0-9 return "unknown".
 * Bonus: make it work with strings
 * 	
 * @param {Number} number to be converted
 * @return {String} string representation of given number
 */

function numberToText(num) {
	num = Number(num);
	switch (num) {
 		case 1 :
 			ret = "one";
 			break;
 		case 2 :
 			ret = "two";
 			break;
 		case 3 :
 			ret = "three";
 			break;
 		case 4 :
 			ret = "four";
 			break;
 		case 5 :
 			ret = "five";
 			break;
 		case 6 :
 			ret = "six";
 			break;
 		case 7 :
 			ret = "seven";
 			break;
 		case 8 :
 			ret = "eight";
 			break;
 		case 9 :
 			ret = "nine";
 			break;
 		case 0 :
 			ret = "zero";
 			break;
 		default:
 			return "unknown";
	}
	return ret;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: numberToText,
	tests: [
		{ in: [ 0 ], out: "zero" },
		{ in: [ 1 ], out: "one" },
		{ in: [ 2 ], out: "two" },
		{ in: [ 3 ], out: "three" },
		{ in: [ 4 ], out: "four" },
		{ in: [ 5 ], out: "five" },
		{ in: [ 6 ], out: "six" },
		{ in: [ 7 ], out: "seven" },
		{ in: [ 8 ], out: "eight" },
		{ in: [ 9 ], out: "nine" },
		{ in: [ 123 ], out: "unknown" }
	],
	bonusTests: [
		{ in: [ "1" ], out: "one" },
		{ in: [ "123" ], out: "unknown" },
		{ in: [ "1hallo" ], out: "unknown" }
	]
});
