/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// Input : Array of string
// Output : function of the string on each element from the input Array
// create a function, that accepts name array.
function rollCall(names) {
    // declare index assign to 0 
    let index = 0;
    // return function that will do something with array input
    return () => {
        // check if array has no lenght return 'Everyone accounted for'
        // otherwise, call each element of array and return current element
        if (index === names.length) {
            return 'Everyone accounted for';
        } else if (names.length) {
            return names[index++];
        }
    }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
console.log(rollCaller()) // => should log 'Victoria'
console.log(rollCaller())  // => should log 'Juan'
console.log(rollCaller())  // => should log 'Ruth'
console.log(rollCaller())  // => should log 'Everyone accounted for'

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// Input : Array of string
// Output : function of the string on each element from the input Array
// create a function, that accepts name array.
function rollCall1(names) {
    let index = 0;
    return () => {
        if (index === names.length) {
            return 'Everyone accounted for'
        }
        return names[index++]
    }
}

// /*** Uncomment these to check your work! ***/
const roll = rollCall1(['Victoria', 'Juan', 'Ruth'])
console.log(roll()) // => should log 'Victoria'
console.log(roll())  // => should log 'Juan'
console.log(roll())  // => should log 'Ruth'
console.log(roll())  // => should log 'Everyone accounted for'

