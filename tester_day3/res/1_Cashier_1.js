// Cashier
var readyMoney = 0; // Number
var isWorking = 0; // Bool

/**
 * @brief adds single bank-note or coin
 * @param  {Number} size of item in crowns
 * @ return {Boolean} was sucessfully added
 */
function addCash(item) {
	var old = readyMoney;
	switch(item) {
		case 1:
			readyMoney += 1;
		case 2:
			readyMoney += 2;
		case 5:
			readyMoney += 5;
		case 10:
			readyMoney += 10;
		case 20:
			readyMoney += 20;
		case 50:
			readyMoney += 50;
		case 100:
			readyMoney += 100;
		case 200:
			readyMoney += 200;
		case 500:
			readyMoney += 500;
		case 1000:
			readyMoney += 1000;
		case 2000:
			readyMoney += 2000;
		case 5000:
			readyMoney += 5000;
		if (old != readyMoney)
			return true;
		else
			return false;
	}
}

function test_1_1() {
	console.assert(addCash(1));
	console.assert(addCash(5));
	console.assert(!addCash(7));
}