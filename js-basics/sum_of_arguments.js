// Create a function called 'sum()' that takes a variying 
// number of arguments and returns their sum


function sum() {
    total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total
}

sumOfAllValues = sum(4, 5, 2, 7, 9);
console.log(sumOfAllValues);