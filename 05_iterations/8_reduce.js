// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const initialValue = 0;

// const sumWithInitial = numbers.reduce(
//     (accumulator, currentValue)=> accumulator + currentValue, initialValue
// );

// console.log(sumWithInitial);

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);