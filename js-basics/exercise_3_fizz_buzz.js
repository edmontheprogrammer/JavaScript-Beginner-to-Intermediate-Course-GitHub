
number = 'Bob';

if ((number % 5 === 0) && (number % 3 === 0))
    console.log('FizzBuzz');
else if (number % 5 === 0)
    console.log('Fizz');
else if (number % 3 === 0)
    console.log('Buzz')
else if (typeof number !== 'number')
    console.log('Not a number')
else
    console.log(number)
