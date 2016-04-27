var count, fizz, buzz, fizzbuzz;
count = function(begin, end) {

		var output = buzz(fizz(begin));
		for (var i = begin; i < end; i+=1) {
			output = output + " " + fizz(buzz(fizzbuzz(i+1)));
		}

	// return, e.g. "1 2 3 4 5"
	return output;
};

fizz = function(num) {
	// if(0 === num % 3) {
	// 	return "fizz";
	// }
	// return num;
	return 0 === num % 3 ? "fizz" : num;

};

buzz = function(num) {
	// if(0 === num % 5) {
	// 	return "buzz";
	// }
	// return num;
	return 0 === num % 5 ? "buzz" : num;
};

fizzbuzz = function(num) {
	return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
		count: count,
		fizz: fizz,
		buzz: buzz,
		fizzbuzz: fizzbuzz
};

