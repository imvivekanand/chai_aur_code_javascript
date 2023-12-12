class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}vivek`
    }

    set password(value){
        this._password = value
    }
} 

const vivek = new User("v@g.com", "123");
console.log(vivek.password);
console.log(vivek.email);