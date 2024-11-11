//  ************** Numbers **************
const score = 200;
const balance = new Number(100);
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);    // object

console.log(balance.toString().length);
console.log(balance.toFixed(2));    // after point add zeros

const otherNumber = 1124.8445;
console.log(otherNumber.toPrecision(3));     // 1.12e+3
const otherNumber1 = 123.8445;
console.log(otherNumber1.toPrecision(3));    // 124
console.log(otherNumber1.toPrecision(4));    // 123.8

const zeros = 1000000000;                      // split zeros sapretly 
console.log(zeros.toLocaleString());           // USA
console.log(zeros.toLocaleString('en-IN'));    // India

console.log("***************** Maths ******************");
console.log(Math);  // object [Math] {}

console.log(Math.abs(-45));
console.log(Math.abs(45));

console.log(Math.round(4.4));   // 4
console.log(Math.round(4.6));   // 5
console.log(Math.ceil(4.3));    // 5
console.log(Math.floor(4.6));   // 4

console.log("Minimum " + Math.min(4, 3, 7, 9, 15));   
console.log("Maximum " + Math.max(4, 6, 7, 15, 90));   

console.log(Math.random());     // value of Math.random between 0 to 1 always    
console.log((Math.random() * 100) + 1); 

console.log("------------"); 
const min = 10;
const max = 20;
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(max - min + 1);
console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 