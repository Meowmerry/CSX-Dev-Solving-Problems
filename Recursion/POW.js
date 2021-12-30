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