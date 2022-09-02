// Logical Operators
// We use logical operators to make decisions based on multiple conditions. 

// In JavaScript we have three types of logical operators
// 1. Logical And (&&)
// 2. Logical OR 
// 3. Logical NOT 

// Logical AND (&&)
// Logical AND returns TRUE if both operands are TRUE
// For example, we have two operands that are both 'true' so the 
// result of this experssion will also be 'true'. 
// console.log(true && true);

// If either side of the experssion becames 'false', the results of 
// the entire experssion will become 'false'. It doesn't matter which
// side of the experssion becames false, just one of them has to be 
// false. 
// Logical AND returns TRUE if both operands are true. 
// console.log(true && false);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

// Logical OR (||)
// Logical OR returns TRUE if one of the operands is TRUE
console.log('Eligible', eligibleForLoan);

// NOT operator (!)
let applicationRefused = !eligibleForLoan
console.log('Application Refused', applicationRefused);

