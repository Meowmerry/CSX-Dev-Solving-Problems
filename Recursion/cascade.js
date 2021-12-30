/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: cascade
Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!

cascade(12345) should print

12345
1234
123
12
1
12
123
1234
12345

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */

function cascade(number) { //111
    // base case 
    if (!Number.isInteger(number)) return;
    console.log(number) // 111, 11, 1
    if (number < 10) return;
    // recursion case
    cascade(Math.floor(number / 10)); //
    console.log(number) // 11, 111
}

/* !Number.isInteger(number) */
//11 / 10
//1
//Math.floor(number / 10)
cascade(123456);
/* ========================== SOLUTION 2  ======================================
================================================================================ */
function cascade(number) { //111
    // base case 
    if (!Number.isInteger(number)) return;
    console.log(number) // 111, 11, 1
    if (number < 10) return;
    // recursion case
    cascade(Number(String(number).slice(0, -1))); //
    console.log(number) // 11, 111
}
cascade(123456);