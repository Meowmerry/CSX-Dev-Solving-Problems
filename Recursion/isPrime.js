
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

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function isPrime1(num, div = 2) {
    if (num < 2) return false;
    if (num === div) return true;
    if (num % div === 0) return false;
    return isPrime1(num, div + 1); // 3 % 2 
}

console.log(isPrime1(10007)); //-> false
console.log(isPrime1(2)); //-> true
console.log(isPrime1(3)); //-> true
console.log(isPrime1(4)); //-> false
console.log(isPrime1(17)); //-> true
console.log(isPrime1(173)); //-> true


/* ========================== SOLUTION 4  ======================================
================================================================================ */
/* 
Input : Number
Output : Boolean
declare a default value to div assign to 2;
edgs case : check if input is not a number, and response to user, input should be number only
base case : check if input less then div return false
base case : check if input is equal to 2 return true
base case : check if input divide by div each time, if not equal to 0, return false;
recursive case : return isPrime function and passed in 
newInput => will be input and div add by 1 
*/
function isPrime4(num, div = 2) {
    if (typeof num !== 'number') throw Error('Please input number only!');
    if (num < div) return false
    if (num === div) return true;
    if (num % div === 0) return false;
    return isPrime4(num, div + 1)
}

console.log(isPrime4(1)); //-> false
console.log(isPrime4(2)); //-> true
console.log(isPrime4(3)); //-> true
console.log(isPrime4(4)); //-> false
console.log(isPrime4(17)); //-> true
console.log(isPrime4(173)); //-> true