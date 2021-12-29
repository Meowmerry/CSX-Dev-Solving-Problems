/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: delay
Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : number and callback function;

// create a function that accepts callback function and the number
// input : function and number
// output : number
const delay = (callback, number) => {
    // closure need to return function 
    return () => {
        // call setTimeout and passed in callback and number to wait;
        setTimeout(callback, number)
    }
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second


/* ========================== SOLUTION 2  ======================================
================================================================================ */
// input : number and callback function;

// create a function that accepts callback function and the number
// input : function and number
// output : number
const delay1 = (callback, number) => () => setTimeout(callback, number)


let count1 = 0;
const delayedFunc1 = delay1(() => count1++, 1000);
delayedFunc1();
console.log(count1); // should print '0'
setTimeout(() => console.log(count1), 1000); // should print '1' after 1 second