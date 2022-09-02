// In JavaScript, unlike in many other programming langauges,
// we can use logical operators with non boolean values. 
// false || 1  ---> returns 1
// false || 'Bob' ---> returns "Bob"
// false || true ---> returns true
// false || 1 || 2 ---> returns 1 which is a Truthy value 

// Note 1: the results of logical comparisons with non boolean values
// is not necessarily a 'true' or 'false'. The return value depends on 
// the value of the operands we have. 

// In JavaScript we have these values that are 
// Falsy (false)
//  undefined 
//  null 
//  false
//  ''
//  NaN; not a numbe is a special value in JavaScript


// Note 2: Anything that's not False is Truthy

// Short-circuiting

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);