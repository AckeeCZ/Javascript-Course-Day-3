/**
 * Task:
 * Return array of Numbers iterating from 1 to given num (inclusive) 
 * E.g. for num = 5 return [1,2,3,4,5]
 * 
 * Bonus: if it is not possible to get to number by iteration throw "Invalid num"
 * Bonus2: if the number is bigger than maximum possible number of elements in array, throw "Num too big"
 * 	
 * @param {Number} num - number to be converted
 * @return {[Number]} arrays of numbers from 1 to num
 */

function fillArray(num) {
	num = parseInt(num);
	if (!typeof(num)=='numnber' || !isFinite(num)) throw "Invalid num";
	var len = Math.abs(num-1)+1;
	var cond, iter;
	if (num < 1) {
		cond=function(i){ return i>=num; }
		iter=function(i){ return i-1; }
	} else {
		cond=function(i){ return i<=num; }
		iter=function(i){ return i+1; }
	}
	if (len > (1<<30)*4-1) throw "Num too big";
	var ret = new Array(len);
	for(var pos=0, i=1;cond(i);pos++,i=iter(i)) {
		ret[pos]=i;
	}
	return ret;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
var bigArrSize = 33554;
Course.registerTest({
	func: fillArray,
	tests: [
		{ in: [ 5 ], out: [1,2,3,4,5] },
		{ in: [ 10 ], out: [1,2,3,4,5,6,7,8,9,10] },
		{ in: [ 0 ], out: [1,0] },
		{ in: [ 1 ], out: [1] },
		{ in: [ -3 ], out: [1,0,-1,-2,-3] },
	],
	bonusTests: [
		{ in: [ bigArrSize ], outDesc: "array of length "+bigArrSize+" containing [1,2,...,"+bigArrSize+"].",
			check: function(arr){
			var ret = arr.length == bigArrSize;
			if (!ret) return {ret: false, mess: "Incorrect length ("+arr.length+"), expected: "+bigArrSize};
			for(var i=0;i<20;i++){
				var ind = Math.floor(Math.random() * bigArrSize);
				if (arr[ind] != (ind+1)) return { ret:false, mess:"Invalid value on index "+ind+". Found "+arr[ind]+", expected "+(ind+1)+"."};
			}
			return {ret:true};
		} },
		{ in: [ (1<<30)*4 ], throws: "Num too big" },
		{ in: [ -1*((1<<30)*4) + 2 ], throws: "Num too big" },
		{ in: [ null ], throws: "Invalid num" },
		{ in: [ -Infinity ], throws: "Invalid num" },
		{ in: [ Infinity ], throws: "Invalid num" },
		{ in: [ "" ], throws: "Invalid num" },
		{ in: [ "1" ], out: [1] },
		{ in: [ "0" ], out: [1,0] },
	]
});
