// for Each Loop

// The forEach() method executes a provided function once for each array element. It is a higher-order function that takes a callback function as an argument and applies it to each element in the array. The forEach() method does not return a new array, but it allows you to perform side effects on each element of the array.

const coding = ["js", "ruby", "python", "java", "c++"];

// coding.forEach( function name(val) {
//     console.log(val);
// } )

// coding.forEach((item) => { //using arrow function
//     console.log(item);
    
// })

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe); // passing the function as a callback to forEach method

coding.forEach( (item, index, arr) => {  // using arrow function with index
    console.log(item, index, arr);
} );

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} );