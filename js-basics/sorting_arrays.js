// const numbers = [2, 3, 1];
// // 'sort()' method converts each element in the array to a string and 
// // then it sorts them. 
// numbers.sort();
// console.log(numbers)


// // Another method that's often compainion to the sort method is the
// // 'reverse()' method.

// numbers.reverse();
// console.log(numbers);


// Note 1: the 'sort()' method is useful when you have numbers and 
// strings in an array. But when you have objects like course objects, 
// the 'sort()' method doesn't work by default, you have to do some 
// extra work. 

// Let's say we want to sort this array by the name of courses
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScro[t' },
];

// nothing is going to happen if you call the sort() method on the 
// courses array above. 
// courses.sort();

// Note 1; the sort() takes an optional argument
courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();


    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;


});
console.log(courses);

// Note 2: Just remember that when sorting objects in some lanuages, 
// you might have to implement some extra logics to make te 
/// the sorting work propertly. For example, here we are converting
// the items we are comparing to Upper Case letter using the 
// 'toUpperCase();'