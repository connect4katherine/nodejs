// ============================================================
// Built-In Globals

/*
['__filename', '__dirname', 'arguments', 'exports', 'require']
.map(cmd =>{
console.log(`
*************************************
${cmd} 
*************************************
`, eval(cmd));
});
*/

// ============================================================
// OS Functions For
// Endianness
// OS type
// OS platform
// Total system memory
// Total free memory
// Constants

const os = require("os");

['os.endianness()', 'os.type()', 'os.platform()', 'os.totalmem()', 'os.freemem()', 'os.constants.signals', 'os.constants.errno']
.map(cmd =>{
console.log(`
*************************************
${cmd} : 
*************************************
`, eval(cmd));
});


