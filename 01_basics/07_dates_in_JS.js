// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2026, 3, 05);
// console.log(mycreatedDate.toDateString());
// let myCreatedDate = new Date("2026-04-05"); // (yyyy-mm-dd) format
// let myCreatedDate = new Date("04-05-2026"); // (mm-dd-yyyy) format

// let myTimeStamp = Date.now();+
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date("2026-04-05"); // yyyy-mm-dd format
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));

console.log(newDate);





