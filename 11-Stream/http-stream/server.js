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
	switch(req.url){
		case '/':
		default:
			res.writeHead(200, {'content-type': 'text/html'});
			res.end(FS.readFileSync(Path.join(__dirname, 'index.html')));
			break;
		case '/sendFiles':
			console.log(req);
			res.writeHead(200, {'content-type': 'application/json'});
			res.end(JSON.stringify({"response": "ok"}));
			break;
	}
});

server.listen(PORT);