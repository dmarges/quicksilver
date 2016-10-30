# QuicksilverJS
## Javascript Lightweight Profiling Library

This is a lightweight 2D profiling function performance in JavaScript. 


#Usage
```
	//Include the JS file in your project, then call methods as needed.

	var quicksilver = new Quicksilver();
	quicksilver.profileFunction(window.onload);
	console.log(quicksilver.getResults());			// {start: theStartTime, end: theEndTime, funcName: window.onload}
  }
```
