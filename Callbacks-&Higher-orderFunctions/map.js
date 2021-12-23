// ADD CODE HERE
// Challenge: map

// Create a function subtractTwo that accepts a number and returns that number minus 2.
// Then create a function map that takes two inputs - an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

// map([3,4,5], subtractByTwo); //-> [1,2,3]
// subtractByTwo(10); //-> 8
// subtractByTwo(12); //-> 10      

//function subtractTwo -- 
//Input: num
//Output num - 2

//create function subtractTwo and num  -= 2
const subtractTwo = (num) => num -= 2;

//function map -- Input: array, callback  -- Output: modifiedArray
//for loop to iterate to array
//for each element call callback and it should equal the result of callback 
//return array
const map = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
    }
    return arr;
}

const ourMap = (arr) => arr.map(e => e - 2)
console.log(ourMap([3, 4, 5])) //[ 1, 2, 3 ]

// ADD CODE HERE

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(mmap([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]