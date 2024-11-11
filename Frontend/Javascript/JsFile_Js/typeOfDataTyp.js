// Type of Data type :
/*  1. Primitive data type :-
    7 types :
    String, Number, Boolean, null, undefined, Symbol, BigInt
*/
const num = 1234;
const num2 = 34.5;
const str = "Neetu jangid";
const b = false;
let userEmail;
const outSideId = null;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id == anotherId);   // false 
console.log(id === anotherId);

const bigNumer = 1234567890123451234n;      // without n print wrong number 
console.log(bigNumer);

/*  2. Reference ( Non primitive )
    Array, Onject, Functions

    Q. Javascript is a static or dynamic ?
*/
const heros = ["Prakash", "Yogesh", "Rajendra", "Anna"];
let myObj = {
    name: "Neetu",
    age: 19,
}
console.table(heros);
console.log(myObj.name);
const myfunction = function(){
    console.log("Hello World");
}
myfunction();

console.log(typeof myfunction);
/*
    null    = object
    array   = object
    false   = boolean
    String  = function
*/

console.log("******************************************************");
/* Memory allocation
    Stack ( primitive ) and Heap ( Non-primitive )
       copy value                 real value
    if we can change the value of primitive datatype then not change the real value but in the non-primitive datatype if we can change the value then change real value of variable 
*/
// primitive
let myName = "Neetudotcom";
let newName = myName;
console.log(newName);

newName = "Prakashdotcom";
console.log(myName);
console.log(newName);

// non-primitive 
let userOne = {
    email: "Neetu@gamil.com",
    upi: "Neetukhati@gamil",
}
let userTwo = userOne;
console.log(userTwo.email);

userTwo.email = "prakash@gamil.com";
console.log(userOne.email);
console.log(userTwo.email);