// function sayMyName(){
//     console.log("N")
//     console.log("A")
//     console.log("N")
//     console.log("D")
//     console.log("I")
//     console.log("N")
//     console.log("I")
// }

// sayMyName() // here sayMyName is reference and () is execution




// function addTwoNumbers(num1, num2)/*this is parameter(taking inputs while defining a function)*/{
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result // this is return statement
    // return num1 + num2 // this is also return statement
}

 const result = addTwoNumbers(2, 3) /*this is argument(calling a function)*/ 

// console.log("Result:", result) 



function loginUserMessage(userName){
    if(!userName){
        return "Please enter a valid username"
    }
    return `User logged in as ${userName}`
}
// console.log(loginUserMessage(""));

// to take input from user-
// const prompt = require("prompt-sync")();
// const userName = prompt("Enter your name: ")
// console.log(loginUserMessage(userName));


// rest operator

function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(100, 400, 500));

// rest and spread operator have same syntax but they vary with their use case.
// rest always written at last

// spread operator is used to unpack the array while rest operator is used to pack the array

// paasing function in an object

const user = {
    userName: "Nandini",
    age: 22
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and age is ${anyObject.age}`);
    
}

handleObject(user) // passing object as argument


// passing function in an array
const userArray = [
    {
        userName: "Nandini",
        age: 22
    },
    {
        userName: "Nikki",
        age: 23
    }
]


function handleArray(anyArray){
        return anyArray[0]
    
}

console.log(handleArray(userArray)) ;
