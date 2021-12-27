
/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 
 
Challenge: union
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

 */

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array of arrays
// output : array
// create a function union that takes array of arrays
const union = (arrays) => {
    // use reduce the iterate through the outer array of arrays;
    return arrays.reduce((accumulator, currentValues) => {
        // iterate through inner array use a forEach loop through currentValues
        currentValues.forEach((element) => {
            // check if current element in currentValues is not includes in accumulator then push to newArr;
            if (!accumulator.includes(element)) accumulator.push(element);
        });
        // return accumulator
        return accumulator;
    }, []); // initailize an empty array to be output;
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]



// ========================== SOLUTION 2 ======================================
// ================================================================================

const union2 = arrays => [...new Set(arrays.flat())];
const arr12 = [5, 10, 15];
const arr22 = [15, 88, 1, 5, 7];
const arr32 = [100, 15, 10, 1, 5];
console.log(union2([arr12, arr22, arr32])); // should log: [5, 10, 15, 88, 1, 7, 100]

/* ========================== SOLUTION 3  ======================================
================================================================================ */

const union1 = (arrays) => {

};

const arr11 = [5, 10, 15];
const arr21 = [15, 88, 1, 5, 7];
const arr31 = [100, 15, 10, 1, 5];
console.log(union1([arr11, arr21, arr31])); // should log: [5, 10, 15, 88, 1, 7, 100]