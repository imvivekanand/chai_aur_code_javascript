
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vivek = function(){
    console.log(`Vivek is present in all objects`);
}

// heroPower.vivek()
myHeros.vivek()



//inheritace

const User = {
    name: "username",
    email: "user@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User; //__proto__ is outdated.

//modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "ChaiAurCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"vivek".trueLength();
"vivek-anand".trueLength();