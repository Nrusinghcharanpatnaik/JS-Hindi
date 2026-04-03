// What are Datatypes?
// Ans. Data types define the type of value a variable can hold

// Types of Data Types in JavaScript
// JavaScript has 2 main categories:
// 1. Primitive Datatype - call by value
// 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherID = Symbol('123');

// console.log(id === anotherID);

const bigNumber = 34342342424;

// Javascript is dynamically typed language

//2. Non-Primitive Datatype - call by reference
// Arrays, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"];


let myObj = {
    name: "Nrusingh",
    age: 24,
}

const myFunction = function() {
    // console.log("Hello world");
}

// console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "TrickyPhantom007";

let anothername = myYoutubename;
anothername = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Nrusingh@google.com";

console.log(userOne.email);
console.log(userTwo.email);






// 