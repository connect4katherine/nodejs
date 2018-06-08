// ============================================================
// 

const PORT = 3000;
const Path = require('path');
const FS = require('fs');

// ============================================================
// 


// ============================================================
// Routes

const server = require('http').createServer();
server.on('request', (req, res)=>{
	console.log(req.method, req.url);
	// console.log(Object.keys(req.readable));

	switch(req.url){
		case '/submitEndpoint':
		if(req.method === 'POST'){
			console.log('POSTED');	
			console.log((req.headers));
		}
		res.writeHead(301, {'Location': '/'});
		res.end();
		break;
		case '/':
		default:
		if(req.method === 'GET'){
			res.writeHead(200, {'content-type': 'text/html'});
			res.end(FS.readFileSync(Path.join(__dirname, 'index.html')));
		}
		break;
	}
});

server.listen(PORT);