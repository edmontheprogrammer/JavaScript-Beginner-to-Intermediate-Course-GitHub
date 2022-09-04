// The 'this' keyword in javascript.
// What is 'this' ? 
/*
    'this' references the 'current object' that is executing the 
    current function.  
*/

// method -> 'this' reference that object itself 
// function that's not part of an object ->
// then 'this' references global object (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

// video.stop = function () {
//     console.log(this);
// };

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');