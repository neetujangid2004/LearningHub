// Array
let myarr = [1, 2, 3, 4, 5];
let arr1 = [12, 56, 78, "Neetu"];
let arr2 = ["Prakash","Neetu","Jangid"];
console.log(typeof myarr);              // object
console.log("First array  : " + myarr);
console.log("Second array : " + arr1);
console.log("Third array  : " + arr2);

let arr3 = new Array(1,6,3,8,3);
console.log("Four array   : " + arr3);
console.log(myarr[3]);
console.log(arr1[3]);

// Array methods
console.log("--------------------");
myarr.push(10);
myarr.push(16);
console.log("MyArray : " + myarr);
myarr.pop();
myarr.unshift(20);                  // push a value in the start point  (first)
myarr.unshift(15);
myarr.shift();                      // remove a value in the start point
console.log("MyArray : " + myarr);
console.log(myarr.includes(9));     // find the number in the array (search)
console.log(myarr.indexOf(9));      // find the index in the array (search)
console.log(myarr.indexOf(10));  

let newArr = myarr.join();
console.log(myarr);
console.log(newArr);
console.log(typeof newArr);         // string

// slice and splice
console.log("----------------------");
console.log("My Array  : " + myarr);
console.log("");
let newArr1 = myarr.slice(1, 3);
console.log("New Array : " + newArr1);
console.log("Array : " + myarr);

console.log("");
let newArr2 = myarr.splice(1, 3);
console.log("New Array : " + newArr2);
console.log("Array : " + myarr);        // loss

// other methods
console.log("-----------------------");
let myheros = ["Yogesh","Rajendra","Prakash"];
let newheros = ["Neetu","Jangid"];
myheros.push(newheros);         // push
console.log(myheros);
console.log("index 3 : " + myheros[3]);
console.log("Array : " + myheros);
console.log(myheros[3][1]);

myheros.concat(newheros);       // concat
console.log(myheros);
console.log("index 3 : " + myheros[3]);
console.log(myheros[3][0]);

let allheros = myheros.concat(newheros);       // marge array by concat and assign in the new array
console.log(myheros);
console.log(allheros);

let all_heros = [...myheros, ...newheros, ...allheros];      // sperate
console.log("Sperate array : " + all_heros);

console.log("---------------------------");
let another_array = [, 2, 3, 4, [2, 4, 6], [1, 5, 6, [6, 7, 9,10]]];
console.log(another_array);
let flatarray = another_array.flat(Infinity);
console.log(flatarray);

console.log(Array.isArray("Prakash"));      // false
console.log(Array.from("Prakash"));
console.log(Array.from({name: "Prakash"}));     // interesting : return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // create new array by connect the elements