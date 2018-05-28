const dgram = require('dgram');
const server = dgram.createSocket('udp4');

// ============================================================
// 

server.on('listening', ()=>{
	console.log('UDP listening...');
});

server.on('message', (msg, rinfo)=>{

});

// ============================================================
// 

const port = 3000;
const host = '127.0.0.1';
server.bind(port, host);