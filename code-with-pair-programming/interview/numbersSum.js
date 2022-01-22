// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
/* 
Input : number
Output : number
declare a functionn that takes array
iterate array use a reduce,
    check if typeof current element is a number 
    reassign to the result
    return result
*/
const numbersSum = (arr) => {
    return arr.reduce((acc, curr) => {
        if (typeof curr === 'number') {
            acc += curr
        }
        return acc;
    }, 0)
}
// Examples
console.log(numbersSum([1, 2, "13", "4", "645"])) //➞ 3

console.log(numbersSum([true, false, "123", "75"])) //➞ 0

console.log(numbersSum([1, 2, 3, 4, 5, true])) //➞ 15