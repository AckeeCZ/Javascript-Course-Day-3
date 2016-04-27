/**
 * Task:
 * Frequency analysis is very usefull technic used for example in breaking of ciphers.
 * First and essential step of frequency analysis is to find distribution of characters, e.g. how many times does letter 'a' occur in text, how many times letter 'b' and so on.
 * 
 * Your task is to find counts of all letters of english alphabeth [a-z] CASE INSENSITIVE.
 * Return them in array where index 0 stands for 'a', index 1 stands for 'b' and so on.
 * 
 * Example: for string "abbc" return [1,2,1,0,....] (array has length 26) 
 * 	
 * @param {String} text for freq. analysis
 * @return {[Number]} Array of length 26 containing counts for each letter of english alphabeth
 */

function freqAnalysis(text) {
	var arr = [];
	text = text.toLowerCase();
	for(var i=0;i<26;i++) arr[i]=0;
	for(var i=0;i<text.length;i++) {
		arr[text.charCodeAt(i)-'a'.charCodeAt(0)]++;
	}
	return arr;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: freqAnalysis,
	tests: [
		{ in: ["abbc"], out:  [1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
		{ in: ["aaaaaaaaaaaaaaaaaaaazzz"], out:  [20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3] },
		{ in: ["ABC"], out:  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
		{ in: ["Frequency analysis is very usefull technic used for example in breaking of ciphers. First and essential step of frequency analysis is to find distribution of characters, e.g. how many times does letter 'a' occur in text, how many times letter 'b' and so on."], out:  [14,3,9,6,25,9,2,5,17,0,1,8,5,16,12,3,2,13,19,16,7,1,2,2,7,0] },
	]
});
