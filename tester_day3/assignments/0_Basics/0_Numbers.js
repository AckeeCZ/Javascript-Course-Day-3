/**
 * Task:
 * Repair function numberToText(), which converts given SINGLE DIGIT number into english text, e.g.: 1 -> one, 9 -> nine.
 * For other inputs, than 0-9 return "unknown".
 * Bonus: make it work with strings
 * 	
 * Hint: try debug(numberToText)
 * 	
 * @param {Number} number to be converted
 * @return {String} string representation of given number
 */

function numberToText(num) {
	var ret = "unknown";
	switch (num) {
 		case 1 :
 			ret = "one";
 		case 2 :
 			ret = "two";
 		case 3 :
 			ret = "three";
 		case 4 :
 			ret = "four";
 		case 5 :
 			ret = "five";
 		case 6 :
 			ret = "six";
 		case 7 :
 			ret = "seven";
 		case 8 :
 			ret = "eight";
 		case 9 :
 			ret = "nine";
 		case 0 :
 			ret = "zero";
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
