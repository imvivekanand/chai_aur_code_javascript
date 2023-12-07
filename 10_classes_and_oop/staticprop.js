class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Vivek = new User("Vivek");
// console.log(Vivek.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const car = new Teacher("car", "car.com");
car.logMe();
// car.createId();