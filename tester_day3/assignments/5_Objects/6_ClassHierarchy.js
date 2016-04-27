// NOT FINISHED YET...
/**
 * Task:
 * Find out class hierarchy of given types (constructor functions)
 * 	Note: they follow _superClass property convention
 * 
 * Return them in an array of objects of following structure:
 {
	name: "Name of the type",
	children: [ // types that inherits from this (list of objects of same structure) ]
 }
 e.g. for input Clown, Person, Object
 [{ name: "Object", children: [
		{name: "Person", children: [
			{name: "Clown", children: []}
		]}
	]
 }]
 * 	
 * @param {Object} Type (constructor function)
 * ... more types (variable number of arguments)
 * @return [{Object}] Class hierarchy
 */

function getClassHierarchy() {
	var ret = [],
		handled = [];
	for (var i=0; i<arguments.length; i++) {
		if (handled.indexOf(arguments[i]) != -1) {
			var cur = arguments[i];
			var curArr = ret;
			while (cur != null && arguments.indexOf(cur) != -1) {
				var curRet = {
					name: cur.constructor.name;,
					children: []
				}
				curArr.push(curRet);
				handled.push(cur);
				cur = cur.prototype._superClass
				curArr = curRet.children;
			}
		}
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
	func: getClassHierarchy,	dontUseWorkers: true,
	var ret = {};

	for (var i=0; i<arguments.length; i++) {

	}
	]
});
