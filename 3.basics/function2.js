// this keyword cuurent context ke baare me batata hai

const user = {
    username: "Mithu",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
        
        
    }
}

// user{}= iske andr jobhi hai wo hamara current context hai , toh iske andr ke variable ko access krne ke liye this keyword ka use karte hai


// user.welcomeMessage()
// user.username = "nandini"
// user.welcomeMessage()

// console.log(this);

function hy (){
    let hello = "nandini"
    // console.log(this.hello); // undefined //function ke andr this use nhi kr skte
    
}
hy()

////////////arrow function

const arrow = () => {
    let client = "Nandini"
    // console.log(this);
    
}

arrow()



// basic arrow function or explicit arrow function (return keyword require)
const addTwo=(num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,4));

// impicit arrow function = no need to use return

// const addAgain =(numb1, numb2) => numb1 + numb2
// console.log(addAgain(5,6));

const addAgain =(numb1, numb2) => (numb1 + numb2)
console.log(addAgain(5,6));

// to return object in arrow function 

const obj =(numb1, numb2) => ({username})
console.log(addAgain(5,6));