/**
 * Task:
 * Palindroms are words, that equals to itself when written in reverse (CASE INSENSITIVE).
 * 
 * For given string return whether it is a palindrome.
 * 	
 * @param {String} str - possibly palindromic string
 * @return {Boolean} true if str is palindromic
 */


function isPalindrom(str) {
	var ret = true;
	str = str.toLowerCase();
	// console.log("tu",Math.floor(str.length/2),str);
	for(var i=0;i<Math.floor(str.length/2);i++) {
		console.log(str[i], str[str.length-i-1]);
		ret &= str[i] == str[str.length-i-1];
	}
	return Boolean(ret);
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: isPalindrom,
	tests: [
		{ in: ["aibohphobia"], out:  true  },
		{ in: ["deleveled"], out:  true  },
		{ in: ["pip-pip"], out:  true  },
		{ in: ["racecar"], out:  true  },
		{ in: ["a"], out:  true  },
		{ in: ["Malayalam"], out:  true  },
		{ in: ["qwertytrew"], out:  false  },
		{ in: ["aaabaaaa"], out:  false  },
		{ in: ["aaabaaaa"], out:  false  },
		{ in: ["aBbA"], out:  true  },
	]
});
