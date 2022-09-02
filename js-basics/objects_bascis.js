// objects are collections of key value pairs. 
// The purpose of an object is to group related variables and 
// have functions that can operate on object's properties. 

// let radius = 1;
// let x = 1;
// let y = 1;
// function draw() { }
// function move() { }

// This is object-oriented programming (OOP) in JavaScript. 
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

// calling the draw() function or method of the circle object
circle.draw();
