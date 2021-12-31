/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge 3
Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.
*/

/* ========================== SOLUTION 1  ======================================
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
