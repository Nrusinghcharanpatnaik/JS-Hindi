const tinderUser = new Object(); // non-singleton Object // object constructor
const tinderUser2 = {} // singleton Object // object literal

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
        firstname: "hitesh",
        lastname: "choudhary"
    }
}
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2}; // using spread operator combining two objects and printing the value
// console.log(obj3);

const users = [
    {
        id:1,
        email: "N@gmail.com",
    },
    {
        id:2,
        email: "R@gmail.com",
    },
    {
        id:3,
        email: "U@gmail.com",
    },
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // to print key values of an object
// console.log(Object.values(tinderUser)); // to print value pairs of an object
// console.log(Object.entries(tinderUser)); // to convert the key-value apirs in arrays of an object

// console.log(tinderUser.hasOwnProperty('name1')); // to check if the property is listed or not in an object

// object destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// course.courseInstrutor // normal approach

const {courseInstructor: instructor} = course // best approach

// console.log(instructor);

// JSON API

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

