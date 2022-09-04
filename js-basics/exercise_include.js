// Exercise includes
// the 'includes()' method allows us to check if a given element 
// exists in the array. 
// Write a function like the 'inlcudes()' mtehod, 
// Create a function called 'includes()' that takes an 'array'
// and 'search elements' if the 'search element' is in the array
// return 'true' 'otherwise' return 'false'

const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
};
console.log(includes(numbers, -1))

