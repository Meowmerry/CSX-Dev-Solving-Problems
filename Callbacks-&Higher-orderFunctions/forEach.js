// Challenge: forEach
// Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. 
// forEach does not return anything. 
// Please do not use the native forEach or map method.


// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

//create function forEach -- Input: 2 parameters array, callback -- Output: no return
//for loop to iterate through array
//for each element call the callback function

const forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

//function map -- Input: array of num -- output: modified array
//call forEach function with arr and map
//return 
const map = (arr, callback) => {
    // declare a variable result = [];
    let result = []
    // forEach(arr, (ele) => {
    //     result.push(callback(ele))
    // })
    forEach(arr, function (ele) {
        result.push(callback(ele))
    })
    return result;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]