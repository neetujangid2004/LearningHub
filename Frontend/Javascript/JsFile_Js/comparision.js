console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 != 1);
console.log(2 == 1);

console.log("**** 1 ****");
console.log("2" > 1);
console.log("02" > 1);
console.log(4 < "1");
console.log("2" == 2);  // true

console.log("**** 2 ****");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);     // true
console.log(null > 1);
console.log(null == 1);
console.log(null >= 1);     // false
/*
    The reason is that an equality check == and comparisons > < >= <= work differenty.
    Comparisons convert null to a number, treating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false.
    null > 1 is false
    null == 1 is false 
    null >= 1 is also false
*/
console.log("**** 3 ****");
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
 // all are false 

console.log("**** 4 ****");
 // ===     compare also data type of variable
console.log("2" === 2);     // false
console.log("2" === "2");   // true 
console.log(2 === "3");
