// ============================================================
// Packages

const PORT = 3000;
const Path = require('path');
const FS = require('fs');
const EJS = require('ejs');
const DB = require('mongodb');

// ============================================================
// Routes

const server = require('http').createServer();
server.on('request', (req, res)=>{
	console.log(req.method, req.url);
	// console.log(Object.keys(req.readable));

	switch(req.url){
		case '/':
		(async ()=>{
			const files = [{name: 'Oreo', location: 'lego'}]
			const template = await EJS.renderFile('./views/index.ejs', {files});
			res.writeHead(200, {'content-type': 'text/html'});
			res.end(template);
		})();
		break;
		case '/submitEndpoint':
		if(req.method === 'POST'){
			console.log('POSTED');	
			console.log((req.headers));

			req.on('data', chunk => {
				let writeStream = FS.createWriteStream('./files/' + (+ new Date()) );
				writeStream.write(chunk);
			});
		}
		res.writeHead(301, {'Location': '/'});
		res.end();
		break;
		default:
		console.log(req.url);
		res.writeHead(404);
		res.end();
		break;
	}
});

// ============================================================
// Connect to DB and start server
(async ()=>{

server.listen(PORT);
})();