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
`, eval(cmd), `
*************************************
`);
});


/*
os.EOL
os.arch()
os.constants
os.cpus()
os.endianness()
os.freemem()
os.homedir()
os.hostname()
os.loadavg()
os.networkInterfaces()
os.platform()
os.release()
os.tmpdir()
os.totalmem()
os.type()
os.uptime()
os.userInfo()
*/
