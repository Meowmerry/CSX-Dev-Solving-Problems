/*Create a function ‘screen’ that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When ‘screen’ is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. 
The ‘screen’ function will return that new array.

For example, if we were to call ‘screen’ and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to ‘screen’

In : Array and Callback
Out : New Array

*/

const screen = (arr, callback) => arr.reduce((acc, curr) => (callback(curr) ? acc.push(curr) : acc, acc), []);
const isEven = (num) => num % 2 === 0;
console.log(screen([1, 2, 3, 4, 5, 6], isEven)) // [2, 4, 6]