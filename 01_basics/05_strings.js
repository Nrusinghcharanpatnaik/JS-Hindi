const name = "Nrusingh"
const repoCount = 50

//  console.log(name + repoCount + " Value"); not recommended as of today

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nrusingh');

console.log(gameName[0]);;
console.log(gameName.__proto__);;

console.log(gameName.length); // length property
console.log(gameName.toUpperCase()); // touppercase
console.log(gameName.charAt(2)); //charAt
console.log(gameName.indexOf('N')); //indexOf

const newString = gameName.substring(0, 4); // substring
console.log(newString);

const anotherString = gameName.slice(-8, 4); // slice
console.log(anotherString);

const url = "https://nrusingh.com/nrusingh%20patnaik";

console.log(url.replace('%20', '-')); // replace method

console.log(url.includes('nrusingh')); // includes method





