const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 4]);

console.log(output);

function except(array, excluded) {
    data = [];
    for (let element of array)
        if (!excluded.includes(element))
            data.push(element)
    return data;
}