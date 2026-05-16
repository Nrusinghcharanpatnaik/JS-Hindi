 const user = {
    username: "hitesh",
    loginCOunt: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
 }

 console.log(user.username);
//  console.log(user.getUserDetails());
console.log(this);
 
 const user2 = {
    username: "hitesh",
    loginCOunt: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
 }

 const promiseOne = new Promise()
 // new is a constructor function 

 const userOne = User("Nruisngh", 12, true)
 const userTwo = User("ChaiAurCode", 11, false)
 console.log(userOne);