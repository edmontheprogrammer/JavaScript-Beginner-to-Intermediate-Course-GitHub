// Adding elements
const numbers = [3, 4]
// Note 1; you cannot re-assign the array numbers to something else
// since it's declared as constant, but you can modify the contents of the
// numbers array. 
// numbers = [];

numbers.push

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);