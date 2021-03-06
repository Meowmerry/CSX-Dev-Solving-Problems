/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge 1
Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
*/

/* ========================== SOLUTION 1  ====== recursive solution ===========================
============================================================================================= */
function countdown(n) {
    // base case : check if n === 0 return n;
    if (n === 0) {
        console.log(n)
        return n;
    };
    console.log(n)
    // recursive case : invoking countdown and passeing newInput;
    return countdown(n - 1)
};

console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(4));
/* ========================== SOLUTION 2 ====== recursive solution  ===========================
============================================================================================= */
// Challenge 1
function countdown(n) {
    // base case : when n === 0 return;
    if (n === 0) return;
    console.log(n);
    // recursive case : console.log(n) and will invoke countdown function passed in n - 1
    countdown(n - 1)
}


/* ========================== SOLUTION 2 ===== for loop solution =============================
============================================================================================= */
function countdown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    };
};

console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(4));

/* ========================== SOLUTION 3 ====== while loop solution ===========================
============================================================================================= */
function countdown(n) {
    let i = n
    while (n >= 0) {
        console.log(n)
        n--
    }
};

console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(4));
/* ========================== SOLUTION 4 ====== while loop solution ===========================
============================================================================================= */
function countdown(n) {
    if (n < 0) throw new Error('Please enter the positive interger');
    if (n === 0) return;
    return countdown(n - 1)
};

console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(4));


