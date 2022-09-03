// Reducing an Array: 
// creating an array of numbes called 'numbers'
const numbers = [1, -1, 2, 3];

// // creating a varaible named 'sum' and initialize it to 0
// let sum = 0;

// // creating a for-loop  that loops over all the elements inside the 
// // numbers array and add all the items together and store them in 'sum'
// for (let n of numbers)
//     sum += n;

// // printing 'sum' total of elements in the numbers array. 
// console.log(sum);

// Note 1; you can accomplish the same thing using the reducing an array
// option: 'reduce()' method in the array

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); 