console.log("*********** Operations ***************");
let value = 3;
let negValue = -value;
console.log("negValue : "+negValue);

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "Neetu ";
let str2 = "Jangid";
let str3 = str1 + str2;
console.log("String : " + str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

console.log(true);
console.log(+"neetu");
/* 
    console.log(true+); // error :- Unexpected tokan
    true        => true
    +true       => 1
    +""         => 0
    +"neetu"    => NaN
*/

let num1,num2,num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
console.log("Prefix : " + ++gameCounter);
console.log("Postfix : " + gameCounter++);
console.log(gameCounter);
