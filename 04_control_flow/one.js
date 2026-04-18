// if

if (true) { // if the condition is true then the code inside the block will be executed

}

if (false) { // if the condition is false then the code inside the block will not be executed

}

const isUserLoggedIn = true;
const tempreature = 40;

// if ( 2 == "2") {
//     console.log("executed");
// }

// <, >, <=, >=, ==, ===, !=, ===

// if (tempreature <= 40) {
//     console.log("less than 50"); // if-else statement
// } else {
//     console.log("tempreature is greater than 50");
// }

// console.log("Execute");

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`); // local scopre
// }

// console.log(`user power: ${power}`); // global scope, power is not defined here

const balance = 1000;

// if (balance > 500) console.log("test"); // implicit scope, only one statement is allowed without curly braces .. not a good practice to write code like this, always use curly braces for better readability and maintainability

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

// conditional Statements

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) { // using && operator to check if both conditions are true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // using || operator to check if at least one condition is true
    console.log("Allow to buy course");
}

    




