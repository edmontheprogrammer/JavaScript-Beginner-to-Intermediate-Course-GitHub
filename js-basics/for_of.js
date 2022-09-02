
const person = {
    name: 'Bob',
    age: 7
};


for (let key in person)
    console.log(key, person[key]);


// for-of loop
// Starting from ES6, we have a new way to iterate over arrays
// and that is using 'for-of' loop
const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);