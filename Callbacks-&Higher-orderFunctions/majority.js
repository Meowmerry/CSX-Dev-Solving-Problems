/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 
 
Create a function majority that accepts an array and a callback.The callback will return either true or false.majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true.If the number of true returns is equal to the number of false returns, majority should return false.
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input: array , callback
// output : boolean true or false
// create a function that takes an array and callback as arguments;
const majority = (arr, callback) => {
    // declare a variable countTrue to store value true, assign to 0;
    let countTrue = 0;
    // declare a variable countFalse to store value false, assign to 0;
    let countFalse = 0;
    // iterate throgh array use a forEach.
    arr.forEach(num => {
        // determined by invoking a callback and pass current element 
        if (callback(num)) {
            // if the return are true, reassign countTrue by add 1 to it, 
            countTrue++;
        } else {
            // else if the return are false, reassing countFalse by add 1 to it;
            countFalse++;
        }
    });
    // determined countTrue and countFalse, if are not equal, return true.
    if (countTrue !== countFalse) {
        return true;
    } else {
        // else return false;
        return false;
    }
}
// Uncomment these to check your work!
const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


/* ========================== SOLUTION 2  ======================================
================================================================================ */
const majority1 = (arr, callback) => {
    // declare a variable result, set to array.reduce to determined 
    // array.reduce will accepts two argument, // currentValue to check 
    const result = arr.reduce((accumulator, currentValue) => {
        // invoke callback and pass in currentValue 
        // if return are true, add 1 to accumulator, else return accumulator
        //callback(curr) ? acc += 1 : acc
        return callback(currentValue) ? accumulator += 1 : accumulator
    }, 0);// initial accumulator to 0 for counting on each element, 
    // use a result variable to check
    // result is greater then array.length devide 2 then return ture, otherwish return false;
    return result > arr.length / 2 ? true : false;
}
// Uncomment these to check your work!
const isOdd1 = function (num) { return num % 2 === 1; };
console.log(majority1([1, 2, 3, 4, 5], isOdd1)); // should log: true
console.log(majority1([2, 3, 4, 5], isOdd1)); // should log: false

/* ========================== SOLUTION 3  ======================================
================================================================================ */
const majority3 = (arr, callback) => {
    let countTrue = 0;
    let countFalse = 0;
    return arr.reduce((acc, curr) => {
        if (callback(curr)) countTrue += 1;
        else countFalse += 1;
        countFalse < countTrue ? acc = true : acc;
        return acc;
    }, false)
}

const isOdd3 = function (num) { return num % 2 === 1; };
console.log(majority3([1, 2, 3, 4, 5], isOdd3)); // should log: true
console.log(majority3([2, 3, 4, 5], isOdd3)); // should log: false