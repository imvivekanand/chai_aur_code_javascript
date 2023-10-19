const marvelHeros = ["Iron Man", "Spider Man", "Loki"];
const dcHeros = ["Batman", "Superman", "Blue Beetle"]

// marvelHeros.push(dcHeros) //push method affects the main array
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros) //concat doesnt affect the main array. It joins the elements of the two arrays.
console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros, "Aquaman", "Logan"] //Spread operator spreads the elements like a shattered glass. Spread operator is preferred over concat.
console.log(allNewHeros);

const faltuArray = [1,2,3, [4,5,6], [7,8,9, [10, 11, 12]]];
const usableArray = faltuArray.flat(Infinity) //Specify the depth. For ex: 1,2,3,..., Infinity
console.log(usableArray);


console.log(Array.isArray("Vivek")); //Checks that the given data is an array or not.
console.log(Array.from("Anand")); //Creates an array.
console.log(Array.from({name: "VIVEK"})); //Interesting Case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) //View the values of an array.