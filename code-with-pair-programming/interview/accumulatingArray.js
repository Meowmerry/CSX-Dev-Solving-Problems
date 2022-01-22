// Create a function that takes in an array and returns an array of the accumulating sum.

function accumulatingArray(arr) {
    //create new array
    if (!arr.length) return [];
    const newArray = [arr[0]]
    //iterate through array
    //i + 1 = i -1 + i
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = arr[i] += arr[i + 1];
        newArray.push(arr[i + 1])
    }
    return newArray;
}

function accumulatingArray(arr) {
    let sum = 0;
    return arr.map(num => sum += num)
}
// Examples
console.log(accumulatingArray([1, 2, 3, 4])) //➞ [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

console.log(accumulatingArray([1, 5, 7])) //➞ [1, 6, 13]

console.log(accumulatingArray([1, 0, 1, 0, 1]))// ➞ [1, 1, 2, 2, 3]

console.log(accumulatingArray([])) //➞ []
// Notes
// An empty array input should return an empty array [].