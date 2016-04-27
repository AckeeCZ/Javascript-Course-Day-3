/**
 * Task:
 * List the names of types of all of classes the given object inherits from (including its own type)
 * 
 * Types? They are not in JS, but:
 * we call that a constructor functions of objects in prototype chain
 * 
 * Return them in an string separated by character " > "
 * 	in order from bottom to top in an prototype chain
 * 
 * Hint: Function.name, Object.constructor, __proto__
 * 	Slides and snippets from yesterday might help
 * 	
 * @param {Object} Instance of some type
 * @return {[String]} Inheritance chain
 */

function nameAncestors(obj) {
	var ret = "";
	var cur = obj.__proto__;
	while (cur !== null) {
		ret += (ret ? " > " :"") + String(cur.constructor.name);
		cur = cur.__proto__;
	}
	return ret;
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
	func: nameAncestors,
	dontUseWorkers: true,
	tests: [
		{ in: [bibr], out: "Clown > Person > Object" },
		{ in: [[1,2,3]], out: "Array > Object" },
		{ in: [{a:1}], out: "Object" },
		{ in: [NaN], out: "Number > Object" },
		{ in: [true], out: "Boolean > Object" },
	]
});
