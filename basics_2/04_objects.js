// const tinderUser = new Object(); //Singleton Object
const tinderUser = {}; //Non-Singleton Object

tinderUser.id = "abc123"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Vivek",
            lastName: "Anand"
        }
    }
}

// console.log(regularUser.fullName?.userFullName);
// console.log(regularUser.fullName?.userFullName); // ? checks if there is a full name then access it.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) //Not recommended
// const obj3 = Object.assign({}, obj1, obj2) //Recommended: {} -> Set empty object target. Rest of the objects as source.

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//We get the data from the database as shown below.

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    }
]

// const u1E = users[0].email
// console.log(u1E);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));




//Object Destructuring 
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

//API - Apna Kaam Kisi Or Ke Sar Par Daal Dena is like API.
