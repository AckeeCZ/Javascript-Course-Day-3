/**
 * Task:
 * Achilles and the tortoise are having race. Tortoise has 100 meters head start.
 * Because Zeno wants to prove his paradox, he needs to know how long the race should be, so that Achilles won't win.
 * 
 * For given speed of Achilles and the tortoise return maximum length of race, so that Achilles won't win.
 * Round the number to two decimal points and write "m" at the end (as for meters).
 * If there is no such solution, return string "Bad luck".
 * 
 * Hint : s = v * t
 * 	
 * @param {Number} achillesSpeed - speed of Achilles in m/s
 * @param {Number} tortoiseSpeed - speed of tortoise m/s
 * @return {String} Maximum length of the race with exactly 2 decimal points in meters ending with "m" or string "Bad luck" if not possible.
 */


function race(achillesSpeed, tortoiseSpeed) {
	// s1 = s2
	// v1 * time  = 100 + v2 * time
	// (v1-v2)*time = 100
	// time = 100/(v1-v2)
	var ret = achillesSpeed*100/(achillesSpeed-tortoiseSpeed);
	if (!isFinite(ret) || ret <= 0) return "Bad luck";
	else return Number(ret).toFixed(2) + "m";
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: race,
	tests: [
		{ in: [2,1], out:  "200.00m"  },
		{ in: [1.5, 1], out:  "300.00m"  },
		{ in: [1.5, 1.499999999], out:  "149999987588.95m"  },
		{ in: [15,2], out:  "115.38m"  },
		{ in: [10000000000, 1], out:  "100.00m"  },
		{ in: [123, 45], out:  "157.69m"  },
		{ in: ["1.05", "2"], out:  "Bad luck"  },
		{ in: ["4294967295", 2], out:  "100.00m"  },
		{ in: ["4294967295", 0.00001], out:  "100.00m"  },
	]
});
