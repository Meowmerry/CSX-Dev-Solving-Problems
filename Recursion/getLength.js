/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: getLength
Get the length of an array using recursion without accessing its length property.

Input: {Array} array - array whose length is sought
Output: {Number}


/* ========================== SOLUTION 1  ======================================
================================================================================ */
function getLength(array, index = 0) {
    // base case : check if element is undefined
    if (array[index] === undefined) return index;
    return getLength(array, index + 1);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function getLength(array, index = 0) {
    // base case : check if element is undefined
    if (!(index in array)) return index
    // recursive case : invoking a function passed array and index with new update then return
    return getLength(array, index + 1);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, undefined, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0


/* ========================== SOLUTION 3  ======================================
================================================================================ */
function recurGetLength(array, index = 0) {
    // base case : if index not in array
    if (!(index in array)) {
        return index;
    }
    return recurGetLength(array, index + 1); // 1 
}
console.log(recurGetLength([1])); // -> 1
console.log(recurGetLength([1, 2])); // -> 2
console.log(recurGetLength([1, undefined, 3, 4, 5])); // -> 5
console.log(recurGetLength([])); // -> 0
const test = [1];
test[100] = [1];
console.log(recurGetLength(test));

/* ========================== SOLUTION 4  ======================================
================================================================================ */
function getLength(array, index = 0) {
    // base case : check if element is undefined
    if (!array.hasOwnProperty(index)) return index
    // recursive case : invoking a function passed array and index with new update then return
    return getLength(array, index + 1);
}
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, undefined, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

/* ========================== SOLUTION 5  ======================================
================================================================================ */

function getLength(array, index = 0) {
    if (!array.hasOwnProperty(index)) {
        return index;
    }
    return getLength(array, index + 1);
}
function arrayNomalizedHelper(array) {
    let lastIndex;
    for (let i in array) {
        lastIndex = +i
    }
    const newArray = new Array(lastIndex + 1 || 0).fill(1);
    return getLength(newArray)
}
// To check if you've completed the challenge, uncomment these console.logs!
console.log(arrayNomalizedHelper([1])); // -> 1
console.log(arrayNomalizedHelper([1, 2])); // -> 2
console.log(arrayNomalizedHelper([1, , 3, 4, 5])); // -> 5
console.log(arrayNomalizedHelper([])); // -> 0
const test = [1];
test[100] = [1];
console.log(arrayNomalizedHelper(test))

const arr = [1, 2, 30, 4, 'ccc', 5, null]
console.log(arr.hasOwnProperty(5)) // check by passed index postion, if have in array will be true
console.log(arr.hasOwnProperty(7)) // false becasue index position 7 not exists
