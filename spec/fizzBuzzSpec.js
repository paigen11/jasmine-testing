describe('FizzBuzz Testing', function(){
	
	it("FizzBuzz to be defined.", function(){
		expect(fizzBuzz()).toBeDefined();
	});

	it("Should be a string 1. For 1.", function(){
		expect(fizzBuzz(1)).toBe(1);
	});

	it("Should be a string 2. For 2.", function(){
		expect(fizzBuzz(2)).toBe(2);
	});

	it("Should be a string Fizz. For 3.", function(){
		expect(fizzBuzz(3)).toBe("Fizz");
	});

	it("Should be a string Buzz. For 5.", function(){
		expect(fizzBuzz(5)).toBe("Buzz");
	});

	it("Should be a string Fizz. For 6.", function(){
		expect(fizzBuzz(6)).toBe("Fizz");
	});

	it("Should be a string Fizz. For 10.", function(){
		expect(fizzBuzz(10)).toBe("Buzz");
	});

	it("Should be a string FizzBuzz. For 15.", function(){
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});

	var random = Math.floor(Math.random() * 10);

	it("Should be a string" +random, function(){
		expect(fizzBuzz(random)).toEqual("FizzBuzz");
	});
});