// ============================================================
// Go through all files in double folder
// & re-write to have half contents
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'double');

const files = fs.readdirSync(dirname);

// ============================================================
// half the files 
/*
files.forEach(file =>{
	let filePath = path.join(dirname, file);
	fs.stat(filePath, (err, stat)=>{
		fs.truncate(filePath, stat.size / 2, (err)=>{
			if(err) throw err;
			console.log(`${file} halved by ${stat.size/2}`);
		});
	});
});
*/


// ============================================================
// re-do -- double the files
/*
files.forEach(file =>{
	let filePath = path.join(dirname, file);
	fs.readFile(filePath, (err, data)=>{
		fs.appendFile(filePath, data, (err)=>{
			if(err) throw err;
			console.log(`${file} doubled up`);
		});
	});
});
*/