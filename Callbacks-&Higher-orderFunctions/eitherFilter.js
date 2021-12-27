/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: eitherFilter
Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
function eitherFilter(array, callback1, callback2) {
    // declare a variable result set to empty array
    const result = [];
    // iterates through an array using a for loop
    for (let i = 0; i < array.length; i++) {
        // invoke a callback1 and callback2 passing in a current element array to check in if stement
        if (callback1(array[i]) || callback2(array[i])) {
            // added to result by using push method
            result.push(array[i])
        }
    }
    //return result with element
    return result;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]