// Try and Catch: 

const person = {
    firstName: 'Bob',
    lastName: 'Tim',
    set fullName(value) {

        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {

    person.fullName = '';
}
catch (e) {
    alert(e);
}

console.log(person);

// Note 1; when we throw an exception, the lines below the throw 
// exception statment is not executed, the control flow will jump 
// out of the method, and then the control will move to the catch block. 
// The catch block will catch the exception and do something with it. 
// This is the basic of error handling in JavaScript.