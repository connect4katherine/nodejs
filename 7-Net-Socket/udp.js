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
// send message buffer
// in small pieces

const client = dgram.createSocket('udp4');
const msgToSend = Buffer.from('Jargon ipsum dolor sit amet. Snackable content skyscraper experienced by few seen by many, nimble tactics tissue session case study storytelling disruptive tactics tipping point rallying cry mood board micro targeted experiential verticals!');
client.send(msgToSend, 0, 1, port, host, (err) =>{
	if(err) throw err;
});

client.send(msgToSend, 1, 2, port, host, (err) =>{
	if(err) throw err;
});

client.send(msgToSend, 3, 5, port, host, (err) =>{
	if(err) throw err;
});

// close last send
client.send(msgToSend, 8, msgToSend.length, port, host, (err) =>{
	if(err) throw err;
	client.close();
});



/*
// send smile message (as text)
// over and over
setInterval(function() {
	const client = dgram.createSocket('udp4');
	client.send('SMILE!', port, host, (err) =>{
		if(err) throw err;

		console.log('Client callback\n');
		client.close();
	});
},1000);
*/