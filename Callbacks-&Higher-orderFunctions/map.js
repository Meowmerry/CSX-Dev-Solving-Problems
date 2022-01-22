/* ============================== INSTRUCTIONS ==============================
 ================================================================================ Challenge: map
Create a function subtractTwo that accepts a number and returns that number minus 2.
Then create a function map that takes two inputs - an array of numbers (a list of numbers)
a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method. 
map([3, 4, 5], subtractByTwo); //-> [1,2,3]
subtractByTwo(10); //-> 8
subtractByTwo(12); //-> 10 */


/* ========================== SOLUTION 1  ======================================
================================================================================ */
//function subtractTwo -- 
//Input: num
//Output num - 2

// create a function subtractTwo that accept a number then return that number minus 2;
const subtractTwo = (num) => num - 2;

//function map -- Input: array, callback  -- Output: modifiedArray
// create a function map that take array of number and callback function;
const map = (array, callback) => {
    // use a for loop iterate thre the input array
    for (let i = 0; i < array.length; i++) {
        // apply the callback and store the result in the array;
        array[i] = callback(array[i]);
    }
    // return array
    return array;
}
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

/* ========================== SOLUTION 2  ======================================
================================================================================ */

/* create a function subtractTwo that accecpt number and return number -2; */
const subtractTwo2 = (num) => {
    return num - 2;
}
/*
create function map
Input : Array of number, callback function 
Output : Array of number
    iterate thru arr input use a reduce, 
          set output with empty array [] , curr element each current from array
              invoke callback passed current element and reassign the output by pushing element to it;
          return init
*/
const map2 = (arr, callback) => {
    return arr.reduce((output, curr) => {
        output.push(callback(curr))
        return output;
    }, [])
}
console.log(typeof subtractTwo2); // should log: 'function'
console.log(typeof map2); // should log: 'function'
console.log(map2([3, 4, 5], subtractTwo2)); // should log: [ 1, 2, 3 ]