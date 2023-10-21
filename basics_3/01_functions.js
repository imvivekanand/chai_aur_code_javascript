function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");
}

// sayMyName //Reference
// sayMyName() //Execution

function loginUserMessage(username){ //We can also provide default parameters (username = "Vivek")
    if(!username){ //equivalent to (username === undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vivek"))

function calculateCartPrice(a , ...num1){
    return num1
}

// console.log(calculateCartPrice(2, 4 , 6));

const user = {
    name: "Vivek Anand",
    prices: 199
}

function userDetail(reqObject){
    return `Username is ${reqObject.name} and the price is ${reqObject.prices}.`
}

// console.log(userDetail(user));


const newArray = [1, 2, 3, 4]

function getArray(arr){
    return arr[1];
}

console.log(getArray(newArray))