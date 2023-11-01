//for of [use with array, string etc]

// ["", "", ""]
// [{}, {}, {}]

//Array, Objects, Strings are iteratables. We can use loops on it.

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps - The Map object holds unique key-value pairs and remembers the original insertion order of the keys. Any value may be used as either a key or a value.

const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('FR', 'France')
map.set('EN', 'England')

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, "-", value);
// }

//In case of object

const myObj = {
    g1: "Contra",
    g2: "Mario",
    g3: "GTA"
}

for(const [key, value] of myObj){
    console.log(key, "-", value);
    //This method wil not work for objects.
}