const EventEmitter = require('events');
const util = require('util');

// ============================================================
// Event Emitter Using Class Syntax


class LogDis extends EventEmitter {
	execute(taskFn){
		console.log('Before...');
		this.emit('begin');
		
		taskFn();

		this.emit('end');
		console.log('...after');
	}
}

// ============================================================
// Using the Emitter

/*
const logdis = new LogDis();

logdis.on('begin', ()=>console.log('About to...'));
logdis.on('end', ()=>console.log('...done now'));

logdis.execute(()=> console.log('****doing the thing*****'));
*/


// ============================================================
// Event Emitter Using Node's Utils

function LogDat() {
	EventEmitter.call(this);
}

util.inherits(LogDat, EventEmitter);
LogDat.prototype.execute = function(taskFn){
	console.log('Before...');
	this.emit('begin');

	taskFn();

	this.emit('end');
	console.log('...after');
}

// ============================================================
// Using the Emitter

/*
const logdat = new LogDat();

logdat.on('begin', ()=>console.log('About to...'));
logdat.on('end', ()=>console.log('...done now'));

logdat.execute(()=> console.log('****doing the thing*****'));

*/

// ============================================================
// Error Handling

process.once('unhandledRejection', (err) => {
	console.log('********************************* \ninside our unhandledRejection event');
  console.log(err);
  // do some cleanup

  process.exit(1); 
  // exit anyway
});

process.on('unhandledRejection', (err) => {
  console.log('not going to run because process exited before this one');
});

Promise.reject(new Error('AHHHHHHHHHHHHHH'));