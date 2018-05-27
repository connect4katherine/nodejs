process.stdout.write('\u001B[2J\u001B[0;0f');
const server = require('net').createServer();
const port = 3000;
const counter = 0;
let sockets = {};

// ============================================================
// Listen for clients connecting

server.on('connection', socket => {
	socket.id = counter++;
	sockets[socket.id] = socket;

	socket.setEncoding('utf8');
	console.log('Client connected');
	socket.write('Hey - thanks for connecting!');

	socket.on('data', data =>{
		/*
		Object.entries(sockets)
			.forEach(([key, cs])=>{
				cs.write(`${socket.id} : ${data}`);
			});
		*/

		console.log(`buffer of data from ${socket.id}: ${data}`);
		socket.write('marco... pollo...' + data);
	});

	socket.on('end', socket =>{
		delete sockets[socket.id];
		console.log('bye client...');
	});
});

server.listen(port, ()=>{
	console.log(`Run using nc localhost ${port}\nListening on ${port}`)
});
