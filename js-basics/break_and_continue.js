// 'break' and 'continue' are two keywords that can change how the
// loops behave. These keywwords apply to all the loops we learned

let i = 0;
// outputs numbers from 0 to 10
while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// Note 1; the 'continue' keyword is a legacy way of writing code. 
// You won't be using the 'continue' keyword that often in production. 
// 'continue' keyword forces the execution of the code to jump to 
// the top of the loop