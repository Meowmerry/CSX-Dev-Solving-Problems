/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: arrToObj
Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.
 */
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array of string, callback function
// output : an object;
// create a function that takes array of string and a callback function;
function arrToObj(array, callback) {
    // iterate thru array use a reduce;
    return array.reduce((outputObj, currentValue) => {
        // invoke a callback function by passing currentValue and assign to outputObj;
        outputObj[currentValue] = callback(currentValue)
        // return outputObj; 
        return outputObj;
    }, {});// init outputObj set to empty object;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

// function arrToObj(array, callback) {
//     const outputObj = {};
//     for (let i = 0 ; i < array.length ; i += 1){
//       outputObj[array[i]] = callback(array[i])
//       }
//     return outputObj;
//   }
//   const arrOfStrings = ['beer', 'glue'];
//   const capitalize = str => str.toUpperCase();
//   console.log(arrToObj(arrOfStrings, capitalize)); //{ beer: 'BEER', glue: 'GLUE' }

// function arrToObj(array, callback) {
//     const outputObj = {};
//     array.forEach(element => {
//         outputObj[element] = callback(element)
//     });
//     return outputObj;
// }
// const arrOfStrings = ['beer', 'glue'];
// const capitalize = str => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); //{ beer: 'BEER', glue: 'GLUE' }