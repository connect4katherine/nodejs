// ============================================================
// Goal clean up files older than 7 days

const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'old');
const ms1Day = 24*60*60*1000;

// ============================================================
// Seed files
/*
fs.mkdirSync(dirname);

for(let i = 0; i < 10; i++){
	const filePath = path.join(dirname, `file${i}.txt`);
	const data = new Array(10).fill(i);
	const fileTime = (Date.now() - i*ms1Day) / 1000;

	fs.writeFileSync(filePath, data);

	// Change the file system timestamps
	fs.utimesSync(filePath, fileTime, fileTime);
}
*/

// ============================================================
// Clean

/*
fs.readdir(dirname, (err, files)=>{
	for(let file of files){
		const filePath = path.join(dirname, file);
		const stat = fs.statSync(filePath);

		// Modify time < last week
		if(stat.mtime < (Date.now() - ms1Day*7)){
			console.log(`Deleting ${file}`);
			fs.unlinkSync(filePath);
		}
	}
});
*/
