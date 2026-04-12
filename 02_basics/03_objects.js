// Singleton

// A Singleton is a design pattern where Only ONE instance of an object exists in the entire application

// Object Literals

// An object literal is the easiest way to create an object in JavaScript. 
// It’s just a collection of key-value pairs written inside {}


const mySym = Symbol("key1");

const JsUser = {
    name: "Nrusingh",
    [mySym]: "mykey1",
    age: 24,
    location: "Rayagada",
    email: "Nrusingh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name); // old method
// console.log(JsUser["email"]); // new method
// console.log(JsUser[mySym]);

JsUser.email = "nrusingh@microsoft.com"; // overwrite value
// Object.freeze(JsUser); // used to freeeze object so that nobody can change contents inside it
JsUser.email = "nrusingh@chatgpt.com";
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.email}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




