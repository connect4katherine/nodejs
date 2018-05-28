// ============================================================
// prints hello world (no 1)

/*
function* greet() {
  yield 'hello';
  yield 'world';
  return 1;
}

// The for-of construct doesnt print the value thats returned
for (let message of greet()) {
  console.log(message);
}
*/

// ============================================================
// prints hello world 1

/*
function* greet1() {
  yield 'hello';
  yield 'world';
  return 1;
}

function* greet2() {
  // The result of invoking yield* is the return value.
  var returnValue = yield* greet1();
  console.log(returnValue);
}

for (let message of greet2()) {
  console.log(message);
}
*/