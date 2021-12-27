/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: Scoping
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // 1
willCounter(); // 2 
willCounter(); // 3

jasCounter();  // 1 
willCounter();  // 4