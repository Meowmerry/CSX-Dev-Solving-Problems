/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: createFunction
Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

const myFunction = createFunction();
   Let's call the function we created and log its return value
console.log(myFunction()); //should log: 'hello world'
When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// create a function that created and returns a function
const createFunction = () => () => `hello world`;
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'


/* ========================== SOLUTION 2  ======================================
================================================================================ */
// create a function that created and returns a function
const createFunction1 = () => {
    return () => {
        return 'hello world'
    }
}
const myFunction1 = createFunction1();
console.log(myFunction1()); //should log: 'hello world'