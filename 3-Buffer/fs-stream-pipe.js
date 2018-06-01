const fs = require('fs');
var zlib = require('zlib');

// ============================================================
// Create streams
const readerStream = fs.createReadStream('input.txt');

/*
// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
*/

/*
// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
*/

const writerStream = fs.createWriteStream('output.txt');

// ============================================================
// Pipe between

readerStream.pipe(writerStream);

console.log("Program Ended");