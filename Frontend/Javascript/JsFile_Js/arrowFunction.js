// this keyword -> refer to current object

const user = {
    userName: "Neetu",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${userName} , welcome to website`);     error : userName is not defined
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.userName = "Prakash";
user.welcomeMessage();
console.log(this);      // {}

console.log("------------------------------");
function chai(){
    let userName = "Neetu";
    console.log(this);     
    console.log(this.userName);     // undefined   
}
chai();

console.log("------------ arrow function ----------------");
const chai2 = () => {
    let userName = "Prakash";
    console.log(this);              // {}
    console.log(this.userName);     // undefined
}
chai2();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5,8));

const addThree = (num1, num2, num3) => num1 + num2 + num3;
const addtwo = (num1, num2) => (num1 + num2);
console.log(addThree(3,5,7));
console.log(addtwo(3,5));

const returObj = (num1, num2) => {userName: "Neetu"};   
console.log(returObj(3,5));         // undefined

const returnObj = (num1, num2) => ({userName: "Neetu"});
console.log(returnObj(3,5));

const myArray = [2, 3, 4, 5];
myArray.forEach(() => {});