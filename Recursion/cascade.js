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
    // print out of input number
    console.log(number)
    // base case : 
    // (1) check if input doesn't positive interger , return nothing
    if (!Number.isInteger(number)) return;
    // (2) check if input less than 10 return nothing
    if (number < 10) return;
    // recursive case : call cascade recursivly and passed in number and slice by 0 and -1
    // check to be Number and Sting
    cascade(Number(String(number).slice(0, -1)))
    console.log(number);
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

/* ========================== SOLUTION 3  ======================================
================================================================================ */
