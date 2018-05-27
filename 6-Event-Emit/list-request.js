const EventEmitter = require('events');
const readline = require('readline');

// ============================================================
// Run using node list-request.js

// ============================================================
// Mocking Client Request

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const client = new EventEmitter();
const server = require('./list-response')(client);

// ============================================================
// Listeners

rl.on('line', (userInput) => {
	let [input, ...args] = userInput.split(' ');
	if(input === 'done'){
		process.stdout.write('\u001B[2J\u001B[0;0f');
		process.stdout.write('bye');
		return rl.close();
	}

	// event emitter syntax: (eventName, emittedValue)
	client.emit('input', input, args);
});

server.on('response', response =>{
	process.stdout.write('\u001B[2J\u001B[0;0f');
	process.stdout.write(response);
	process.stdout.write('\n \> ');
});