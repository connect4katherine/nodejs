// console.log(arguments);

// ============================================================
// Node will favor the 'find-me' module over '/find-me/index'

console.log(module);

const mod = require('find-me');
console.log('module exports', mod);

setTimeout(()=>{console.log('delayed exports', require('find-me'))},2500);