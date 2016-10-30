var QuickSilver = function() {
	this.functionList = [];
	this.results = [];
};

QuickSilver.prototype.timer = function() {
	return new Date().getTime();
};

QuickSilver.prototype.profileFunction = function(func) {
	var result = {};
	result.start = this.timer();
	func.fn();
	result.end = this.timer();
	result.funcName = fn.name;
	this.results.push(result);
};

QuickSilver.prototype.getFunctionList = function() {
	return this.functionList;
};

QuickSilver.prototype.setFunctionList = function(list) {
	if(list !== typeof 'array') {
		return;
	}
	
	this.functionList = list;
};

QuickSilver.prototype.addFunction = function(name, fn) {
	var list = this.functionList,
		func = {
			id: list.length - 1,
			name: name,
			fn: fn
		};

	list.push(func);
};

QuickSilver.prototype.removeFunction = function(id) {
	this.functionList.slice(id, 1);
};

QuickSilver.prototype.setResults = function(results) {
	this.results = results;
};

QuickSilver.prototype.getResults = function() {
	return this.results;
};
