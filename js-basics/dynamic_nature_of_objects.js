// Objects in JavaScripts are dynamic, meaning once you an object 
// you can always add new properties or methods, or remove 
// existing ones. 
const circle = {
    radius: 1
};

// adding new property to the 'circle' object
circle.color = 'yellow';
circle.draw = function () { };

// you can use the 'delete' operator to delete object members
delete circle.color;
delete circle.draw;

// Note 1: 'cirle' object now has two properties: 'radius' and 'color'
// and one method named 'draw'
console.log(circle); 