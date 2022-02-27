/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
'largestSwap' should return a boolean.
For example, if 57 is our our input, we should return false because swapping the digits gives us 75, and 75 > 57.
Furthermore, if our input is 61 'largestSwap' should return true because swapping the digits gives us 61 and 61 > 16.

Input : Number
Output : Boolean

*/

const largestSwap = (num) => {
    let newNum = String(num).split('').reverse().join('');
    return num > newNum ? true : false
}

const largestSwap2 = (num) => String(num).split('').reverse().join('') < num ? true : false;

const largestSwap3 = (num) => num > num % 10 * 10 + Math.floor(num / 10);

console.log(largestSwap(57)) // false;
console.log(largestSwap(61)) // true;
console.log(largestSwap(31)) // true;