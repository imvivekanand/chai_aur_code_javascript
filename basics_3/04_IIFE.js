//Immediately Invoked Function Expression (IIFE)

//(function expression)() <- call the function with parenthesis.

// Why we use IIFE?
// To protect the function from global scope pollution. Like global variable or declaration.

(function chai(){
    console.log(`DB Connected`);
})(); //Semi column required for IIFE.

(()=>{
    console.log(`DB Connected 2`);
})();

((name)=>{
    console.log(`DB Connected 2 ${name}`);
})("Vivek Anand");