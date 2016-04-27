/**
 * Task:
 * Calculate (euclidean) distance between two points
 * Input consists of 2 points in 2d space A and B
 * 	
 * @param {Number} Ax - x position of point A
 * @param {Number} Ay - y position of point A
 * @param {Number} Bx - x position of point B
 * @param {Number} By - y position of point B
 * @param {Number} Cx - x position of point C
 * @param {Number} Cy - y position of point C
 * @param {Number} Dx - x position of point D
 * @param {Number} Dy - y position of point D
 * @return {Number} Area of given rectangle
 */

function dist(Ax,Ay, Bx, By){
	return null;
}

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: dist,
	tests: [
		{ in: [0,0, 1,0 ], out: 1, precision: true  },
		{ in: [0,0, 10,0], out: 10, precision: true  },
		{ in: [200,0, 0,50], out: 206.15528128088303, precision: true  },
		{ in: [1233,324540, 324,42542 ], out: 281999.4650438188, precision: true  },
		{ in: [0,-2, 2,0], out: 2.8284271247461903, precision: true },
	],
	bonusTests: [
	]
});
