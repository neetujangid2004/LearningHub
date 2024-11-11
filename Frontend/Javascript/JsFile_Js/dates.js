// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); 
console.log(myDate.toDateString());             // Sun Mar 10 2024
console.log(myDate.toISOString());          
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());       // 3/10/2024
console.log(myDate.toLocaleTimeString());       // 4:08:31 PM
console.log(myDate.toLocaleString());           // 3/10/2024, 4:08:31 PM
console.log(typeof myDate);                     // Object

console.log("----------------------");
let myCreatedDate = new Date(2024, 4, 23);      // decided date by the user (fixed)
console.log(myCreatedDate.toDateString());      
console.log(myCreatedDate.toLocaleString());   

let yourCreateDate = new Date(2004, 12, 23, 5, 3);
console.log(yourCreateDate.toLocaleString());    

let createDate = new Date("2004-01-14");
console.log(createDate.toLocaleString()); 

let CreateDate = new Date("01-14-2345");
console.log(CreateDate.toLocaleString()); 

console.log("----------------------");
let myTimeStamp = Date.now();
console.log(myTimeStamp);                   // in the milisecond
console.log(CreateDate.getTime());          // convert date into the milisecond
console.log(Date.now());
console.log(Date.now()/1000);               // convert milisecond in the second
console.log(Math.floor(Date.now()/1000));  

console.log("-----------------------");
let newDate = new Date();
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

console.log("-----------------------");
console.log(newDate.toLocaleString('default', {         // contain object and also contain defferent styles 
    weekday: "long",
    day: 'numeric',
    month: 'long'
}));