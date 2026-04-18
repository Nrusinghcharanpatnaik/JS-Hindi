 let a = 10;
//  const b = 20;
//  var c = 30;

// block scope is the scope of the variables that are defined inside a block. A block is defined by curly braces {}. The variables that are defined inside a block are not accessible outside the block. The variables that are defined outside the block are accessible inside the block.

 // global scope is the scope of the variables that are defined outside any function or block. The variables that are defined in the global scope are accessible anywhere in the code.

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);  
 }

//  console.log(a);
//  console.log(b);
//  console.log(a); // here when i run this js file, for var c the value is accessible outside the block but for let and const it is not accessible outside the block. This is because of the scope of the variables. The scope of var is function scope and the scope of let and const is block scope.

 function one() {
    const username = "Nrusingh";

    function two() {
        const website = "youtube.com";
        // console.log(username);
    }
    // console.log(website);

    // two();
    
 }

//  one();

if (true) {
    const username = "Nrusingh";
    if (username === "Nrusingh") {
    const website = "youtube.com";
    console.log(username + website);
}
// console.log(website);
}

// console.log(username);


//  +++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}

console.log(addone(5));

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));


 
 