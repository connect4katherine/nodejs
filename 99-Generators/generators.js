// ============================================================
// 
function* myFirstGenerator() {
	console.log('Hi!');
}
myFirstGenerator(); // Nothing happens

// ============================================================
// 

/*
function* myNextGenerator() {
  console.log('Hi!'); // (A)
}

var genN = myNextGenerator(); // Save a reference to the generator object
genN.next(); // This executes line (A)

*/

// ============================================================
// 

/*
function* myFirstYielder() {
    yield; // This just pauses execution but does not emit anything
}

var genD = myFirstYielder();
console.log(genD.next()); 
console.log(genD.next()); 
*/

// ============================================================
// 

/*
function* myNextYielder() {
    console.log('1');
    yield; // Line (A)
    console.log('2');
}

var genY = myNextYielder();

genY.next(); // Prints 1 then pauses at line (A)
genY.next(); // resumes execution at line (A), then prints 2
*/

// ============================================================
// 

/*
function* myDoubleYielder() {
    var v = yield; // Pause execution, wait for the next() invocation.
    console.log(v);
    var w = yield; // Pause execution, wait for the next() invocation.
    console.log(w);
}

var genD = myDoubleYielder();

// This makes the generator pause at the yield
genD.next();

// This resumes execution and replaces the 'yield' placeholder
// with the argument being passed - 'Hola'
genD.next('Hola');
genD.next('Bonjour');
genD.next();

*/

// ============================================================
// 

/*
function* myEmittingYielder() {
  // This sends 'hello' to the caller and pauses execution
  // of this function until next() is invoked
  yield 'hello';


  // This sends 'world' to the caller and pauses execution
  // of this function until next() is invoked
  // Notice the two-way communication happening at this point
  var lastInput = yield 'world';

  console.log(lastInput);
}

var genE = myEmittingYielder();


// This prints out the value returned at the first yield and pauses
console.log(genE.next().value); // Prints 'hello'


// This resumes execution after the first yield until the next
// yield is encountered
console.log(genE.next().value); // Prints 'world'

// This resumes execution after the second yield but there is 
// nothing more to execute
genE.next('The end.');
// console.log(genE.next('The end.'));
*/

// ============================================================
// 

/*
function* myArrayEmitter() {
  yield* ['hello', 'hola', 'bonjour'];
  console.log('bye');
}

var genA = myArrayEmitter();

// Yield for each iterable in returned yield*
console.log(genA.next());
console.log(genA.next());
console.log(genA.next());

// Or use a loop!
for(let a of myArrayEmitter()){
	console.log('in loop...', a);
}
*/


