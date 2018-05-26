// ============================================================
// Changing default Require Behavior

/*
const fs1 = require('fs');
console.log(fs1);

require = function justAnObject() {
	return {hello: 'world'};
}
console.log('\n\n\n');

const fs2 = require('fs');
console.log(fs2);
*/


// ============================================================
// Different behavior desires
// want to be able to use 
// const overReq = require('./overrequire');
// and also want to use
// overReq(10, 'Hello');



const print = (stars, header) => {
  console.log('*'.repeat(stars));
  console.log(header);
  console.log('*'.repeat(stars));
};

if(require.main === module){
	// if this is a script 
	print(process.argv[2], process.argv[3])
} else {
	// if this is a required module
	module.exports = print;
}
