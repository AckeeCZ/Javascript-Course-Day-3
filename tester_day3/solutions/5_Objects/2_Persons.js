/**
 * Task:
 * Return array of two persons from the previous task, that use the same implementation (same function object)
 * of methods getFullName and getAge
 * 
 		getFullName: {String}  - returns name and surname separated by space
 		getAge: {Number}  - calculates current age of the person in years, if wasn't born yer, return string "Wasn't born yet."
 * 	
 * 	Input:
 * 	Two persons of correct format without required methods
 * 	
 * Hint: You can use __proto__ (but don't use it on production)
 * 	
 * @param {Object} Person 1
 * @param {Object} Person 2
 * @return {[Object Object]} Array of two persons with sharing implementation of required methods
 */

function implPersons(person1, person2) {
	var proto = {};
	proto.getFullName = function() {
		return this.name + " " + this.surname;
	}
	proto.getAge = function() {
		var bd = this.birthdate,
			nd = new Date();
		var age = nd.getYear() - bd.getYear();
		if (!(bd.getMonth() > nd.getMonth() ||
					(bd.getMonth() == nd.getMonth()) && bd.getDay() >= nd.getDay())) {
			age--;
		}
		return (age < 0) ? "Wasn't born yet." : age;;
	}
	person1.__proto__ = proto;
	person2.__proto__ = proto;
	return [person1, person2];
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
var checkerCreator = function(expName, expAge) {
	return function(arr) {
  		console.log(arr);
	  	var ret = true, message="";
		for (var i=0;i<arr.length;i++){
			var obj = arr[i];
		  	if (!obj) {
		  		ret = false;
		  		message = "Function doesn't return the person object.";
		  	} else if (typeof obj.getFullName !== "function") {
		  		ret = false;
		  		console.log(obj);
		  		message = "The implementation of <em>getFullName</em> method is missing.";
		  	} else if (typeof obj.getFullName !== "function") {
		  		ret = false;
		  		message = "The implementation of <em>getFullName</em> method is missing.";
		  	} else if (typeof obj.getAge !== "function") {
		  		ret = false;
		  		message = "The implementation of <em>getAge</em> method is missing.";
		  	} else {
		  		var fn = obj.getFullName();
		  		if (fn !== expName) {
			  		ret = false;
			  		message = "The <em>getFullName</em> method returned incorrect value <code>"+toString(fn)+"</code>, expected <code>"+expName+"</code>";
		  		}
		  		var age = obj.getAge();
		  		if (age !== expAge) {
			  		ret = false;
			  		message = "The <em>getAge</em> method returned incorrect value <code>"+toString(age)+"</code>, expected <code>"+expAge+"</code>";
		  		}
		  	}
	  	}
	  	if (ret) {
	  		var obj1 = arr[0]; var obj2 = arr[1];
	  		if (obj1.getFullName !== obj2.getFullName) {
	  			ret = false;
		  		message = "The <em>getFullName</em> implementation is not shared between objects. Hint: prototype";
	  		}
	  		if (obj1.getAge !== obj2.getAge) {
	  			ret = false;
		  		message = "The <em>getAge</em> implementation is not shared between objects. Hint: prototype";
	  		}
	  	}
	  	return {ret: ret, mess: message};
	}
}

Course.registerTest({
	func: implPersons,
	dontUseWorkers: true,
	tests: [
		{ in: [{
			name: "Harry",
			surname: "Potter",
			birthdate:  new Date(1980, 9, 31)
		  }, {
			name: "Harry",
			surname: "Potter",
			birthdate:  new Date(1980, 9, 31)
		  }], check: checkerCreator("Harry Potter", 36)
		},
		{ in: [{
			name: "Baby",
			surname: "Boy",
			birthdate:  new Date(2016, 4, 26)
		  },{
			name: "Baby",
			surname: "Boy",
			birthdate:  new Date(2016, 4, 26)
		  }], check: checkerCreator("Baby Boy", 0)
		},	
		{ in: [{
			name: "Baby",
			surname: "Girl",
			birthdate:  new Date(2015, 4, 27)
		  },{
			name: "Baby",
			surname: "Girl",
			birthdate:  new Date(2015, 4, 27)
		  }], check: checkerCreator("Baby Girl", 1)
		},
	]
});
