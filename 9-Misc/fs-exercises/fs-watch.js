// ============================================================
// Watch a directory for read/ write/ changed

const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'mess');

const files = fs.readdirSync(dirname);

// ============================================================
// add listener to all files

files.forEach(file =>{
	console.log(file);

	fs.watch(path.join(dirname, file), (event, filename)=>{
		console.log(`${file} ************************`);
		console.log(event);
	});
});