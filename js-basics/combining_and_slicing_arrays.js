// Combining and Slicing Arrays: 

const first = [{ id: 1 }];
const second = [4, 5, 6];

// concat() method returns a new array
const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice();

console.log(combined);
console.log(slice);

