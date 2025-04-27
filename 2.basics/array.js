// array methods

const arr = [1, 2, 3, 4, 5 ,6]
// arr.push(5)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(0)
// console.log(arr);

// arr.shift()
// console.log(arr);

// console.log(arr.includes(2));

// console.log(arr.indexOf(9));

//split
let string = "apple,banana,mango"
let array = string.split(" ")
// console.log(array);


// join - Joins all elements into a string
const joined = [1, 2, 3].join('-');
// console.log(joined); // "1-2-3"

let fruits = ["apple", "banana", "mango", "orange"]
let newFruitsA = fruits.slice(1,3) 
// console.log(newFruitsA); // banana, mango // alice dont include last array
// console.log(fruits); // fruits (because slice dont manipulate the real array)


let newFruitsB = fruits.splice(1,3)
// console.log(newFruitsB); //banana, mango, orange // include last array
// console.log(fruits); //apple (aplice manipulate the real array)

let filt = [1,2,3,4]
let newFilt = filt.filter(num => num > 2) //filtering out the element which are greater than 2
console.log(newFilt);



//////array part-2



let boy = ["Ram", "Rahul", "Mohan", "Shyamal"]
let girl = ["Ridhi", "Sidhi", "Radha", "Diya"]

// boy.push(girl)
// console.log(boy);
// console.log(boy[4][2])

let concatinating = boy.concat(girl)
// console.log(concatinating);

// push add one or more array elements to the end of the original array. it returns new length of the array.

//concat combines two or more arrays (or values) into a new aray. It returns a new array with the added elements

//spread operator-

const people = [...boy, ...girl]
// console.log(people);

//difference in concat and spread

// concat(method) is traditional way to join arrays and spread(operator) is modern way which provide more control, cleaner syntax, or to mix arrays with other elements


//flat - Flattens nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [5,6]]]

const new_array = another_array.flat(Infinity)
// console.log(new_array);


//console.log(Array.isArray("Nandini")) // false (because string is not an array)
//console.log(Array.from("Nandini")) // .from convert string to array
//console.log(Array.from({"name":"Nandini"})) // [] because ye decide nhi kr paa rha hai ki kise array me convert karna hai key ko ya value ko

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3)) ;


// Array.of() creates a new array instance with a variable number of arguments, regardless of the number or type of arguments.

// Array.from() creates a new array instance from an array-like or iterable object, converting it into an array.

