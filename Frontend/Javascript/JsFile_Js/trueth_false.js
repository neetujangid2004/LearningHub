const userEmail = "neetu@gmail.com";
if(userEmail){
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

/*  falsy values :
    false, 0, -0, BigInt 0n, "", null, undefined, Nan

    truthy values : 
    "0", 'false', " ", [], {}, function(){}, 
*/

const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

if(false == 0){         // true
    console.log("false == 0");
}
if(false == ""){        // true
    console.log("false == ''");
}
if(0 == ""){            // true
    console.log("0 == ''");
}