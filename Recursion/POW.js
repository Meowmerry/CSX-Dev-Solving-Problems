/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: POW
Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

Input 1: {Number} base - base number raised to the exponent
Input 2: {Number} exponent - exponent the base is raised to
Output: {Number} - expected value of base raised to exponent
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function pow(base, exponent) {
    // base case
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    return base * pow(base, exponent - 1);
}
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 0)); // -> 
console.log(pow(3, 5)); // -> 243   							3 * 3 * 3 * 3 * 3
console.log(pow(2, 0)); // -> 1
console.log(pow(2, 1)); // -> 2
console.log(pow(2, 2)); // -> 4

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function pow(base, exponent, product = 1) {
    // base case
    if (exponent === 0) return product;
    return pow(base, exponent - 1, product * base);
}
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 0)); // -> 
console.log(pow(3, 5)); // -> 243   							3 * 3 * 3 * 3 * 3
console.log(pow(2, 0)); // -> 1
console.log(pow(2, 1)); // -> 2
console.log(pow(2, 2)); // -> 4

/* ========================== SOLUTION 3  ======================================
================================================================================ */
// Input 1: {Number} base - base number raised to the exponent
// Input 2: {Number} exponent - exponent the base is raised to
// Output: {Number} - expected value of base raised to exponent
function pow(base, exponent, product = 1) {
    // check edge case if base and exponent input should be positive only
    if (base < 0 || exponent < 0) return `Please input the positive number only!`
    // base case:  if exponent < 1 return exponent
    if (exponent === 0) return product;
    // recursive case : call pow with passed in new input of base and exponent
    return pow(base, exponent - 1, product * base)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 2)); // -> 4
console.log(pow(2, 2)); // -> 2 // 
console.log(pow(2, 0)); // -> 1
console.log(pow(5, -1)); // -> 1

/* ========================== SOLUTION 4  ======================================
================================================================================ */
const pow = (base, exponent, product = 1) => exponent === 0 ? product : pow(base, exponent - 1, product * base)
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 2)); // -> 4
console.log(pow(2, 2)); // -> 2 
console.log(pow(2, 0)); // -> 1

/* ========================== SOLUTION 5  ======================================
================================================================================ */
const pow1 = (base, exponent, product = 1) => {
    // edge case : check if base and exponent should be positive number only;
    if (base < 0 || exponent < 0) return `Please input only positive number!`
    // base case : check if exponent is equal to 0 return product;
    if (exponent === 0) return product;
    // recursive case : call pow with will passend in new input 
    // update exponent by decress 1 and we need to pow base 
    return pow(base, exponent - 1, product * base)
}

console.log(pow1(2, 4)); // -> 16
console.log(pow1(3, 5)); // -> 243
console.log(pow1(2, 2)); // -> 4
console.log(pow1(2, 2)); // -> 2 
console.log(pow1(2, 0)); // -> 1
/* ========================== SOLUTION 6  ======================================
================================================================================ */

function pow(base, exponent, product = 1) {
    // edge case : if base and exponent input not be positive number, return `Please input only positive number!`
    if (exponent < 0 || base < 0) return 'Please input only positive number!';
    // base case : exponent is equal to 0, return product;
    if (exponent === 0) return product;
    // recursive case : call pow function and passed in the new update of exponent
    // decress exponent by 1;
    // exponent = exponent - 1; 
    // exponent --
    // return pow function with passed in new input
    return pow(base, exponent - 1, product * base);
}
// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243
console.log(pow(2, 0)) // 1
console.log(pow(2, 1)) // 2

/* ========================== SOLUTION 7  ======================================
================================================================================ */

function pow(base, exponent) {
    function powInternal(acc) {
        if (exponent === 0) return acc;
        exponent--;
        return powInternal(base * acc);
    }
    return powInternal(1);
}
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 0)) // 1
console.log(pow(2, 1)) // 2
/* ========================== SOLUTION 8  ======================================
================================================================================ */
function pow(base, exponent) {
    function powInternal(count, acc) {
        if (count === exponent) return acc;
        return powInternal(count + 1, base * acc);
    }
    return powInternal(0, 1);
}
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 0)) // 1
console.log(pow(2, 1)) // 2
/* ========================== SOLUTION 9  ======================================
================================================================================ */
function pow(base, exponent) {
    function powInternal(count, acc) {
        return count === exponent ? acc : powInternal(count + 1, base * acc);
    }
    return powInternal(0, 1);
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 0)) // 1
console.log(pow(2, 1)) // 2
/* ========================== SOLUTION 10  ======================================
================================================================================ */
function pow(base, exponent) {
    return exponent === 0 ? 1 : base * pow(base, exponent - 1);
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 0)) // 1
console.log(pow(2, 1)) // 2
/* ========================== SOLUTION 11  ======================================
================================================================================ */
function pow(base, exponent) {
    if (exponent < 0) return 1 / pow(base, -exponent);
    return exponent === 0 ? 1 : base * pow(base, exponent - 1);
}
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 0)) // 1
console.log(pow(2, 1)) // 2
console.log(pow(2, 2)) // 2
