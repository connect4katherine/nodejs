process.stdout.write('\u001B[2J\u001B[0;0f');
const server = require('net').createServer();
const port = 3000;
let counter = 0;
let sockets = {};

// ============================================================
// Listen for clients connecting

server.on('connection', socket => {
	socket.setEncoding('utf8');
	socket.id = counter++;


	// sockets[socket.id] = socket;
	console.log(`Client ${socket.id} connected`);
	socket.write(`What is your name client ${socket.id}?`);

	socket.on('data', (data) =>{
		console.log(data);
		// if new, add to object and assume input is name
		if(!sockets[socket.id]){
			socket.name = data.toString().trim();
			socket.write(`Marco... polo...\nWelcome ${socket.name}`);
			socket[socket.id] = socket;
		}

		// otherwise, data input is new and not username
		Object.entries(sockets)
		.forEach(([key, cs]) => {
			if(socket.id == key) return;

			cs.write(`${socket.name} ${timestamp()}: `);
			cs.write(data);
		});
	});

	socket.on('end', () =>{
		delete sockets[socket.id];
		console.log('bye client...');
	});
});

server.listen(port, ()=>{
	console.log(`Run using nc localhost ${port}\nListening on ${port}`)
});
