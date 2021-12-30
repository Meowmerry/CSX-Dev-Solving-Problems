/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: Factorial
Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

Input: {Number} num - number whose factorial is sought
Output: {Number}


/* ========================== SOLUTION 1  ======================================
================================================================================ */
function factorial(num) { // num = 2
    //base case:
    //if num is equal to 0
    if (num === 0 || num === 1) return 1;
    //return 1
    //recursive case:
    return num * factorial(num - 1); // 2 * 1
}
// return 4 * f(3) return 3 * f(2) return 2 * f(1) return 1 
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
// create a funciton factorial accepg num as argument, 
function factorial(num, product = 1) {
    // base case : if num is equal to 0 or 1 return 1;
    if (num === 0 || num === 1) return product;
    // recusive case : calling function recursively, with the num - 1 and product * num;
    return factorial(num - 1, product * num)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function factorial(num) {
    // in base case
    if (num === 1) return num;
    // in recursive case
    return num * factorial(num - 1)
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2