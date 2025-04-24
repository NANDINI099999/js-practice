const appUser = new Object() //singleton object
const appUser2 = {} //literal object or non singleton object

appUser2.id = "123abc"
appUser2.name = "Nandini Kumari"
appUser2.isLoggedIn = false

// console.log(appUser2);

const regularUser = {
    email: "some@gmail.com",
    userfullname: {
    fullname: "nandini",
    lastname: "kumari",
    }
}

// console.log(regularUser.userfullname.fullname); // we can access nested object using dot notation

// optional chaining - it is used to avoid error when we are not sure if the object exists or not.

//merging objects

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = Object.assign({}, obj1, obj2) // it will merge obj2 into obj1 (providing empty object as first argument is a good practice to avoid changes in original arrays the original object)

const obj3 = {...obj1, ...obj2} // recommended to use 

// console.log(obj3); 

// when data come from database-

const dbUser = [
    {
        id: "1",
        email: "abc@gmail.com"
    },
    {
        id: "2",
        email: "abc@gmail.com"
    },
    {
        id: "3",
        email: "abc@gmail.com"
    },
    {
        id: "4",
        email: "abc@gmail.com"
    },
    {
        id: "5",
        email: "abc@gmail.com"
    }
]

// console.log(dbUser[1].email); // [1] = first value

// lets practice methods 

console.log(appUser2);

console.log(Object.keys(appUser2)); // it will return the keys of the object in the form of array which we can use to iterate over the object

console.log(Object.values(appUser2)); // it will return the values of the object

console.log(Object.entries(appUser2)); // it will return the key value pair of the object in the form of array inside an array

console.log(appUser2.hasOwnProperty("name")); // hasOwnProperty is used to check if the object has the property or not. It will return true or false
