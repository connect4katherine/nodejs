console.log(module);

const mod = require('find-me');
console.log('module exports', mod);

setTimeout(()=>{console.log('delayed exports', require('find-me'))},2500);