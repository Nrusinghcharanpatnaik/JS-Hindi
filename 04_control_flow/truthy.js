const userEmail = []

if (userEmail) { // if userEmail is truthy, it will execute the block of code inside the if statement
    console.log("user email is valid");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, " , null, undefined. NaN"

// truthy values

// "0", "false", " ", [], {}, function(){} , true, 1, -1, BigInt 1n, Infinity, -Infinity

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");   
// }

// Nullish Coalescing Operator (??) : null undefined

// The Nullish Coalescing Operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand. This operator is useful for providing default values when dealing with potentially null or undefined variables.

let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10; // if the value on the left is null or undefined, it will return the value on the right
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20; // it will return the first non-nullish value from left to right, in this case it will return 10 because null is nullish and 10 is not nullish
// console.log(val1);

// Tertiary Operator

// The Ternary Operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is a shorthand way of writing an if-else statement.

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80"); // if the condition is true, it will execute the first expression, otherwise it will execute the second expression