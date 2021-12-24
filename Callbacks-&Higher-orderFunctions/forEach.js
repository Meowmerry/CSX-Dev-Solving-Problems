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


// create a function forEach that take array and callback function.
const forEach = (array, callback) => {
    // use a for loop iterate through array 
    for (let i = 0; i < array.length; i++) {
        // invoke a callback passing in the current array element 
        callback(array[i])
    }
}

// create a function map that takes array and callback as arguemnts
const map = (array, callback) => {
    // declear a newArray to store a value set to empty []
    const newArr = []
    // call forEach with passed in array and a new function with take an array element
    forEach(array, (element) => {
        // invoke the passed in  callback function with the current array element
        // add the return value by using push
        newArr.push(callback(element))
    })
    // return newArr containing the result;
    return newArr;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]