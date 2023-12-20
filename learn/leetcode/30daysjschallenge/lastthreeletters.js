function
myFunction(str)
{
    let lastTL = ""
    for(let i = str.length - 1; i >= str.length - 3; i--){
        lastTL = str[i] + lastTL
    }
return lastTL
}

console.log(myFunction("Vivek"));