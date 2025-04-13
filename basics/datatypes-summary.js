// data types divided on two parts(primitive and non primitive)on the basis of - how data stores in memory and how to access the data
  // 7 primitive datatypes (pre-defined) => boolean, symbol, bigint, number, string, undefined, null
  const score = 100
  const scoreValue = 100.3

  const isLoggedIn =  false
  const outsideTemp = null
  let userEmail;

  const id = Symbol('123')
  const anotherId = Symbol('123')

  console.log(id === anotherId);
  
  
  
  // non-primitive (user-defined)=> object, function, array
  let obj = {
    name: "nandini",
    age: 22
  }

  const fruit = ["apple", "mango", "grapes"]

  let func = function(){
    console.log("hy");
    
  }



  //////////////////////////////////////////////////////////////////////
  //two types of memory in js
  // stack(primitive)-jb bhi koi variable declare karenge uska ek copy milega and heap(non-primitive) yaha declare kiye gye variable me original value ka reference milta hai
  
  // stack

  let idName = "nandni"
  let officeId= idName
  
  idName = "Nandini"

  console.log(idName);
  console.log(officeId);


  // heap

  let userOne ={
    email: "user123@gmail.com",
    upi: "user@ibl.com"
  }

  let userTwo = userOne

  userOne.email= "nandini123@gmail.com"

  console.log(userOne.email);
  console.log(userTwo.email);
  
  

  