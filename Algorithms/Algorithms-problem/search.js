// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr, item, index = 0) {
    //create a fxn called search
    //search for index at item in array
    if (arr[0] === item) return index;
    //if present, ret true
    //otherwise, -1
    //base case: when arr length is zero
    if (arr.length === 0) return -1
    //solve recursively
    return search(arr.slice(1), item, index + 1)
}
// Examples
console.log(search([1, 2, 3, 4], 3)) //➞ 2

console.log(search([2, 4, 6, 8, 10], 8)) //➞ 3

console.log(search([1, 3, 5, 7, 9], 11)) //➞ -1
    // Notes
    // If the item is not present, return -1.
    // The given array is ordered.