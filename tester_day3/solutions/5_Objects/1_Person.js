/**
 * Task:
 * There's an object of the following format passed as first argument:
  {
	name: "Harry",
	surname: "Potter",
	birthdate:  new Date(1980, 9, 31)
  }
 * Your task is to implement following method on the given object:
 		getFullName: {String}  - returns name and surname separated by space
 		getAge: {Number}  - calculates current age of the person in years, if wasn't born yer, return string "Wasn't born yet."
 * 	
 * @param {Object} Objects of the above mentioned format
 * @return {Object} Return the person object
 */

function implPerson(person) {
	person.getFullName = function() {
		return this.name + " " + this.surname;
	}
	person.getAge = function() {
		var bd = this.birthdate,
			nd = new Date();
		var age = nd.getYear() - bd.getYear();
		if (!(bd.getMonth() > nd.getMonth() ||
					(bd.getMonth() == nd.getMonth()) && bd.getDay() >= nd.getDay())) {
			age--;
		}
		return (age < 0) ? "Wasn't born yet." : age;
	}
	return person;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
var checkerCreator = function(expName, expAge) {
	return function(obj) {
	  	var ret = true, message="";
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
	  	return {ret: ret, mess: message};
	}
}

Course.registerTest({
	func: implPerson,
	dontUseWorkers: true,
	tests: [
		{ in: [{
			name: "Harry",
			surname: "Potter",
			birthdate:  new Date(1980, 9, 31)
		  }], check: checkerCreator("Harry Potter", 36)
		},
		{ in: [{
			name: "Baby",
			surname: "Boy",
			birthdate:  new Date(2016, 4, 26)
		  }], check: checkerCreator("Baby Boy", 0)
		},	
		{ in: [{
			name: "Baby",
			surname: "Girl",
			birthdate:  new Date(2015, 4, 27)
		  }], check: checkerCreator("Baby Girl", 1)
		},
		{ in: [{
			name: "Anakin",
			surname: "Skywalker",
			birthdate:  new Date(2017, 4, 27)
		  }], check: checkerCreator("Anakin Skywalker", "Wasn't born yet.")
		},
	]
});
