// In JavaScript we have two conditional statments
// if else statment and switch statments

// Hour 
// If hour is between 6am and 12pm: display "Good morning!" 
// If it is between 12pm and 6pm: display "Good afternoon!"
// Otherwise: display "Good eveninng!"

let hour = 13;
if (hour >= 6 && hour < 12)
    console.log('Good monring');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!');