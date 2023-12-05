//ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }


//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("Vivek", "chai@gmail.com", "123")

// console.log(chai.changeUsername())
// console.log(chai.encryptPassword())


//behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newName = new User ("Anand", "anand@gmail.com", "252")

console.log(newName.encryptPassword())
console.log(newName.changeUsername())