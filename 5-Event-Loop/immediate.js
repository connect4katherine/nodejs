// ============================================================
// Set Immediate Outside of I/O Process

Promise.resolve(()=>{

	setTimeout(() => {
		console.log('promised - timeout');
	}, 0);

	setImmediate(() => {
		console.log('promised - immediate');
	});

})
.then(fn => fn());

// ============================================================
// Set Immediate In I/O Process (type some stuff in CLI for this one)

process.stdin.resume();
process.stdin.on('readable', ()=>{
	setTimeout(() => {
		console.log('readable - timeout');
	}, 0);

	process.nextTick(console.log, 'readable - nextTick');

	setImmediate(() => {
		console.log('readable - immediate');
	});
});

