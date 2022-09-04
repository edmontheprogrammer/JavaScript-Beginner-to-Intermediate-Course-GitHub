// Arguments: 
// Note 1; every function in JavaScript has a special object called 
// 'arguments' 
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;

}

console.log(sum(1, 2, 3, 4, 5, 10)); 