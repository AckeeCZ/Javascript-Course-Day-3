/**
 * Task:
 * Return whether one class inherits from another
 * 	
 * @param {Object} Type1 (constructor function)
 * @param {Object} Type2 (constructor function)
 
 * @return {Boolean} true when one class inherits from another
 */

function doInherit(type1, type2) {
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
function Person(name) {
	this.name = name;
}
Person.prototype.getName = function() {
	return this.name;
}
function extnd(child, parent) {
 var F= function(){};
 F.prototype = parent.prototype;
 child.prototype = new F();
 child.prototype._superClass = parent
 child.prototype.constructor = child;
};
function Clown(name) {
 this._superClass(name);
 this.job = "clown";
}
extnd(Clown, Person);
var bibr = new Clown("Bibr");

Course.registerTest({
	func: doInherit,
	dontUseWorkers: true,
	tests: [
		{ in: [Clown, Person], out: true },
		{ in: [Person, Clown], out: true },
		{ in: [Object, Number], out: true },
		{ in: [Object, Clown], out: true },
	]
});
