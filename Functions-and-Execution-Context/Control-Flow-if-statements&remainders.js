/* Challenge: Control Flow - if statements & remainders
Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd. */

// ADD CODE HERE

// Uncomment these to check your work!
// console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
// console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
// ADD CODE HERE
// create a function iLoveEvenNumbers that takes a number as argument 
// input : number
// output : string
// determine if input is even number we will return a string 'Oh Yeah Evens!' 
// otherwise, will return 'I am too normal for odd numbers'
const iLoveEvenNumbers = (number) => {
    if (number % 2 === 0) {
        return 'Oh Yeah Evens!';
    } else {
        return 'I am too normal for odd numbers';
    }
}
// Uncomment these to check your work!
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
