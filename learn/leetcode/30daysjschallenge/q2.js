var createCounter = function (n) {
    // let a = n;
    // return function () {
    //     a++;
    //     console.log(a-1);
    // };
    return function () {
        return n++
    };

    

};


const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
// counter() // 10
// counter() // 11
// counter() // 12