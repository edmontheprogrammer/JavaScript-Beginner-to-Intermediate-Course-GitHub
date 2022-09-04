// There are two ways to declare variables in javascript
// 1. let keyword 
// 2, var keyword
// Note 1; you should avoid using the var keyword to 
// create variables in javascript. 
// let x = 0;
// var y = 0; 

// Note 2; i is only accessibale in the for-loop-block because the scope 
// of i is the for-loop-block.
// Note 3; declaring the 'i' variable using the 'var' keyword 
// makes i accessiable outside the scope of the for-loop-block 
// this is the issue with using the var keyword. 
function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            let color = 'red';
        }
    }

}

start();

// var => function-scoped , In javascript , using the var keyword does 
// not limit the scope of a variable like most programming langauges. 
// ES6; let, const => block-scoped 

// the second issue with var keyword is when working with global variables. 
// Note 4; using the var keyword to declare variables outside of a function 
// creates a global variable and attaches that global variable to the 
// window object in browser. In browser we have a 'window' object
// with a lot of properites and methods. The var keyword attaches the 
// variable to the window object "window.color" outputs 'red'
// On the otherhand, 'let' keyword does not attach the variable to the 
// window object. You should avoid adding things to the window object 
var color = 'red';
let age = 7;

// this function is a global function and is added to the window object
// 'window.sayHi()' this is bad practice
function sayHi() {
    console.log('hi');
}


// Remember to avoid using the var keyword in javascript because it 
// creates variables that a function scope, not block scope. 