//concatinating (old way)
 const name= "nandini"
 const age = 23
 
//  console.log(name + age + "value");

 // concatinating (modern way) in string interpolation using backticks

//  console.log(`my name is ${name} and i am ${age} years old.`);
 
 // another way to write string

 const gameName = new String('Halo')
 /*-Here we are using string constructor within new keyword.
  -halo is not just a value , but an object that wraps in it.
  -new string()=because of new, js creating an object instance(example) of a string type.
  -Need? it was designed to give you a wrapper object so you can use string methods like - toUpperCase(), .includes() etc */ 

//  console.log(gameName);

 //methods
//   console.log(gameName.length);
//   console.log(gameName.toUpperCase());
//   console.log(gameName[3]);
//   console.log(gameName.__proto__);
//   console.log(gameName.charAt(3));
//   console.log(gameName.indexOf('a'));

//   console.log(gameName.substring(0,2));
  // not including last value
  // cant use negative value

  
  const newName = new String('   Nandini Shah')
  console.log(newName.slice(2, 7));
  
  console.log(newName); 
  console.log(newName.trim());
  // trim will remove the extra space of starting and ending (not of middle)
  
const url = "https://nandni.com/nandini%20shah"
  
console.log(url.replace('%20', '-'));

console.log(url.includes('engineer'));
// includes will check if the passed value(engineer) avalaible or not in url value  


  
  
  
 