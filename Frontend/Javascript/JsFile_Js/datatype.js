"use strict";    // treat all js code as newer version

// alert(3 + 3);       // we are using nodejs, not browser

console.log(3 
    + 3);   // code readability should be high

console.log("Neetu Jangid");
let name = "Neetu jangid";
let age = 19;
let isLoggedIn = false;

// number => 2 to power 53
// bigint 
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not assign value
// symbol =>unique 
// object

console.log(typeof (name));
console.log(typeof null);       // object
console.log(typeof undefined);  // undefind

console.log("********* Data Conversion ********");
let score = true;
console.log(typeof score);

let valuenumber = Number(score);
console.log("Score : " + typeof score);     // score type is same always
console.log(valuenumber);       
console.log(typeof valuenumber);

/*
    "33"        => 33
    "33abc"     => NaN
    true        => 1 
    false       => 0
    null        => 0
    undefined   => undefind
    "Neetu"     => NaN
*/

let islog = "neetu";
let booleanis = Boolean(islog);
console.log(booleanis);
console.log(typeof booleanis);

/*
    1       => true
    0       => false
    ""      => false
    "neetu" => true
*/

let someNumber = null;
let stringNumber = String(someNumber);
console.log(someNumber);            // null
console.log(typeof stringNumber);   
console.log(stringNumber);          // null