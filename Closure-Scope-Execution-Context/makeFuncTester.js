/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 17
Create a function makeFuncTester that accepts an array(of two - element sub - arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements(of each sub - array) being passed into the callback all yield the corresponding second elements(of the same sub - array).Otherwise, the returned function should return false.

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// Input : Array of with SubArray
// Output : closure return out of function
// Inner function : Input : callback
// Output : Boolean
const makeFuncTester = (arrOfTests) => {
    return (callback) =>
        arrOfTests.reduce((acc, curr) => {
            curr.forEach((ele) => (ele === callback(ele) ? (acc = true) : acc));
            return acc;
        }, false);
}

const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
