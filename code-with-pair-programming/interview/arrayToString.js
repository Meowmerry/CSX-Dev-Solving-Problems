// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
    let result = '';
    arr.forEach(ele => {
        result += ele
    })
    return result;
}

// Examples
console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) //➞ "123asdAAAA"