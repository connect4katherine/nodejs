// ============================================================
// Routes

const fs = require('fs');
const data = {o: 1};

const server = require('http').createServer();
server.on('request', (req, res)=>{
	switch(req.url){
		case '/home':
		case '/about':
			res.writeHead(200, {'content-type': 'text/plain'});
			res.end('Hello world');
			break;
		case '/test':
			res.writeHead(200, {'content-type': 'text/html'});
			res.end(fs.readFileSync(`.${req.url}.html`));
			break;
		case '/data':
			res.writeHead(200, {'content-type': 'application/json'});
			res.end(JSON.stringify(data));
			break;
		case '/':
		default:
			res.writeHead(404, {'content-type': 'text/plain'});
			res.end();
			break;
	}
});

server.listen(3000);