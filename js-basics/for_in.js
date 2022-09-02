// for
// while 
// do-while 

// for-in loop:
// for-in loop is used to iterate over the properties of an object 
// or elements in an array. 

const person = {
    name: 'Bob',
    age: 7
};

// Let's say we want to display all the properites of the person
// object, that's were we use the for-in loop. 
for (let key in person)
    console.log(key, person[key]);

// There are two ways to access properties of an object:
// 1. Dot Notation 
// person.name
// // 2. Bracket Notation 
// // We use the bracket notation when we don't know the property we 
// // are going to access ahead of time. 
// person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index])

// for-of loop