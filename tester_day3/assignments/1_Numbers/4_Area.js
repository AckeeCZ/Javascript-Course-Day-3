/**
 * Task:
 * Calculate area of rectangle
 * Input consists of 4 points in 2d space A,B,C,D, which form an rectangle.
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

function area(Ax,Ay,Bx,By,Cx,Cy,Dx,Dy) {
	return null;
}

// function reverseNumSimple(num) {
// 	var ret = 0;
// 	while(num > 0) {
// 		ret *= 10;
// 		ret += num % 10;
// 		num /= 10;
// 		num = Math.floor(num);
// 	}
// 	return ret;
// }

// DON'T CHANGE THIS
// you can take a look at input and expected output of test
Course.registerTest({
	func: area,
	tests: [
		{ in: [0,0, 1,0, 0,1, 1,1], out: 1 },
		{ in: [0,0, 10,0, 0,10, 10,10], out: 100 },
		{ in: [200,0, 0,1, 200,1, 0,0], out: 200 },
		{ in: [0,0, 1,0, 0,1, 1,1], out: 1 },
		{ in: [-1,-1, 0,0, -1,0, 0,-1], out: 1 },
		{ in: [0.1,0.1, 0.1000000001,0.1000000001, 0.1,0.1000000001, 0.1000000001,0.1], out: 0, precision: true },
	],
	bonusTests: [
	]
});
