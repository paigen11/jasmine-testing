describe("Roman Number Testing", function(){
	
	it("Should be a string of M",function(){
		expect(romanize(1000)).toBe("M");
	});

	it("Should be a string of MIX", function(){
		expect(romanize(1009)).toBe("MIX");
	});

});