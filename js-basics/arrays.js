// [] square brackets are what we call array literals and they indicate
// an empty array. 
// This line is creating an named 'selectedColors'
let selectedColors = ['red', 'blue'];
// Rememeber that JavaScript is a dynamic langauge. So the type of variables
// can change at run time. 
// Note 1; The length of the arrays and types of the arrays are dynamic in 
//          JavaScript, meaning they can change. 
// Note 2; the type of objects in arrays are dynamic. 
//          The length of arrays in javascripts are also dynamic 
// Note 3; Technically arrays are dynamic type in JavaScript, arrays are objects
//          in JavaScripts

// this line will expand the 'selectedColor' array
// now we have an array with three elements. 
selectedColors[2] = 'green';

// array has a property named 'length' that returns the number of elements in
// in the array
console.log(selectedColors.length);

// Note 4; Array is a data structure that we use to represent a 
// list of items. 
