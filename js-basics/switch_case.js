let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;


    case 'moderator':
        console.log('Moderator User');
        break;
    // if none of the cases above don't match, execute the default 
    // statment. The 'break' statment is optional for the
    // 'default' case 
    default:
        console.log('Unknown User')
}

// Note 1; with switch and case, we can compare the value of a 
// variable against a bunch of other values.  
// They don't have to be strings they can be numbers, 
// or even booleans.

// Note 2; You can implement the same logic using if-else statment 
if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');

