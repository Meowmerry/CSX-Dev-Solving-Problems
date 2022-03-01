/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: forEach
Recreate the built in array method, forEach - Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.

Create a variable named delays and assign to it an array with the numbers 200, 500, 0, and 350 (in that order).

Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).

Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// crete forEach function 
// inputs : array adn callback

const forEach = (arr, cb) => {
    // iterate throught arr and invoke callback with each element and it's index passed in
    for (let i = 0; i < arr.length; i += 1) {
        cb(arr[i], i)
    }
}

// create delays arr to hold 200,500,0,300
const delays = [200, 500, 0, 300];
// crete function delayLog 
// inputs : number of ms called delayTime, and index i

const delayLog = (delayTime, i) => {
    // wait delayTime number of ms and then console log 'printing element i'
    // use setTimeout
    // arguments : callback that console.logs out string
    // delayTime
    setTimeout(() => console.log(`printing element ${i}`), delayTime)

}
// useing forEach iterate over delays and invoke delayLog on each element
forEach(delays, delayLog);