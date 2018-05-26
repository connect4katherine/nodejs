// ============================================================
// Let's get some functions on the stack


const add = (a, b) => a + b;

const double = a => add(a, a);

const printDouble = a => {
	const output = double(a);

	console.log('printDouble ', output);
}
printDouble(10);


// ============================================================
// Process between queue, call stack and node


const slowAdd = (a, b, c) => setTimeout(()=>console.log('slowAdd', a + b), c || 5000);

slowAdd(3, 4, 0);

slowAdd(5, 6, 0);


// ============================================================
// Loops as blocking code...

const slowedByFor = (a, b) =>{
	for(let i = 0; i < 999999999; i++){}

	return 'slowedbyfor ' + (a + b);
}

console.time('a');
const a = slowedByFor(10, 11);
console.timeEnd('a');

console.time('b');
const b = slowedByFor(12, 13);
console.timeEnd('b');

console.time('c');
const c = slowedByFor(14, 15);
console.timeEnd('c');


console.log(a);
console.log(b);
console.log(c);

