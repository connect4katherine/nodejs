// ============================================================
// Older versions may need 
// node --harmony-async-await asyncawait.js

const fn1 = async () =>{
	let k = new Promise((res, rej)=>{
		setTimeout(()=>res('hello!'), 1000);
	});

	let j = await k;
	console.log(j);
}

fn1();