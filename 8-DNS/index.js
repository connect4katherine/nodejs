const dns = require('dns'); // name -- addresses

// ============================================================
// Use DNS for Funzies

(async function(){
	// const url = 'nodejs.org';
	// const url = 'angularjs.org';
	const url = 'google.com';
	
	// ============================================================
	// Lookup Address
	let P1 = new Promise((res, rej) =>{
		dns.lookup(url, (err, address) => {
			res(address);
			rej(err);
		});
		
	});

	let dns_1 = await P1; 
	console.log(dns_1);

	// ============================================================
	// resolve4
	// resolve a IPv4 addresses for the hostname
	let P2 = new Promise((res, rej) =>{
		dns.resolve4(url, (err, address) => {
			res(address);
			rej(err);
		});
		
	});

	let dns_2 = await P2; 
	console.log(dns_2);

	// ============================================================
	// resolveMx
	// resolve mail exchange records (MX records) for the hostname
	let P3 = new Promise((res, rej) =>{
		dns.resolveMx(url, (err, address) => {
			res(address);
			rej(err);
		});
		
	});

	let dns_3 = await P3; 
	console.log(dns_3);

	// ============================================================
	// reverse
	// Performs a reverse DNS query that resolves an IPv4 or IPv6 address to an array of hostnames
	let P4 = new Promise((res, rej) =>{
		dns.reverse(dns_1, (err, hostname) => {
			res(hostname);
			rej(err);
		});
		
	});

	let hstname = await P4; 
	console.log(hstname);

})();