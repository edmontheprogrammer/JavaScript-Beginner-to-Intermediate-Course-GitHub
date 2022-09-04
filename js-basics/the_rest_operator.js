// The Rest Operator: '...args'
// In modern JavaScript if you want to have a function with variying 
// number of parameters, you can use the rest operator. 

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));