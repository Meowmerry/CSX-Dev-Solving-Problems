/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: Repeater
Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

Input: {String} char
Output: {String}


/* ========================== SOLUTION 1  ======================================
================================================================================ */
// console.log('Hello, world!');
// input : string 
// output : string of repeated 5times.
function repeater(char, result = '') {
    //add default parameter result set to empty str
    // base case
    //if result length is equal to 5
    if (result.length === 5) return result;
    //return result
    // recursive case
    // return result of call to repeater passing in char and result + char
    return repeater(char, result + char); // '' + 'g' => 'g' => 'gg'
}
console.log(repeater('g'));
console.log(repeater('j'));

/* ========================== SOLUTION 1  ======================================
================================================================================ */
function repeater(char) { //'gg' 2,4,8
    // base case: if input string has a length of 5... return input string
    if (char.length === 5) return char;
    // recursive case : calling function recursively, with the input string + first char of input string 
    return repeater(char + char[0]); //'g' + 'g' => 'gg' => 'gg' + 'g'
}
console.log(repeater('g'));
console.log(repeater('j'));