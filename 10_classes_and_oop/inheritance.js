class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`A new courses was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", 123);

chai.addCourses()

const masalaChai = new User("masalachai")

//masalaChai will not have the access to the addCourse method.
console.log(chai === masalaChai);

masalaChai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);