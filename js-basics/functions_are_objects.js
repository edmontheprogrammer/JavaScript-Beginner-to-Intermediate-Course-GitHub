// Functions are objects:

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}


// Note 1; the call() method allow us to call functions. 
Circle.call({}, 1)
// Note 2: the apply() method is exactly like the call method. 
// the 'apply()' method allow us to call a function, but instead 
// of passing all the arugments expicitly, we pass them in an 
// array
Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1); 


// Just remember that in JavaScripts functions are objects. 

