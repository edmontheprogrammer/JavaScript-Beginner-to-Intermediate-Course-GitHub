// Cloning and Object: 
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// creating an empty object called 'another' 
// const another = {};

// Creating a for-in-loop that allows us to loop over the 'circle'
// object. the body of the for-in-loop is is assigning the 
// properites or keys of the 'circle' object to the 'another'
// object. This is basically copying everything in the 'circle' 
// object to the 'another' object. 

// for (let key in circle)
//     another[key] = circle[key];

// We use the bracket notation [] to access the properites of 
// the 'circle' object.
// another['radius'] = circle['radius']; 

// console.log(another); 

// 'Object.assign()' method is anothe way to accomplish the same thing.
// The 'assign()' method takes all the contents of the 'circle' object
// and copies it into the new object '{}' on the left. 
// const another = Object.assign({
//     color: 'yellow'
// }, circle);

// console.log(another); 

// You can also use the spread operator to clone an object
const another = { ...circle };
console.log(another); 