// Enumerating properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

// Note 1: the for-of-loop can only be used with iterables such as 
// arrays and maps. An object is not iterable in JavaScript, you 
// cannot iterate over an object using the for-of-loop. 
// But you can use 'Objects.keys()' of objects to iterate over objects 
for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('color' in circle) console.log('yes'); 