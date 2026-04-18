// for of - Array Specific Loop

// The for...of statement creates a loop that iterates over iterable objects, such as arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable object directly, without needing to access the index.

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello, World!";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Map

// A Map is a collection of key-value pairs where each key is unique. It is an ordered data structure that allows you to store and retrieve values based on their associated keys. Maps are similar to objects in JavaScript, but they provide additional features and methods for working with key-value pairs.

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
map.set('IN', 'India');

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

// Note:- Maps are iterable whereas objects are not in for of loop