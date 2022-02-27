/*
Declare a function 'isOdd' that takes one input (a number) and return a boolean indicating whether or not the number is odd.
For example, if we call 'isOdd' with an input of 3 it will return true.
*/
const isOdd = n => n % 2 !== 0;
console.log(isOdd(3)) // true;
console.log(isOdd(4)) // false;
console.log(isOdd(5)) // true;