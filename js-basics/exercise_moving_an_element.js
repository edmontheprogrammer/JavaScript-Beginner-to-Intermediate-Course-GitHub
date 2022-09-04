// creating an array called numbers
const numbers = [1, 2, 3, 4];

// creating a function called move() that moves elements in an array
const output = move(numbers, 1, 2);

// printing the output to the console. 
console.log(output);

// console.error('Invalid') is a method used to create errors in JavaScript

// implementing the move() method. 
function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}