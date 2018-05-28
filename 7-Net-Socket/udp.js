const dgram = require('dgram');
const port = 3000;
const host = '127.0.0.1';

// ============================================================
// https://nodejs.org/api/dgram.html
// server-side

const server = dgram.createSocket('udp4');

server.on('listening', ()=>{
	console.log('UDP Server listening...\n');
});

server.on('message', (msg, removed_info)=>{
	console.log(`${removed_info.address}:${removed_info.port} - ${msg}`);
	console.log('...UDP Server message\n');
});

server.bind(port, host);

// ============================================================
// client-side

const client = dgram.createSocket('udp4');
client.send('SMILE!', port, host, (err) =>{
	if(err) throw err;

	console.log('Client callback\n');
	client.close();
});

/*
setInterval(function() {
	const client = dgram.createSocket('udp4');
	client.send('SMILE!', port, host, (err) =>{
		if(err) throw err;

		console.log('Client callback\n');
		client.close();
	});
},1000);
*/