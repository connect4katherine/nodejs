// ============================================================
// 

function* lalalala(name) {
	console.log(name); // (A)

	var t1 = yield 'Hello' + name; // (B)
	console.log('generator: ', t1); 

	var t2 = yield 'Hey we are still going '; // (C)
	console.log('generator: ', t2); 

	yield 'Peace out'; // (D)
}

// Lets create our generator object
// Since our function acceps a name, we need
// to pass this name right away
var p = lalalala('Oreo');
// Notice that although it seems like you executed
// the function above, it does not print the console statement
// at line (A)


// Invoking next() for the first time causes 
// line (A) to be printed and then
// pauses at line (B).

// ******* test1 does nothing because the first next()
// ******* does not take parameters
console.log(p.next('test1?').value); 

// Line (C) gets printed then paused
console.log(p.next('test2?').value);

// Nothing more to execute
console.log(p.next('test3?').value); 
// Prints undefined because there isint any next value