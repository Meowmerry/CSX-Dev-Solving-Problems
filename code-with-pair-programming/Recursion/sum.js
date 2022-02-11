/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge 3
Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.
*/

/* ========================== SOLUTION 1 ======================================
================================================================================ */
function sum(array) {
    // base case 
    //: if array.length === 1 return the first element;
    //: if array.length < 1 return 0;
    if (array.length === 1) return array[0];
    if (!array.length) return 0;
    // recursive case : array.pop() + sum(array)
    return array.pop() + sum(array);

    /* 4 + sum([1,2,3])
            | 
                3+ sum([1,2])
                    |
                        2+ sum([1])
                        | 
                            1
    */
};

console.log(sum([1, 1, 1])); // -> returns 3
console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

/* ========================== SOLUTION 2 ======================================
================================================================================ */
function sum(array) {
    // base case 
    //: if array.length === 1 return the first element;
    //: if array.length < 1 return 0;
    if (array.length === 1) return array[0];
    if (!array.length) return 0;
    // recursive case : array.pop() + sum(array)
    return array.shift() + sum(array);

    /* 4 + sum([1,2,3])
            | 
                3+ sum([1,2])
                    |
                        2+ sum([1])
                        | 
                            1
    */
};

console.log(sum([1, 1, 1])); // -> returns 3
console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21


/* ========================== SOLUTION 2  ======================================
================================================================================ */
function sum(array, total = 0) {
    // base case :
    if (!array.length) return total;
    // recursive case :
    return sum(array.slice(1), total + array[0]);
}
console.log(sum([1, 1, 1])); // -> returns 3
console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function sum(array) {
//    if(array.length === 1) return array[0]
//    if(!array.length) return 0;
//    return array.pop() + sum(array)
}
console.log(sum([1, 1, 1])); // -> returns 3
console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21
