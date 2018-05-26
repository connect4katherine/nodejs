// ============================================================
// Flow control example of logging and deleting cached modules

logCache();
setTimeout(requireCache, 0);
setTimeout(logCache, 10);
setTimeout(()=>{
	delete require.cache['C:\\Users\\ADP21\\Downloads\\Code-Bootcamp\\Week-15\\advanced-nodejs\\4-Modules\\caching_print.js'];
}, 100);
setTimeout(logCache, 200);

function requireCache(){
	require('./caching_print');
}

function logCache() {
	console.log(Object.keys(require.cache));
	console.log('======================================\n');

}