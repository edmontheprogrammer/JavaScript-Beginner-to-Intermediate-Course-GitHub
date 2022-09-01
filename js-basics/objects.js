// Reference Types:
// In reference types category, we have objects, arrays and functions
// What is an object? An objectin JavaScript and other programming langauges
// is like an object in real life like a Person. 

// let name = 'Bob';
// let age = 30;

// Creating a person object using an object literal 
// person object with two properties: name and age 
let person = {
    name: 'Bob',
    age: '7'
};

// There are two ways to work with the person object
// 1. Dot notation 
person.name = 'John';

// 2. The other way to access properties is using bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);