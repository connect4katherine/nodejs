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
				// console.log((req.headers));
				// console.log(Object.keys(req));

				const location = '/files/' + +new Date();
				let [contentType, boundary] = req.headers['content-type'].split(';');
				boundary = boundary.replace(' boundary=', '--');

				// save to db
				// DB.collection('files').insertOne({name: 'Posted', location});

				let body = [];
				req.on('data', (chunk)=>{
					// delmit chunks based on boundary?
					// console.log(chunk.toString());
					// console.log(chunk.toString().substr(0, boundary.length) === boundary);
					// console.log(chunk.toString().split(boundary));
					body.push(chunk);

					// write to file 
					// const writeStream = FS.createWriteStream('./' + location );
					// writeStream.write(chunk);
				});
				req.on('end', ()=>{
					body = Buffer.concat(body).toString();
					console.log(body);

					res.writeHead(200, {'Content-Type': 'application/json'});
					res.end(JSON.stringify({body}));
				});
			}
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
	try {

		const client = await Mongo.connect(mongodb_uri);
		DB = client.db('my_db');
	} catch(err){

		console.log(err);
	}

	server.listen(PORT);
})();