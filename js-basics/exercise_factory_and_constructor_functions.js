// Initailzie an address object first using a factory 
// function and then using a constructor function. 
// const address = {
//     street: '123 Yellow',
//     city: 'Denver',
//     zipCode: 90000
// };

// Factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = createAddress('123 Yellow', 'Denver', '900000');
console.log(address);

// constructor function
function InitWithConstructorFunc(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

let address2 = new InitWithConstructorFunc('123 Yellow', 'Denver', '90000');


