// Write a function called divisibleByTwo which accepts an array of numbers.

// The function should return a count of how many numbers are cleanly divided by 2.

// Examples

// divisibleByTwo([3, 6, 9]) // 1
// divisibleByTwo([1, 12, 14]) // 2
// divisibleByTwo([]) // 0
// [execution time limit] 4 seconds (js)

// function divisibleByTwo(arr) {
//     let result = 0;
//     arr.forEach(ele => ele % 2 === 0 ? result += 1 : result)
//     return result;
// }
const divisibleByTwo = (arr) => arr.reduce((acc, curr) => curr % 2 === 0 ? acc += acc : acc, 0)
console.log(divisibleByTwo([3, 6, 9])) // 1
console.log(divisibleByTwo([1, 12, 14])) // 2
console.log(divisibleByTwo([])) // 0





