let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

let createDate = new Date(2023, 0, 12) // jan = 0 
// console.log(createDate.toDateString());


let createNewDate = new Date(2025, 0, 6, 9, 6) 
// console.log(createNewDate.toLocaleString());

let createNewDate2 = new Date("01-12-2023")
// console.log(createNewDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createNewDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})








