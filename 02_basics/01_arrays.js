// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktimaan", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7); // using this method we can add element in the last index of the array
// myArr.pop(); // using this method we can remove the element from the last index of the array

//  myArr.unshift(9); // using this method we can add element in the first index of the array
//  myArr.shift(); // using this method we can remove the element from the first index of the array

// console.log(myArr.includes(9)); // includes method is used to check if the value of index exists in an array or not
// console.log(myArr.indexOf(3)); // indexof method is used to check if the index value mentioned exists or not in the array

const newArr = myArr.join();// this method is used to print all the array elements in string format

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice() → copy (does NOT change original array)

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3); // splice() → modify (changes original array)
console.log(myn1);
console.log("C ", myArr);
console.log(myn2); 










 