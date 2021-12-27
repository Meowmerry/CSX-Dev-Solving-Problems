/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: createFunctionWithInput
Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.

const sampleFunc = createFunctionWithInput('sample');
const helloFunc = createFunctionWithInput('hello');

// Now we'll call the functions we created and log the result
console.log(sampleFunc()); 
// should log 'sample' to the console
console.log(helloFunc());
// should log 'hello' to the console
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// create a function createFunctionWithInput 
// input : string 
// output : string
const createFunctionWithInput = (input) => () => input;

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// create a function createFunctionWithInput 
// input : string 
// output : string
const createFunctionWithInput1 = (input) => {
    return () => {
        return input;
    }
}
// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc1 = createFunctionWithInput1('sample');
console.log(sampleFunc1()); // should log: 'sample'
const helloFunc1 = createFunctionWithInput1('hello');
console.log(helloFunc1()); // should log: 'hello'