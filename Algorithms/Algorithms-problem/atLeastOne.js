/*
Create a function 'atLeastOne' that takes in two inputs (an array and a callback function).
The callback function will return a boolean value.

The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then 'atLeastOne' should return true. Otherwise it should return false.
*/
/* ================== SOLUTION  1 ========================= */
const atLeastOne = (arr, cb) => arr.reduce((acc, curr) => cb(curr) ? acc = true : acc, false);

const isOdd = n => n % 2 !== 0;
console.log(atLeastOne([1, 2, 3, 4], isOdd)) // true
console.log(atLeastOne([2, 2, 6, 4], isOdd)) // false
console.log(atLeastOne([11, 5, 3, 4], isOdd)) // true

/* ================== SOLUTION  2 ========================= */
const isOdd1 = n => n % 2 !== 0;
const atLeastOne1 = (array, callback) => array.some(el => callback(el));

console.log(atLeastOne1([1, 2, 3, 4], isOdd1)) // true
console.log(atLeastOne1([2, 2, 6, 4], isOdd1)) // false
console.log(atLeastOne1([11, 5, 3, 4], isOdd1)) // true

/* ================== SOLUTION  3 ========================= */
const greaterThanFive = num => num > 5;
const atLeastOne2 = (array, cb) => array.some(greaterThanFive);

console.log(atLeastOne2([1, 2, 3, 4], greaterThanFive)) // false
console.log(atLeastOne2([1, 2, 3, 4, 5, 6], greaterThanFive)) // true
console.log(atLeastOne2([6, 7, 8, 9, 10], greaterThanFive)) // true
