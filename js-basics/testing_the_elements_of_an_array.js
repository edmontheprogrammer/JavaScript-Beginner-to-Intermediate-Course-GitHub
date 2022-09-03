// every() and some()

const numbers = [1, -1, 2, 3];

const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// The every() method checks to see if every element in a given array 
// matches the given criteria. 
// The some() method checks to see if we have at least one element 
// that matches the given criteria. 


