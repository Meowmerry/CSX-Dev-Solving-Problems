/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: Objects - Evaluating Keys
You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
};
let total = 0;
// ADD CODE HERE
for (let key in sumMe) {
    if (typeof sumMe[key] === 'number') {
        total += sumMe[key]
    }
}
