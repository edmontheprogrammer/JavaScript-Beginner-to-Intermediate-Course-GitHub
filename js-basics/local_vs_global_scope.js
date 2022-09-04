// Local vs Global Scope: 
// Note 1; local variables take precedence over global variables
// But in general you should avoid defining global variables or even 
// variables with the same names in a program

const color = 'red'; // global to the entire file
// creating a function named start()
function start() {
    // creating a constant named message and setting it to the string 'hi'
    // the scope of message is the entire start() function
    const message = 'hi';
    const color = 'blue'; // local to the start() function

    // if-statment that runs forever
    if (true) {
        // creating a constant name another and setting it to 'bye'
        // the scope of another is only the the if-statement-block
        const another = 'bye';
    }

    // the scope of i is the for-loop-block. 
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

}

// calling the start method. 
start();

// i is not accessiable here
// console.log(i); 