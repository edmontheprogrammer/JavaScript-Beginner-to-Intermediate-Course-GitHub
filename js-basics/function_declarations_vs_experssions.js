
// Function Declaration
function walk() {
    console.log('walk');
}

// In JavaScript there's another way to create a function, 
// that's using Function Expression
// Note 1; in javascript functions are objects
// Named Function Expression
// Anonymous Function Expression
let run = function () {
    console.log('run');
};

// Now both run and move are referencing the same object or function 
// in memory
let move = run;
run();
move();

// In JavaScript there are two ways to define a function
// 1. Function declaration syntax 
// 2. Function Experssion syntax 
