
/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 4
Write a recursive function isPrime that determines if a number is prime and returns true if it is.

/* ========================== SOLUTION 1  ======================================
================================================================================ */
const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (!(num % 2)) return false;
    return isPrimeRecursive(num, 3, Math.floor(Math.sqrt(num)));
}
const isPrimeRecursive = (num, divisor, max) => {
    if (divisor > max) return true;
    if (!(num % divisor)) return false;
    return isPrimeRecursive(num, divisor + 2, max);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


/* ========================== SOLUTION 1  ======================================
================================================================================ */
function isPrime1(num, div = 2) {
    if (num < 2) return false;
    if (num === div) return true;
    if (num % div === 0) return false;
    return isPrime1(num, div + 1);
}

console.log(isPrime1(1)); //-> false
console.log(isPrime1(2)); //-> true
console.log(isPrime1(3)); //-> true
console.log(isPrime1(4)); //-> false