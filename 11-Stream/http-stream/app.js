// ============================================================
// Packages

const PORT = 3000;
const Path = require('path');
const FS = require('fs');
const EJS = require('ejs');
const Mongo = require('mongodb');

// ============================================================
// Globals 
const server = require('http').createServer();
let DB = {};

// ============================================================
// Routes

server.on('request', (req, res)=>{
	console.log(req.method, req.url);

	switch(req.url){
		// ============================================================
		// Home
		case '/':
		(async ()=>{
			const files = await DB.collection('files').find({}).toArray();

			const template = await EJS.renderFile('./views/index.ejs', {files});
			res.writeHead(200, {'content-type': 'text/html'});
			res.end(template);
		})();
		break;

		// ============================================================
		// Post File
		case '/submitEndpoint':
		(async ()=>{
			if(req.method === 'POST'){
				console.log('POSTED');	
				console.log((req.headers));

				const location = '/files/' + +new Date();
				// await DB.collection('files').insertOne({name: req.headers.name, location})

				req.on('data', chunk => {
					const writeStream = FS.createWriteStream('./' + location );
					writeStream.write(chunk);
				});
			}
			res.writeHead(301, {'Location': '/'});
			res.end();
		})();
		break;

		// ============================================================
		// Else Case 
		default:
		if(req.method === 'GET' && req.url.substr(0, 7) === '/files/'){
			// get file from fs
			// stream it back
			const readStream = FS.createReadStream('.' + req.url);
			res.pipe(readStream);
		}
		res.writeHead(404);
		res.end();
		break;
	}
});

// ============================================================
// Connect to DB and start server

(async ()=>{
	const mongodb_uri = 'mongodb://localhost:27017/my_db';
	try{

		const client = await Mongo.connect(mongodb_uri);
		DB = client.db('my_db');
	} catch(err){
		console.log(err);
	}

	server.listen(PORT);
})();