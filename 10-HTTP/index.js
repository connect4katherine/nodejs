// ============================================================
// 

const server = require('http').createServer();

server.on('request', (req, res) =>{
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('Peace out');
});

server.listen(3000);