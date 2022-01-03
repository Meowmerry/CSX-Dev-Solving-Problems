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

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function flow(input, funcArray, index = 0) {
    // edge case : check if input not number and if array has no length return string;
    if (!typeof input === 'number' && !funcArray[index]) return `Please input number and array of function!`
    // base case : check if funcArray has no element, return input
    if (!funcArray[index]) return input;
    // recursive case :  invoking flow function, and passed newInput with update from each function call , passed funcArray, and ped index increment by 1;
    return flow(funcArray[index](input), funcArray, index + 1)
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; } // 2 * 2 -> 4 
function add7(num) { return num + 7; } // 4 + 7 ->  11
function modulo4(num) { return num % 4; }  // 11 % 4 -> 3
function subtract10(num) { return num - 10; } // 3 - 10 --> -7
const arrayOfFunctions2 = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions2)); // -> -7


/* ========================== SOLUTION 4  ======================================
================================================================================ */
function flow(input, funcArray, index = 0) {
    // edge case : check if input is not number and array is not array return 'The input should be number and array';
    if (!input && !Array.isArray(funcArray)) return 'The input should be number and array';
    // base case : check if funcArray has no element return input;
    if (!funcArray[index]) return input;
    // recursive case: 
    // return flow function with passed in 
    // (1) newInput assign to invoking funceArray on each element and passed in input;
    const newInput = funcArray[index](input)
    // (2) whole funcArray
    // (3) increment index by 1 each time it calls.
    return flow(newInput, funcArray, index + 1)
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions4 = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions4)); // -> -7

/* ========================== SOLUTION 5 FROM CSX ======================================
================================================================================ */

/* 
flow(2, [multiplyBy2, add7])
multyplyBy2(2) => 4 
flow(4,[add7])
add7(4) => 7
flow(7, [])
RETURN 7;
*/
function flow(input, funcArray) {
    // overall strategy:
    // base case : if no func in funcArray , return input;
    if (!funcArray.length) return input
    // recursive case : 
    //   invoke the first func in funcArray, using input as argument
    const newInput = funcArray[0](input)
    //   recursively call flow using output of fisrs func call as input
    //    and funcArray without first func as funcArray;
    return flow(newInput, funcArray.slice(1))
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; } // 2 * 2 -> 4 
function add7(num) { return num + 7; } // 4 + 7 ->  11
function modulo4(num) { return num % 4; }  // 11 % 4 -> 3
function subtract10(num) { return num - 10; } // 3 - 10 --> -7
const arrayOfFunctions5 = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions5)); // -> -7

/* ========================== SOLUTION 5 FROM CSX ======================================
================================================================================ */
const flow = (input, funcArray) => {

}
function multiplyBy2(num) { return num * 2; } // 2 * 2 -> 4 
function add7(num) { return num + 7; } // 4 + 7 ->  11
function modulo4(num) { return num % 4; }  // 11 % 4 -> 3
function subtract10(num) { return num - 10; } // 3 - 10 --> -7
const arrayOfFunctions6 = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions6)); // -> -7