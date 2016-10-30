describe('QuickSilver Application', function() {
	it('should create a new instance of the library', function() {
		var qs = new QuickSilver();

		expect(qs).not.toBe(undefined);
	});

	describe('Starting the timer', function() {
		var qs = new QuickSilver();

		expect(qs.start()).toEqual(typeof object);
	});
});
