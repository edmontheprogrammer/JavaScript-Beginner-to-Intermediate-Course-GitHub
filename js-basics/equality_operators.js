// In JavaScript we have another equality operator indicated by 
// two equal signs (==)
// We also have the the triple equal signs used for comparison 
// operator (===)

//Strict Equality operator: 
//Strict Equality operator makes sure that both sides of the equation 
// has the same Type and Value. In this example, we have the same number 
// so their type "Number data type" and "Value" "1" are equal 
// console.log(1 === 1);
// This evaluates to 'false' 'cause we are comparing a string to a number. 
// console.log('1' === 1);


// Lose Equality Operator 
// Lose Equality Operator behaves differently. 
// Note 1: Comparing 1 to 1 returns true
// Note 2: Comparing the string '1' to the number 1 also returns true
// when doing lose equality (==). 
console.log(1 == 1);
console.log('1' == 1);
// Note 3; rememeber that values such as number 1 evaluates to true. 
console.log(true == 1);
console.log(1 == 1);

// Remember that the strict equality operator ensures that both 
// values have the same type and the same value 

// The lose equality operator doesn't care about the type matching,
// if the types don't match, lose equality will convert one of the
// types and then does the comparison. Then it will only check if the 
// values are equal. 

// Best practice recommend to use the strict equality operator '==='
// because it's more percise and accurate. 