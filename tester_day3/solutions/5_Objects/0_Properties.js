/**
 * Task:
 * List all properties (not methods) of an object
 * Return them in an Array
 * 	
 * @param {Object} Object to list the properties of
 * @return {[String]} Array of properties of object
 */

function listProperties(obj) {
	var ret = [];
	for (var i in obj) {
		if (obj.hasOwnProperty(i) && typeof obj[i] != "function")
			ret.push(i);
	}
	return ret;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
var obj = { d: function() { return 1 + 41; }};
obj.__proto__.c=1;

Course.registerTest({
	func: listProperties,
	dontUseWorkers: true,
	tests: [
		{ in: [{
			name: "Harry",
			surname: "Potter",
			birthdate:  new Date(1980, 9, 31),
			getName: function() { return this.name; }
			}],
			check: function(arr) {
				arr.sort(); var eret = ['birthdate','name','surname'];
				var eq = arraysEquals(eret, arr);
				return {ret: eq, mess: !eq ? "Wrong array content: "+arr+", expected: " + eret : "" };
			}
		},
		{ in: [{ a: 1 }], out: ['a'] },
		{ in: [{ d: 2, b: function(){} }], out: ['d'] },
		{ in: [obj], out: [] },
	]
});
