// Address object
// Create an address object with three properties, 
// 1. street, 
// 2. city
// 3. zipCode
// Create a function called 'showAddress(address)' that takes an 
// address object and displays all the properties of this object 
// alone with their value. 

const address = {
    street: '123 Yellow',
    city: 'Denver',
    zipCode: 90000
};

function showAddress(address) {
    for (key in address)
        console.log(key, address[key]);
}

showAddress(address); 