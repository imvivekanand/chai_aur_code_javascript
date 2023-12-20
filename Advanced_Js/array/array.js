const myArr = [];
// %DebugPrint(myArr)

//Types of arrays in JavaScript -> 1)Continous 2) Holey

//Both types of array can be of three types:
//SMI - Small Integer
//Packed elements
//Double (float, sting, function)


const arrTwo = [1, 2, 3, 4, 5] //PACKED_SMI_ELEMENTS - Most optimized array. It can only have integers. No decimal number allowed.

arrTwo.push(6.0) //PACKED_DOUBLE_ELEMENTS

arrTwo.push('7') //PACKED_ELEMENT

//Once PACKED_SMI_ELEMENTS array changed to other type, it cannot be changed back.

arrTwo[10] = 11; //HOLEY_ELEMENTS 

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); //-> Below
//bound check
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10)

//Holes are very expensive in Js.


//Optimiztion level in packed (continous) type: SMI > DOUBLE > PACKED
//Optimiztion level in holey type: H_SMI > H_DOUBLE > H_PACKED


const arrFour = new Array(3)
//Just 3 holes. HOLEY_SMI_ELEMENTS
addFour[0] = '1' //HOLY_ELEMENTS
addFour[1] = '1' //HOLY_ELEMENTS
addFour[2] = '1' //HOLY_ELEMENTS

//Better Approach

const arrFive = []

arrFive.push("1") //PACKED_ELEMENTS
arrFive.push("2") //PACKED_ELEMENTS
arrFive.push("3") //PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Infinity) //PACKED_DOUBLE
arrSix.push(NaN) //PACKED_DOUBLE

// for, for-of, forEach - Always use predefined methods.