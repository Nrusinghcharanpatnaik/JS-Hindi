const accountId = 144553;
let accountEmail = "Nrusingh@google.com";
var accountPassword = "12345";
accountCity = "Rayagada";
let accountState;

// accountId = 2; // not allowed 
console.log(accountId);

accountEmail = "google.com";
accountPassword = "212121212";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
