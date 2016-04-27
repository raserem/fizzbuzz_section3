var fb = require('../fizzbuzz');

describe("A program that plays fizzbuzz", function() {

	it("can count from 1 to 6 and make appropriate substitutions", function() {
		expect(fb.count(1,6)).toBe("1 2 fizz 4 buzz fizz");
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz");
	});

	it("can take multiples of 3 and return 'fizz'", function(){
		expect(fb.fizz(3)).toBe('fizz');
		expect(fb.fizz(5)).toBe(5);
		expect(fb.fizz(17)).toBe(17);
	});

	it("can take multiples of 5 and return 'buzz'", function(){
		expect(fb.buzz(5)).toBe('buzz');
		expect(fb.buzz(6)).toBe(6);
		expect(fb.buzz(17)).toBe(17);
	});

	it("can take multiples of 15 and return 'fizzbuzz'", function(){
		expect(fb.fizzbuzz(15)).toBe('fizzbuzz');
		expect(fb.fizzbuzz(6)).toBe(6);
		expect(fb.fizzbuzz(17)).toBe(17);
	});


});