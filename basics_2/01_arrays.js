const myArr = [1, 2, 3, "Vivek"];

const heros = ["Shaktiman", "Doga", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //unshift bekar hai because it changes the index of all of the array elements.
// myArr.shift() 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); //-1 means does not exist.
// console.log(myArr.indexOf("Vivek"));


// const newArr = myArr.join(); //join returns string data type.
// console.log(newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log(myArr);
console.log(myn2);

//Splice affects the original array while slice doesnt.

