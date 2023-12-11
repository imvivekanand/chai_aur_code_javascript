// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

//My Answer

// var createCounter = function (init) {
//     let currentCount = init;

//     let increment = () =>{
//         return currentCount = currentCount + 1;
//     }
//     let decrement = () =>{
//         return currentCount = currentCount - 1;
//     }
//     let reset = () =>{
//         return currentCount = init;
//     }

//     return {increment, decrement, reset}

// };

//Solution

var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => {currentValue = init; return init;}
    };
};



const counter = createCounter(5)
console.log(counter.increment());; // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
