/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 
Challenge: reduce
The function reduce takes an array and reduces the elements to a single value.

The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together. 

const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
reduce(nums, add, 0); //-> 8
Here's how it works:

The function has an "accumulator value".Its job is to keep track of the accumulated output of each loop.It starts out equal to the initialValue.
The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
The callback's return value becomes the new accumulator value.
The next loop executes with this new accumulator value.
In the example above, the accumulator begins at 0. add(0, 4) is called.The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.*/


/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array , callback function, initial value 
// output : number
// create a function reduce that takes an array, a callback, and an initial value 
const reduce = (array, callback, initialValue) => {
    // check if the first argument isArray, if not return 'The first argument should be an array'
    if (!Array.isArray(array)) return 'The first argument should be an array';
    // declear a variable accumulator set to undefined
    let accumulator;
    // check if the third arguments initialValue is defined
    if (initialValue === undefined) {
        // if underfind reassign accumulator set to array[0]
        accumulator = array[0];
        // then remove one the element from  the array using slice
        array = array.slice(1);
    } else {// otherwise, set accumulator set equal to initial
        accumulator = initialValue;
    }
    // use a for loop to iterate through array 
    for (let i = 0; i < array.length; i++) {
        // passing accumulater and current element of array to callback, and store in accumulater
        accumulator = callback(accumulator, array[i])
    }
    // return accumulater
    return accumulator;
}
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8

/* ========================== SOLUTION 2  ======================================
================================================================================ */
/* 
Input : array of number, function, initValues
Output : Number
Crete a function reduce passed all input
    create a accumulated to keep track of the accumulated output of each loop
    check if initValues is undefined, so we will set the accumulted assign to the first element of array
        then reassign the array by moving to the next element, using slice
  otherwise, reasign accumulated to initValues;
    iterated thru array use a for loop
            reassign accumulated assign to invoke a callback, with passed accumulated with current element 
  return accumulated;
*/
const reduce1 = (array, cb, initValues) => {
    let accumulated;
    if (initValues === undefined) {
        accumulated = array[0];
        array = array.slice(1)
    } else {
        accumulated = initValues;
    }
    for (let i = 0; i < array.length; i++) {
        accumulated = cb(accumulated, array[i])
        console.log(accumulated)
    }
    return accumulated;
}
const nums1 = [4, 1, 3];
const add1 = function (a, b) { return a + b; }
console.log(reduce1(nums1, add1, 0)); // should log 8