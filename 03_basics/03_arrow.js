const user = {
    username: "Nrusingh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) // this keyword refers to the current context of the function
        console.log(this); // this keyword refers to the current context of the function
        
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// Arrow Function

// const chai = () => {
//     let username = "hitesh";
//     console.log(this);
// }

// function chai() {
//     let username = "hitesh";
//     console.log(this.username);
// }

// chai();

// const addTwo = (num1, num2) => { // explicit return
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2; // implicit return

// const addTwo = (num1, num2) => (num1 + num2); // implicit return

// const addTwo = (num1, num2) => ({username: "Nrusingh"}); // implicit return


// console.log(addTwo(5, 10));

