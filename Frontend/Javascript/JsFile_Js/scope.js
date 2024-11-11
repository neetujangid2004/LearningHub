// Scope parameters 

let num1 = 10;
const num2 = 20;
var num3 = 40;

var c = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);  error :- a is not defined
// console.log(b);
console.log(c);     // var is not follow scope rules 

let a = 300;        // global scope
if(true){
    let a = 30;     // block scope
    console.log(`Inside a : ${a}`);
}
console.log(`Outside a : ${a}`);

console.log("---------------------------");
function one(){
    const userName = "Neetu";

    function two(){
        const website = "youTube";
        console.log(userName);
    }
    // console.log(website);    error : website is not defined
    two();
}
one();

if(true){
    const userName = "Neetu";
    if(userName === "Neetu"){
        const website = " youTube";
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

console.log("-------------- interesting ---------");

console.log(addone(7));
function addone(num){
    return num + 1;
}
addone(5);

// console.log(addTwo(8));          error : cannot access 'addTwo' before initialization
const addTwo = function(num){       // expresion
    return num + 2;
}
addTwo(5);