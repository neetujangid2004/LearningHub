// if

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("executed");
}
if(2 == "2"){
    console.log("2 == '2'");
}
if(2 === "2"){
    console.log("2 === '2'");
}
if(2 != 3){
    console.log("2 != 3");
}
// >, <, >=, <=, ==, !=, ===

const temperature = 41;
if(temperature < 50){
    console.log("less than 50");
}else {
    console.log("greater than 50");
}
console.log("executed");

const score = 200;
if(score > 100){
    let power = "fly";
    console.log(`User power : ${power}`);
}

const balance = 1000;
if(balance > 500) console.log("tesst");
if(balance > 600) console.log("600"), console.log("500");

if(balance > 600){
    console.log("greater than 600");
}
else if(balance > 800){
    console.log("greater than 800");
}
else {
    console.log("less than 1200");
}

console.log("-----------------");
const isLoggin = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if(isLoggin && debitCard){                      // all condition are true then result is true
    console.log("Allow to buy course");
}
if(LoggedInFromGoogle || LoggedInFromEmail){    // only one condition is true then result is true
    console.log("User Logged In");
}

// Nullish Coalescing Operator (??): null undefined

let value1;
value1 = 5 ?? 10;
console.log(value1);        // 5

value1 = null ?? 10;
console.log(value1);        // 10

value1 = undefined ?? 15;
console.log(value1);        // 15

value1 = null ?? 10 ?? 20;
console.log(value1);        // 10

// Ternary Operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");