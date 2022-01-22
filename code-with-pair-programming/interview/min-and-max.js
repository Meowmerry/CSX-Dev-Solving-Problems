/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

// declare an empty array
// iterate through my array
// pull out the smallest and largest num
// push into array
// return array

function minAndMax(array) {
    let smallest = array[0];
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        } else if (array[i] > largest) {
            largest = array[i];
        }
    }
    // return result;
    return [smallest, largest];
}

console.log(minAndMax([4, 8, 15, 7])); // [4, 15]
console.log(minAndMax([1, 19, 3, 6])); // [1, 19]
console.log(minAndMax([20, 17, 14, 8])); // [8, 20]