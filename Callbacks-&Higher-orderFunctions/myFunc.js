/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 
Challenge 23
Define a function myFunc that takes an array and a callback. 
myFunc should pass each element from the array (in order) into the callback. 
If the callback returns true, myFunc should return the index of the current element. 
If the callback never returns true, myFunc should return -1;*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
const myFunc = (arr,cb) => arr.reduce((acc, curr ,i) => cb(curr) ? acc = i : acc, -1);

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function myFunc2(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

const numbers2 = [2, 3, 6, 64, 10, 8, 12];
const evens2 = [2, 4, 6, 8, 10, 12, 64];

function isOdd2(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
console.log(myFunc2(numbers2, isOdd2)); // Output should be 1
console.log(myFunc2(evens2, isOdd2)); // Output should be -1


/* ========================== SOLUTION 1  ======================================
================================================================================ */
function myFunc3(array, callback) {
  return array.reduce((acc, curr, idx) => {
    if (callback(curr)) acc = idx;
    return acc;
  }, -1);
}
const numbers3 = [2, 3, 6, 64, 10, 8, 12];
const evens3 = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(myFunc3(numbers3, isOdd)); // Output should be 1
console.log(myFunc3(evens3, isOdd)); // Output should be -1