/**
 * Task:
 * Sometimes it is useful to do frequency analysis of words. It is the same as for previous task on letters.
 * 
 * Your task here however will be only return most common word alongside with its number of occurance
 * Return them in array of length 2
 * If there are more solution, return the lexicographically smallest
 * 
 * Example: for string "Hallo, hallo. This is it." return [Hallo, 2]
 * 	
 * @param {String} text for freq. analysis
 * @return {[String, Number]} Array of length 2 of pair: most common word, number of its occurance
 */

function freqAnalysisWords(text) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: freqAnalysisWords,
	tests: [
		{ in: ["Hallo, hallo. This is it."], out:  ["hallo", 2] },
		{ in: ["C+a+b?c?c'D-d%b(-)c(-)a/d_d+c"], out:  ["c", 4] },
		{ in: ["Frequency analysis is based on the fact that, in any given stretch of written language, certain letters and combinations of letters occur with varying frequencies. Moreover, there is a characteristic distribution of letters that is roughly the same for almost all samples of that language. For instance, given a section of English language, E, T, A and O are the most common, while Z, Q and X are rare. Likewise, TH, ER, ON, and AN are the most common pairs of letters (termed bigrams or digraphs), and SS, EE, TT, and FF are the most common repeats.[1] The nonsense phrase \"ETAOIN SHRDLU\" represents the 12 most frequent letters in typical English language text."], out:  ["the", 7] },]
});
