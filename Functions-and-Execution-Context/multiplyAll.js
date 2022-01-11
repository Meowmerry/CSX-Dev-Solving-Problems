

/* Challenge: multiplyAll
Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result. */
/* ========================== SOLUTION 1  ======================================
================================================================================ */


// ADD CODE HERE 
// declare a function multiplyAll acceptes the unknown number of interger
// function multiplyAll(...nums) {
//     // declear a variable result to store value of multiply, set initial to 1;
//     let result = 1;
//     // use a for loop through a number of input numbers
//     for (let i = 0; i < nums.length; i++) {
//         // multiply each element of input number and re-assign the result;
//         result *= nums[i]
//     }
//     // return result
//     return result;
// }

// // Uncomment these to check your work!
// console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375


// ADD CODE HERE 
// Input : that takes an unknown number of integer arguments
// Output : nums
// create a function multiplyAll takes a unknown number
const multiplyAll = (...nums) => {
    // declare a variable multiply = 1;
    let multiply = 1;
    // use a for loop iterate thru each nums and multply 
    for (let i = 0; i < nums.length; i++) {
        multiply *= nums[i];
    }
    // return multiply
    return multiply;
}

//Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

/* ========================== SOLUTION 2  ======================================
================================================================================ */

const multiplyAll1 = (...arr) => {
    return arr.reduce((acc, curr) => {
        return acc * curr;
    }, 1)
}
console.log(multiplyAll1(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll1(5, 5, 5, 3)) // should log: 375

/* ========================== SOLUTION 3  ======================================
================================================================================ */


const multiplyAll2 = (...arr) => arr.reduce((acc, curr) => acc * curr, 1)
console.log(multiplyAll2(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll2(5, 5, 5, 3)) // should log: 375