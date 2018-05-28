const fs = require("fs");

// ============================================================
// Create streams
const readerStream = fs.createReadStream('input.txt');

const writerStream = fs.createWriteStream('output.txt');

// ============================================================
// Pipe between

readerStream.pipe(writerStream);
console.log("Program Ended");