// Begin reading from stdin so the process does not exit
// keeps event loop busy
process.stdin.resume();
console.log(process.release.lts);
console.log('\n\n\n');

// ============================================================
// Process on 'exit'

// does one final synchronous operation
// before node process terminates
process.on('exit', (code)=>{
  console.log(`About to exit with code: ${code}`);

  // inside of listener, fuctions must be synchronous... so this will not run
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
});

setTimeout(() => {
    process.exit();
  }, 100);

// ============================================================
// Process on 'uncaughtException'

/*

// does cleanup before exiting 
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}\n`);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');

// Another intentional exception 
new Promise((resolve, reject) => reject(new Error('woops')))
	.then(console.log);

*/


// ============================================================
// Process on 'warning'

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});

// introduce memory leak error
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.setMaxListeners(1);
process.on('foo', () => {});
process.on('foo', () => {});

