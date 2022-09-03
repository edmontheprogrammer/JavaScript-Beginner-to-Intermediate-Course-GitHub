// Finding elements in an array depends on whether we stored primitive
// or reference type in an array: 
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) != -1);
console.log(numbers.includes(1)); 