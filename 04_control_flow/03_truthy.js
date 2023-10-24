//Check for empty array.

let arr = [];

if(arr.length == 0){
    console.log("Array is empty.");
}else{
    console.log("Not Empty");
}

//Falsy values:
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values:
//"0", 'false', " ", [], {}, function(){}

//Check for empty object.

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("");
}

//Nullish Coaleshing Operator (??): null undefined

let val1;

//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// console.log(val1);


//Ternary Operator

// condition ? true:false;

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");