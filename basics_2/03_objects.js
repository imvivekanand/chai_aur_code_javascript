//Singleton - Made through constructor.

//Object Literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Vivek Anand",
    age: 27,
    [mySym]: "myKey1", //Without [] in key, we cannot use symbol data type
    "last location": "Sitamarhi",
    email: "vivekanand@onmail.com",
    isLoggedIN: "false",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name); //Note: If we have space in key. We cannot use the dot notation. So always use square notation [].
// console.log(jsUser["last location"]);
// console.log(jsUser);
// console.log(jsUser.mySym);

//how to overide the values of object.
jsUser.email= "vivek"

// Object.freeze(jsUser) //We cannot make any changes after freezing the object.

jsUser.greeting = function(){
    console.log("Hello User");
}
jsUser.greeting2 = function(){
    console.log(`Hello! ${this.name}`);
}

jsUser.greeting()
jsUser.greeting2()