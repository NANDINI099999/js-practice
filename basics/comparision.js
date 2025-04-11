// comparision always give value in boolean value

console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02"> 1);

// in typescript language it does not allow to compare two different type of datatypes
// whenever you are comparing two data types make sure that both are of same types

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//strict check
console.log("2" === 2);


// comparision and equality check both are different 
