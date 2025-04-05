// Immediately Invoked Function Expressions (IIFE)


// ()()
//  global scope ke pollutin hatane ke liye hum iffe ka use krte h



// (function iffe(){
//     console.log(` global scope ke pollutin hatane ke liye hum iffe ka use krte h`)
// })();

// ( ()=> {
//     console.log("in anonamus function and arrow function semicolen (;) is important");
// })()



( (name)=> {
         console.log("in anonamus function and arrow function semicolen (;) is important" + name);
     })("anshu")