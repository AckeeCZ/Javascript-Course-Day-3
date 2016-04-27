/**
 * Task:
 * Change character on a given position of string.
 * Throw exception {String}"Out of bounds" if position is out of bounds of given string
 * 	
 * @param {String} str - String you should change
 * @param {Number} pos - Position where the change should happen
 * @return {String} Character to be put on pos
 */

function changeChar(str,pos,char) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: changeChar,
	tests: [
		{ in: ["irrelevant", 6, "f"], out:  "irrelefant" },
		{ in: ["cape", 0, "n"], out:  "nape" },
		{ in: ["accent", 4, "p"], out:  "accept" },
		{ in: ["incommutable", 5, "p"], out:  "incomputable" },
		{ in: ["installation", 4, "i"], out:  "instillation" },
		{ in: ["hallo", 5, "Z"], out:  "", throws: "Out of bounds" },
	]
});
