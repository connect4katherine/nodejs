// ============================================================
// 

const PORT = 3000;
const Path = require('path');
const FS = require('fs');
const EJS = require('ejs');
const DB = require('mongodb');

// ============================================================
// 


// ============================================================
// Routes

const server = require('http').createServer();
server.on('request', (req, res)=>{
	console.log(req.method, req.url);
	// console.log(Object.keys(req.readable));

	switch(req.url){
		case '/':
		if(req.method === 'GET'){
			res.writeHead(200, {'content-type': 'text/html'});
			// res.end(FS.readFileSync(Path.join(__dirname, 'views', 'index.html')));
			// const template = EJS.compile('./views/index.html');
			// res.end(EJS.render(template));

			// const template = './views/index.html';
			EJS.renderFile('./views/index.html', {})
				.then(template => res.end(template));
			// res.end();
		}
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
	}
});

server.listen(PORT);