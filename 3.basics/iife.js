// Immediately Invoked Function Expressions (IIFE) when have to create a function which immediately get executed. 

// IIFE is use to prevent variables declared in the global scope from interfering with other code  

(function one (){
    // named IIFE
    console.log(`DB Connected`);
})(); // always provide semicolon to end the line (because the code written in IIFE syntax doesnt know where to stop the context )

( (name) => {
    console.log(`DB TWO Connected ${name}`);
    
}  )("Nandini")