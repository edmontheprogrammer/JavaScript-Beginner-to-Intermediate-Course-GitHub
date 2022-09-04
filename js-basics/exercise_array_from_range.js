// Write a function call 'arrayFromRange()', this function should take
// two parameters 'min' and 'max', 
// the function should create an array with a range of values 
// from 'min' to 'max', the two parameters 

function arrayFromRange(min, max) {

    let numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i)
    }
    return numbers
}

const myArray = arrayFromRange(-10, -4);
console.log(myArray); 