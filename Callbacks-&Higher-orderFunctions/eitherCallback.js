/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Previous | Next 
Challenge: eitherCallback
Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. Notice that the lines of code testing your work are using functions and an array from previous challenges. The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge. 
*/
/* ============================== SOLUTION 1 ==============================
 ================================================================================ */
function eitherCallback(callback1, callback2) {
    // return a function
    return (element, i, array) => {
        // return a the boolean representing whether either callback return true;
        return callback1(element, i, array) || callback2(element, i, array)
    }
    // return num => callback1(num) || callback2(num);
}

// Uncomment these to check your work!
function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) newArray.push(array[i]);
    }
    return newArray;
}
const arrOfNums2 = [10, 35, 105, 9];
const integerSquareRoot2 = n => Math.sqrt(n) % 1 === 0;
const over1002 = n => n > 100;
const intSqRtOrOver1002 = eitherCallback(integerSquareRoot2, over1002);
console.log(filterArray(arrOfNums2, intSqRtOrOver1002)); // should log: [105, 9]

/* ============================== SOLUTION 2 ==============================
 ================================================================================ */
function eitherCallback(callback1, callback2) {
}

function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) newArray.push(array[i]);
    }
    return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]