// Challenge: pluralize
// Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. 
//For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

// The body of the pluralize function should employ a single for loop that pluralizes each string in the input array. 

// Input : an array of the strings
// Outpt : array with 's' on each element;

// create function pluralize takes an array of strings
// const pluralize = (array) => {
//     // declare a newArr set to empty []
//     let newArr = [];
//     // iterate thru array input on each element by using a for loop
//     for (let i = 0; i < array.length; i++) {
//         // for each element of array we will add 's' to each element
//         newArr.push(`${array[i]}s`)
//     }
//     // return new array
//     return newArr;
// }

// ADD CODE HERE

const pluralize = (array) => array.map(e => `${e}s`)

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
