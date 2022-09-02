// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Functions: 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Constructor Function
// Note 1; 'this' is a keyword that's referencing the current object. 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// 'new' operator creates an empty JavaScript object, const x = {}
// then it will set the 'this' keyword to the empty object
// then it will return the object from the function. 
const circle = new Circle(1);