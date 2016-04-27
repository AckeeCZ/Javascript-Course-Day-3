/**
 * Task:
 * Reverse integer in the input
 * E.g for 1234 return number 4321
 * 
 * Bonus task: reverse floating point numbers e.g. 123.45 will be 54.321 with decimal precision of 5 digits (in input and output)
 * (output is string with exactly 5 digits after floating point)
 * Negative numbers stays negative, e.g. -123.5 will become -5.321
 * Special numbers will stay as they are
 * 	
 * @param {Number} Number to be reversed
 * @return {Number} Reversed number
 */

function reverseNum(num) {
	if (isFinite(num)) {
		var str = (Math.floor(num)===num) ? String(num) : Number(num).toFixed(5);
		var str2 = [];
		for(var i=0;i<str.length;i++) {
			str2.unshift(str[i]);
			if (str[i]=='.') str2.splice(6);
		}
		return parseFloat(str2.join(""));
	} else {
		return num;
	}
}
// function reverseNumSimple(num) {
// 	var ret = 0;
// 	while(num > 0) {
// 		ret *= 10;
// 		ret += num % 10;
// 		num /= 10;
// 		num = Math.floor(num);
// 	}
// 	return ret;
// }

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: reverseNum,
	tests: [
		{ in: [1234], out:  4321  },
		{ in: [0], out:  0  },
		{ in: [12321], out:  12321  },
		{ in: [1000000], out:  1  },
	],
	bonusTests: [
		{ in: [NaN], out:  NaN },
		{ in: [Infinity], out:  Infinity  },
		{ in: [-Infinity], out:  -Infinity  },
		{ in: [1.2345], out:  5432.1, precision: true  },
		{ in: [1234567.1234567], out:  64321.76543, precision: true  },
	]
});
