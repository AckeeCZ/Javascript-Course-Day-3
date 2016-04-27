/**
 * Task:
 * In this task we will examine some very curious numbers that goes by misterious name EMIRPs (prime spelled backwards).
 * These are most peculiar kind of primes numbers: they result in another prime, when are its decimal digits reversed.
 * Emirps exclude palindromic primes.
 * Your task is find all emirps from interval <10,num> where num is given number not exceeding 1000
 * 	
 * @param {Number} num - end of interval within you should look for primes
 * @return {[Number]} Array of primes from given interval
 */


function getEmirps(num) {
	function reverseNum(num) {
		var ret = 0;
		while(num > 0) {
			ret *= 10;
			ret += num % 10;
			num /= 10;
			num = Math.floor(num);
		}
		return ret;
	}
	var limit = Math.pow(10,Math.floor(Math.log(Math.max(num,reverseNum(num)))/Math.log(10)))*90;
	var era = new Array(Math.floor(Math.sqrt(limit)));
	for(var i = 2; i<=Math.sqrt(limit); i++) {
		if (!era[i])
			for(var j=i*i; j<=limit; j+=i)
				era[j]=true;
	}
	var ret = [];
	for(var i=10;i<=num;i++) {
		var reversed = reverseNum(i);
		if(i != reversed && !era[i] && !era[reversed] && era.indexOf(i) == -1) {
			ret.push(i);
		}
	}
	return ret;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: getEmirps,
	tests: [
		{ in: [21], out:  [13, 17]  },
		{ in: [1000], out:  [13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389, 701, 709, 733, 739, 743, 751, 761, 769, 907, 937, 941, 953, 967, 971, 983, 991]  },
	]
});
