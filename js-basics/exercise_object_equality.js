// Create two functions: Once is called areEqual() that allows us to 
// pass two address objects and check to see if the two objects are 
// equal. 

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function areEqual(address1, address2) {

    console.log(JSON.stringify(address1) === JSON.stringify(address2));
}

areEqual(address1, address2);

// Create another function called "areSame()" that tell us if address1
// and address2 are pointing to the the exact same object. 
function areSame(address1, address2) {
    console.log(address1 === address2);
}

areSame(address1, address2);

