/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: defineFirstArg
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// create a functin defineFirstArg that accepts a function and an argument;
const defineFirstArg = (func, input) => {
    // return a function that will invoked a passed in function as argument and accept one argument
    return (...arg) => {
        // the passed func will accept at least one arguement with the passed argument of inner function
        return func(input, ...arg);
    };
};
const subtract = function (big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15


/* ========================== SOLUTION 2  ======================================
================================================================================ */
const defineFirstArg1 = (func, input) => {
    return (...args) => {
        return func(input, ...args);
    }
};
const subtract1 = function (big, small) { return big - small; };
const subFrom = defineFirstArg1(subtract1, 20);
console.log(subFrom(5)); // should log: 15


/* ========================== SOLUTION 3  ======================================
================================================================================ */
const defineFirstArg3 = (func, input) => (...arg) => func(input, ...arg);
const subtract3 = function (big, small) { return big - small; };
const subFrom3 = defineFirstArg3(subtract3, 20);
console.log(subFrom3(5)); // should log: 15