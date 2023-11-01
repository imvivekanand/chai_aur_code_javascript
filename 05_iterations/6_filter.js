// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item;

    //forEach loop dosn't return anything.
    // The forEach loop is useful when you need to perform an operation on each element of an array, but you don't need to create a new array or modify the existing one. It's a more concise and readable way to achieve this compared to a traditional for loop. However, it should be noted that forEach doesn't support breaking out of the loop prematurely or returning a new array, so it's not suitable for all types of array manipulation. If you need to transform an array or filter its elements, other array methods like map and filter may be more appropriate.
// })

// console.log(values);


//filter method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=> (num > 4))
// const newNums1 = myNums.filter((num)=> { return num > 6})

// console.log(newNums);
// console.log(newNums1);

//Same thing with forEach

// const newNums = []

// myNums.forEach((nums) => {
//     if(nums > 4){
//         newNums.push(nums)
//     }
// })

// console.log(newNums);


const books = [
    {title: "Book1", genre: "Fiction", publish: 1998},
    {title: "Book2", genre: "History", publish: 2020},
    {title: "Book3", genre: "Non-Fiction", publish: 2005},
    {title: "Book4", genre: "Science", publish: 1921},
    {title: "Book5", genre: "Magic", publish: 1920},
    {title: "Book6", genre: "History", publish: 1857},
    {title: "Book7", genre: "Non-Fiction", publish: 1822},
    {title: "Book8", genre: "Fiction", publish: 2006},
    {title: "Book9", genre: "Science", publish: 1893},
    {title: "Book10", genre: "Comedy", publish: 1865},
]

// const userBooks = books.filter((bk) => {
//     return bk.genre === "History"})
const userBooks = books.filter((bk) => {
    return bk.publish >= 1998 && bk.genre === "History"})

console.log(userBooks);