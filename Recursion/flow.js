/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: flow
Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

Input 1: {Number} input - number flowing through all functions
Input 2: {Array} funcArray - array of functions to pass input through
Output: {Number} - final output of final function

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function flow(input, funcArray, i = 0) {
    // base case
    if (!funcArray[i]) return input;
    return flow(funcArray[i](input), funcArray, i + 1)
}
// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
console.log(flow(2, [])); // -> 2
console.log(flow(2, [multiplyBy2])); // -> 4

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function flow(input, funcArray) {
    // base case
    //if funcArr length is falsey
    if (!funcArray.length) return input;
    //return input 
    //recusive case
    //return the result of calling flow passing in result of calling funcArr[0] with input
    //funcArray sliced from 1
    const newInput = funcArray[0](input);
    return flow(newInput, funcArray.slice(1));

}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions1 = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions1)); // -> -7
console.log(flow(2, [])); // -> 2
console.log(flow(2, [multiplyBy2])); // -> 4
