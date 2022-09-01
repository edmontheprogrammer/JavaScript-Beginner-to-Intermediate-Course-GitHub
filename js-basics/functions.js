// In the category of reference types we learned about
// objects, arrays, now we'll learn about functions.
// Functions are one of the fundamental building blocks of JavaScript. 

// example of declaring a function in JavaScript
// a function can have multiple parameters
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
} // Note 1; you do not need to add a semicolon ';' at the end here  
//           when declaring functions in JavaScript because we are not 
// declaring a function like when we declare a variable like 
// this 'let number = 1;' 

// calling a function in JavaScript, you need the semicolon ';' at the end 
// when calling functions in JavaScript. 
greet('Bob', 'Smith');
