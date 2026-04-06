 const marvel_heroes = ["thor", "ironman", "spiderman"];
 const dc_heroes = ["superman", "batman", "flash"];

 marvel_heroes.push(dc_heroes);

//  console.log(marvel_heroes);
//  console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeroes);

 const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // 👉 The spread operator (...) is used to expand (spread out) elements of an array or object.

//  console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);

// console.log(Array.isArray("Nrusingh")); // to check if value is array or not

// console.log(Array.from("Nrusingh")); // Creates an array from an iterable object.

// console.log(Array.from({name: "hitesh"})); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.






 



 