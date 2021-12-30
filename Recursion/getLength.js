/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: getLength
Get the length of an array using recursion without accessing its length property.

Input: {Array} array - array whose length is sought
Output: {Number}


/* ========================== SOLUTION 1  ======================================
================================================================================ */
function getLength(array, index = 0) {
    // base case 
    if (array[index] === undefined) return index;
    return getLength(array, index + 1);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
