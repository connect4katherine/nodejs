// ============================================================
// 

/*
function* foo(index) {
	i = 0;
	while (i < index) {
		console.log(`Index ${i} out of ${index}`);

		let k = yield i++;

		console.log(`End of loop... ${k}\n`);
	}
}

const myFoo = foo(3);
myFoo.next('first');
myFoo.next('second');
myFoo.next('third');
myFoo.next('fourth');
myFoo.next('fifth');
myFoo.next('sixth');
*/

// ============================================================
// 


function* countAppleSales () {
	var saleList = [3, 7, 5];
	for (var i = 0; i < saleList.length; i++) {
		yield saleList[i];
	}
}

var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
