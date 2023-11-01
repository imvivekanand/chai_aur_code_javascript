//for-in loop for object [Use with object]

// const myObject = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "ruby",
//     swift: "Swift by Apple"
// }

// for (const key in myObject) {
//     console.log(`${key} is the shortcut for ${myObject[key]}`); 
// }

//for-in loop for array

// const programming = ["js", "rb", "cpp", "java", "py"]

// for(const key in programming){
//     console.log(key);
//     console.log(programming[key]);
// }

//Using for-in loop we get the keys whereas for-of loop provides the value first.

// const map = new Map(); //Map is not iteratable.

// map.set('IN', 'India')
// map.set('USA', 'United States Of America')
// map.set('FR', 'France')
// map.set('EN', 'England')

// for (const key in map) {
//     console.log(key);
//     //Will not work.
// }