process.stdout.write('\u001B[2J\u001B[0;0f');
const net = require('net');
const readline = require('readline');
const port = 3000;

// ============================================================
// Connect as Client

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


const client = net.createConnection({port}, connection =>{
	console.log('Client connected!')
	rl.on('line', input => {
		console.log(input);
		client.write(input);
	});
});

client.setEncoding('utf8');
client.on('data', chunk =>{
	console.log(chunk);
});

