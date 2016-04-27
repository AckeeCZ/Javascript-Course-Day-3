/**
 * Task:
 * Your task here is to implement simple classes: Increment and Counter
 * Increment has 1 method: incr(); which after each call will raise internal value and return it (starting from initVal)
 * Counter inherits from Increment, adds a decr method which decrements the internal counter and returns the value
 * 	Both Counter and Increment constructor take 1 argument: initVal {Number} - the initial value of the counter
 * Incrementing and decrementing takes place before returning the value.
 * 
 * Create them on global scope
 * 
 * Bonus:
 * 	Try to write inheritance without copying extnd() function
 * 
 * (no params, no return)
 */

function createIncrDecr() {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
function inherits(type1, type2) { // 2 from one
	var cur = type2;
	while(cur) {
		if (cur == type1) return true;
		if (cur.prototype.__proto__)
			cur = cur.prototype.__proto__.constructor;
		else cur = null;
	}
	return false;
}
Course.registerTest({
	func: createIncrDecr,
	dontUseWorkers: true,
	tests: [
		{ in: [], check: function() {
			if (typeof Increment == "undefined") return {ret:false, mess:"No Increment class on global scope"}
			if (typeof Counter == "undefined") return {ret:false, mess:"No Counter class on global scope"}
			if (!inherits(Increment,Counter)) return {ret:false, mess:"The Counter doesn't inherit from Increment"}
			var i = new Increment(0), c = new Counter(0);
			if (1 !== i.incr() || 2!=i.incr() || 3!== i.incr()) return {ret:false, mess:"The Increment class doesn't increment propertly. Test it thoroughly. <code>var i = new Increment(0);console.assert(1 !== i.incr() || 2!=i.incr());</code>"}
			if (1 !== c.incr() || 2!=c.incr() || 3!== c.incr()) return {ret:false, mess:"The Counter class doesn't increment propertly. Test it thoroughly. <code>var c = new Counter();console.assert(1 !== i.incr() || 2!=i.incr());</code>"}
			var d = new Counter(0)
			if (1 !== d.incr() || 0!=d.decr() || 1!== d.incr() || 0!== d.decr() || -1!== d.decr()) return {ret:false, mess:"The Counter class doesn't cooperate incrementing and decrementing propertly. Test it thoroughly."}
			var test=100;
			while(--test) {
				var i = new Counter(15);
				var cnt = 15;
				var action = Math.floor(Math.random()*10)%2;
				var cur;
				if (action) { cnt++; cur=i.incr(); } else { cnt--; cur=i.decr(); }
				if (cur !== cnt) return {ret:false, mess:"Counter class failed on random test."}
			}
			return {ret: true};
		} },
	]
});
