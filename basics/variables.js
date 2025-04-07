const accountId = 144553
//does not allow re-declaration and re-initialization

let accountEmail = "nandni834742@gmail.com"
//does not allow re-declaration within same scope but allows re-assignment

var accountPassword= "12345"
//allow re-declaration and re-intialization

accountCity = "Bihar"

let accountState; // it give "undefined"

//accountId = 2378 // not allowed

 accountEmail = "naddinni123@gmail.com"
accountPassword = "3432"
accountCity = "Delhi"

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity])
