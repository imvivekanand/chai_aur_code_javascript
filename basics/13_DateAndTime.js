let myDate = new Date()

console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());