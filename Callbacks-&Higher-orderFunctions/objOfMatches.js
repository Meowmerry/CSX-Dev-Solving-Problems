/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 
Challenge: objOfMatches
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.*/


/* ========================== SOLUTION 1  ======================================
================================================================================ */

// input : two arrays and callback function;
// output : object with key value, which value will be corresponding from callback
// create a function objOfMatches that take, two arrays and callback as arguments;
const objOfMatches = (arr1, arr2, callback) => {
    // iterates through array first arguments, accept outputValue and currentValue
    return arr2.reduce((outputValue, currentValue) => {
        // iterate through inner array which is the second argment of reduce, use a forEach
        arr1.forEach((ele) => {
            // check if, invoke a callback passing in current element is equal to currentValue
            if (callback(ele) === currentValue) {
                // reassigned the ouputValue with value element set to currentValue;
                outputValue[ele] = currentValue;
            }
        });
        // return outputValue;
        return outputValue;
    }, {}); // initail the result set to empty object
}



const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }



/* ========================== SOLUTION 2  ======================================
================================================================================ */
// declare a function objOfMatches that accepts two arrays and a callback function as arguements;
const objOfMatches1 = (arr1, arr2, callback) => {
    // declare an empty object
    const matchObj = {};
    // iterate thru array1, use a forEach;
    arr1.forEach((element, index) => {
        // check if the evaluated result of invoking our callback function passing in the current elemtn is strictly equal to its corresponding element in array 2;
        if (callback(element) === arr2[index]) {
            // save the current element as a key in the object and assign it the value of its corresponding element in array2
            matchObj[element] = arr2[index]
        }
    });
    // return matchObj;
    return matchObj;
}
const array1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const array2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser1(str) { return str.toUpperCase(); }
console.log(objOfMatches1(array1, array2, uppercaser1)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }