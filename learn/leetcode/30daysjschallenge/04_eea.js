var map = function(arr, fn, i) {
    let newArr = []
    for(i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr;
};

console.log(map([1,2,3], function plusone(n) { return n + 1; }))
console.log([1,2,3], function plusI(n, i) { return n + i; })
console.log([10,20,30], function constant() { return 42; })