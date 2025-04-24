// there is two way to declare objects. 1- literal 2- constructor
// singleton - it is a design pattern jiska use hum ek hi object create karne ke liye karte hai. or keh sakte hai ek class ka sirf ek hi object banega, aur sb jagah isi object ka use hoga.(ek insaan hrr kaam ke liye)

// when we create an object using literal syntax, a new object is created every time. That means it's not a singleton.(LITERALS DOES NOT CREATE SINGLETON)

// Constructor create singleton pr isse tabhi singleton banega jb hm uska singleton pattern implement karenge. Warna hr baar new se nya instance create hoga.

// Constructor - ek function hota hai jo object create karne ke liye use hota hai. Constructor ko hum new keyword ke sath call karte hai. Constructor function ka naam hamesha capital letter se shuru hota hai.

//constructor 

Object.create

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Nandini",
    "Full Name": "Nandini Kumari", // we cant access this property using dot notation, we have to use bracket notation
    [mySym] : "myKey1", // we can use symbol as key but we have to put it in square brackets
    age: 22,
    location: "Bihar",
    email: "nandni@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);
    
// we can override the values using equal to sign
jsUser.email = "nandni834742@gmail.com" 

// if you want to lock any property so that it cannot be changed, we can use Object.freeze() method. 

// Object.freeze(jsUser) 

jsUser.email = "nandini999@gmail.com"

console.log(jsUser);

jsUser.greet = function() {
    console.log("hello js user") 
}


jsUser.greet2 = function() {
    console.log(`Hello js user, ${this.name}`) // jbbhi same object ko reference karna ho to this keyword ka use karte hai
}

console.log(jsUser.greet());
console.log(jsUser.greet2());
// console.log(jsUser.greet2.call({name: "Nandini Kumari"})); // call method is used to call a function with a specific context.


    
 
 