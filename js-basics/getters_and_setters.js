// Getters and Setters 

const person = {
    firstName: 'Bob',
    lastName: 'Tim',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }


};

person.fullName = 'John Smith';

// we use getters to access properties in an object
// we use setters to change or mutate properties in objects

console.log(person); 