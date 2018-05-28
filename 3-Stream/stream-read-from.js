const fs = require("fs");
let data = '';

// ============================================================
// Create a writable stream
const readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');


// ============================================================
// Handle stream events --> data, end, and error

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");