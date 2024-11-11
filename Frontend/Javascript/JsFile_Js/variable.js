const acId = 14434;
let acEmail = "neetujangid@gmail.com";
var acPassword = "123456";
acCity = "Jaipur";
let acState;

// acId = 2; // not allowed
console.log(acId);

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

acEmail = "jaangidneetu@gmail.com";
acPassword = "125689";
acCity = "Ajmer";

console.table([acId, acEmail, acPassword, acCity, acState]);