
//  Immediately Invoked Function Expressions ( IIFE )

function chai(){
    console.log(`DB CONNECTED`);
} 
chai();

// ()()         // iife function : remove the pollution of global variable 
(function chai(){
    // named iife
    console.log(`DB CONNECTED with iife`);
})();

( () => {
    console.log("arrow function with iife");
})();

( (name) => {
    console.log(`My name is ${name}`);
})('Neetu');