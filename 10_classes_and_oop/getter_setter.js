class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
} 

const vivek = new User("v@g.com", "123");
console.log(vivek.password);