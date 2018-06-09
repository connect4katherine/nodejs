// ============================================================
// Write Stream


const { Writable } = require('stream');

const outStream = new Writable({
	write(chunk, encoding, callback){
		console.log(chunk.toString());
		callback();
	}
});

// read from the stream we created (echo back)
// equivalent to process.stdin.pipe(process.stdout);
process.stdin.pipe(outStream);


// ============================================================
// Readable Stream

const { Readable } = require('stream');

const inStream = new Readable({
	read(){
		let text = 'Stuff sent through the stream...'.split('');
		while(text.length > 0){
			this.push(text.shift());
		}
		// null to indicate complete
		this.push(null);
	}
});

inStream.pipe(process.stdout);


process.on('exit', ()=>{
	console.log('YOU DID IT!');
});