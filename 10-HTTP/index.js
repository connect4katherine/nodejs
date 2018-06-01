// ============================================================
// HTTP

/*
const server = require('http').createServer();

server.on('request', (req, res) =>{
	res.writeHead(200, {'content-type': 'text/plain'});

	setTimeout(()=>res.write('One...\n'), 2000);
	setTimeout(()=>res.write('Two...\n'), 8000);
	setTimeout(()=>res.write('Three...\n'), 12000);

	setTimeout(()=>res.end('Bye...'), 24000);
});

server.listen(3000);
*/

// ============================================================
// HTTPS 

// run from bash
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes

const fs = require('fs');
const httpsOptions = {
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
};

const server = require('https').createServer(httpsOptions);

server.on('request', (req, res) =>{
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('Bye...');
});

server.listen(3000);