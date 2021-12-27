/* ============================== INSTRUCTIONS ==============================
 ================================================================================   Challenge: prioritize
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second. */


/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array and callback function;
// output : newArray 
// create a function prioritize that accepts an array and a callback as agruments
const prioritize = (array, callback) => {
    // declare array1 and array2 variable set to empty []
    const array1 = [];
    const array2 = [];
    // iterate through array use a forEach
    array.forEach(ele => {
        // invoke a callback and passed in current element of array;
        if (callback(ele)) {// if the return of callback became true, then add to array1
            array1.push(ele);
        } else {// else push to array2
            array2.push(ele);
        }
    });
    // concat array1 with array to and return newArray
    return array1.concat(array2)
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const prioritize1 = (array, callback) => {
    const arr = array.filter(ele => callback(ele));
    const arr1 = array.filter(ele => !callback(ele));
    return [...arr, ...arr1]
}
// Uncomment these to check your work!
function startsWithS1(str) { return str[0].toLowerCase() === 's'; }
const tvShows1 = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize1(tvShows1, startsWithS1)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']