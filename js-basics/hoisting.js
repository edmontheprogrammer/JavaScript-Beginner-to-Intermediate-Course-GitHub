// Hoisting; hoisting is the process of moving function declarations
// to the top of the file. This is done automatically by the JavaScript 
// engine. 

walk();

// Function Declaration 
function walk() {
    console.log('walk');
}

// calling the run() method before it's initialized gives us 
// error 'Uncaught ReferenceError: 
// can't access lexical declaration 'run' before initialization'
// run();
//console.log(x);
//let x = 1; returns an error 

// Function Expression 

const run = function () {
    console.log('run');
};

// The key difference between Function Declaration and Function 
// Expression is we call 'the function that's created using the 
// Function Declaration syntax' before it's defined. For example, 
// We can call the 'walk()' function before it's declared. 
// But we cannot call a function that's defined using the 
// Function Expression syntax before it's created. 
// 