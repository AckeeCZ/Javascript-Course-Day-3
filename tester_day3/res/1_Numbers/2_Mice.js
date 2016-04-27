/**
 * Task:
 * We are having problem with english plurals, particulary when we want to write down, how many mice are there in the cellar.
 * Write function that solves this problem -> for given number of mice it returns string with correct plural form.
 * If there is floating point number in the input, round it to the nearest integer.
 * E.g. for 1 it returns "1 mouse", for 10 it returns  "10 mice"
 * 	
 * @param {Number} pozitive/zero number of mice in the cellar
 * @return {String} Answer on question: "How many mice are ther in the cellar"
 */

function howManyMice(num) {
	// return (Number(num).toFixed(0)>1) ? Number(num).toFixed(0) +" mice" : Number(num).toFixed(0) +" mouse";

	num = Math.round(num);
	if (Math.abs(num) == 1)
		return num + " mouse";
	else return num + " mice";
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: howManyMice,
	tests: [
		{ in: [1], out:  "1 mouse"  },
		{ in: [2], out:  "2 mice"  },
		{ in: [19767.5], out:  "19768 mice"  },
		{ in: [-19767.2], out:  "-19767 mice"  },
		{ in: [1/2], out:  "1 mouse"  },
		{ in: [1.499999999], out:  "1 mouse"  },
		{ in: ["1.00"], out:  "1 mouse"  },
		{ in: [-1], out:  "-1 mouse"  },
		{ in: ["4294967295"], out:  "4294967295 mice"  },
	]
});
