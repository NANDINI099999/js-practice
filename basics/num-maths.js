const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.89
// console.log(otherNumber.toPrecision(4)); //return string

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));
//en-IN = for indian value, its default value is in US standard

/////////////////////////////// maths//////////////////////////

console.log(Math);
console.log(Math.abs(4)); // gives positive value 
console.log(Math.round(4.6)); //round fo the value =>5
console.log(Math.ceil(4.2)); //chhose the upper value => 5
console.log(Math.floor(4.2)); //choose the lower value => 4
console.log(Math.min(4, 6, 3, 7, 2)); //choose lowest value =>2
console.log(Math.max(5, 7, 2, 8, 3)); //choose highest value =>8


console.log(Math.random()); // gives value between 0 and 1
console.log((Math.random()*10) + 1); // multiplying with 10 to shift one value (ex- 1.7879 => 7.7879) , +1 because sometimes it gives value like 0.0577 so to avoid 0 value adding the value with 1
console.log(Math.floor(Math.random()*10) + 1); // to avoid points value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // max- min to get value betwwen the given range and +1 tio avoid that 0 case. + min to get min value













