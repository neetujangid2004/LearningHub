// ******* string ********
const name = "Neetu Jangid";
const number = 19;
console.log(name + number);

// string interpulation 
console.log(`Hello i am ${name} and my number is ${number} `);  // tab bottun ke upper vala ``

const gameName = new String('Neetu Jangid');    // string declaration
console.log(gameName);  // [String: 'Neetu Jangid']

console.log(gameName[7]);
console.log(gameName.__proto__);    // {}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-10, 7);
console.log(anotherString);

const newStringOne = "    Prakash   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "Prakash-jangid-khati";
console.log(url.replace('khati', 'Jangid'));
console.log(url.includes('khati'));
// make array
console.log(url.split('-'));