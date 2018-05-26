// ============================================================
// Set Immediate

Promise.resolve(()=>{

	setTimeout(() => {
		console.log('promised - timeout');
	}, 0);

	setImmediate(() => {
		console.log('promised - immediate');
	});

})
.then(fn => fn());

process.stdin.resume();
process.stdin.on('readable', ()=>{
	setTimeout(() => {
		console.log('readable - timeout');
	}, 0);

	setImmediate(() => {
		console.log('readable - immediate');
	});
});