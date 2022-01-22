/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.
Example:

*/
const countTimes = (arr, num) => {
    return arr.reduce((acc, curr) => {
        if (curr === num) {
            acc += 1;
        }
        return acc;
    }, 0)
}
// console.log(countTimes([1, 8, 9, 9, 10], 9)) //-> 2
// console.log(countTimes([1, 8, 1, 1, 10], 1)) //-> 3
// console.log(countTimes([10, 10, 9, 10, 10], 10)) //-> 4
