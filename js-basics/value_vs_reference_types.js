// Value vs Reference Types:
// In JavaScript we have to types of data

// Values Types and Refeerence Types:
// Values Types are Number, String, Boolean, Symbol, undefined
// and null

// The Reference Types are Object, Function and Array. 

// In sort, we have primitives and objects as data types in JavaScript. 

// defining two primitive variables
// let x = 10;
// let x = { value: 10 };
// let y = x;

// x.value = 20;

// the scope of 'number' here is global to the entire current file
let number = 10;
function increase(number) {
    // the scope of number declared at the parameter list of 
    // 'increase()' is limited to the increase function, 
    // 'number' here is a local variable to the 'increase()' function
    // the 'number' variable here is indepdent of the the other 'number'
    // declared at the global scope of the current file (let number = 10;)
    number++;
}

increase(number);
console.log(number);


// Note 1: x and y are two indepedent variables. 
// Note 2: Primitives are copied by their value and Objects are
// copied by their reference.
