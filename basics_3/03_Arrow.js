const user = {
    username: "Vivek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage();

user.username = "Anand";
user.welcomeMessage();


const addTwo = (num1, num2) => ({username: "hitesh"}) //To return an object from a function we have to use parenthesis.

console.log(addTwo())