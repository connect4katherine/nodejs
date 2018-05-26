const string = 'oreo';
const buffer = Buffer.from('oreo');

console.log(string, string.length);
console.log(buffer, buffer.length);


// ============================================================
// Run file with node and then type '0xE2' or '0xAC'

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', ()=>{
	const chunk = process.stdin.read();

	if(chunk != null){
		const buf = Buffer.from([chunk]);
		console.log('Whith toString', buf.toString());
		console.log('Whith StringDecoder', decoder.write(buf));
	}
})