// singleton
// literals     : not make a singleton
// constructor  : always make a singleton (one object)  (Object.create)

console.log("***********   object literals *************"); 

const mySym = Symbol("key1");    // symbol
const mySym1 = Symbol("key2");   // symbol

let jsUser = {
    name: "Neetu",
    "full name": "Neetu jangid",
    mySym: "myKey1",
    [mySym1]: "myKey2",
    age: 18,
    location: "jaipur",
    email: "neetujangid.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Tues"]
};
console.log(jsUser.location);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// console.log(jsUser."full name");       // error

console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);         // string

console.log(jsUser[mySym1]);
console.log(typeof jsUser[mySym1]);       // string
console.log(typeof mySym1);               // object

jsUser.email = "Prakash.com";
Object.freeze(jsUser);                    // log the values means do not change the value of object
jsUser.email = "Prakashjangid.com";       // value is not assign (value is not propoget)
console.log(jsUser.email);                // prakash.com  
console.log(jsUser);  

jsUser.greeting = function(){
    console.log("Hello Js user");
}
// console.log(jsUser.greeting());        // error because object is freeze
console.log(jsUser.greeting);             // undefined

console.log("-----------------------------");
let jsUser1 = {
    name: "Prakash"
};
jsUser1.greeting1 = function(){
    console.log("Hello Neetu");
}
console.log(jsUser1.greeting1);           // return reference of the function and not excute
console.log(jsUser1.greeting1());

jsUser1.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}      
console.log(jsUser1.greeting2());


console.log("*************** Object Constructor ***********");
const tinderUser = new Object();
console.log(tinderUser);

const userName = {};
userName.id = "123abc";
userName.name = "sammy";
userName.isLoggedIn = false;
console.log(userName);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Neetu",
            lastName: "Jangid"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

console.log("--------------------");
const obj1 = {
    1: "a",
    2: "b"
};
const obj2 = {
    3: "a",
    4: "b"
};
const obj3 = {obj1, obj2 };
console.log(obj3); 

const obj4 = Object.assign({}, obj1, obj2);     // assign object
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

console.log("--------------------------");
const arr = [
    {
        id: 1,
        a: "1"
    },
    {
        id: 1,
        a: "1"
    },
    {
        id: 1,
        a: "1"
    }
];
arr[1].id;
console.log(arr[1].id);

console.log(userName);
console.log(Object.keys(userName));
console.log(Object.values(userName));
console.log(Object.entries(userName));
console.log(userName.hasOwnProperty('isLoggedIn'));

console.log("-----------------------------");
const course = {
    courseName: "Chaman Prash",
    price: "999",
    courseInstructor: "Komal"
}
console.log(course.courseInstructor);

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

// const navbar = {{company}} => {
// }
// navbar(company = "Nishuji");

// {        jession
//     "name": "Neetu",
//     "courseName": "Js hindi",
//     "price": "free"
// }
// [
//     {},
//     {},
//     {}
// ]