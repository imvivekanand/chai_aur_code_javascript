const user = {
    username: "Vivek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){ 
        // console.log("Getting user details from the database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);

// console.log(user.getUserDetails());

function User(username, loginCount, loggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = loggedIn;

    return this; //no need to write return this as it is done implicitely.
}

const userOne  = new User("Vivek Anand", 12, true);

const usertwo = new User("Saloni Priya", 18, false);

console.log(userOne);
console.log(usertwo.constructor);
