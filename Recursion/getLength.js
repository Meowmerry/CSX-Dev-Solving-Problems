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
function getLength(array, length = 0) {
    // base case : exit functin return length if length is length of array is 0
    if (array[0] === undefined) return length;
    // increase lenght if length of array is not 0
    length++
    // call getLength again, and pass in length
    return getLength(array.slice(1), length)
    // return end result (length)
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0


/* ========================== SOLUTION 3 ======================================
================================================================================ */
function getLength(array, index = 0) {
    // base case : check if element is undefined
    if (!(index in array)) return index
    // recursive case : invoking a function passed array and index with new update then return
    return getLength(array, index + 1);
}



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
console.log(getLength([1])); // -> 1s
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


/* ========================== SOLUTION 6  ======================================
================================================================================ */
const getLengthArr = (arr, idx = 0) => arr[idx] === undefined ? idx : getLengthArr(arr, idx + 1)
console.log(getLengthArr([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLengthArr([])); // -> 0



/* ========================== SOLUTION 7  ======================================
================================================================================ */
const getLengthArray = (arr, idx = 0) => !arr.hasOwnProperty(idx) ? idx : getLengthArray(arr, idx + 1)
console.log(getLengthArray([1])); // -> 1
console.log(getLengthArray([1, 2])); // -> 2
console.log(getLengthArray([1, 2, 3, 4, 5])); // -> 5
console.log(getLengthArray([])); // -> 0


/* ========================== SOLUTION 8  ======================================
================================================================================ */
// function getLength(array, index = 0) {
//   // base case : if array doesn't have element or element is undefined will return the number or length
//   if(!array.hasOwnProperty(index)) return index;
//   // recursive case : invoke a getLenght with passed in new Update of input
//   return getLength(array,index + 1);
// }
// const getLength = (array, index =0) => !(index in array) ? index : getLength(array, index +1);
const getLength = (array, index = 0) => !array.hasOwnProperty(index) ? index : getLength(array, index + 1);

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0


/* ========================== SOLUTION 9  ======================================
================================================================================ */
function getLength(array, length = 0) {
    // base case : exit function return lenght if lenght of array is 0;
    if (array[0] === undefined) return length;
    // increase length if lenght of array is not 0
    length++;
    // call getLenght again and pass in length
    return getLength(array.slice(1), length)
}
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0


/* ========================== SOLUTION 10  ======================================
================================================================================ */
const getLength = (array, length = 0) => array[0] === undefined ? length : getLength(array.slice(1), length + 1)
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

/* ========================== SOLUTION 10  ======================================
================================================================================ */
function getLength(array) {
    function getLengthInternal(counter) {
        if (!array[counter]) return counter;
        return getLengthInternal(counter + 1);
    }
    return getLengthInternal(0);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0 


/* ========================== SOLUTION 11  ======================================
================================================================================ */

function getLength(array) {
    function getLengthInternal(counter) {
        if (!array.hasOwnProperty(counter)) return counter;
        return getLengthInternal(counter + 1);
    }
    return getLengthInternal(0);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0 

/* ========================== SOLUTION 12  ======================================
================================================================================ */
function getLength(array) {
    return getLengthInternal(array, 0);
}

function getLengthInternal(array, counter) {
    if (!array[counter]) return counter;
    return getLengthInternal(array, counter + 1);
}
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0 

/* ========================== SOLUTION 13  ======================================
================================================================================ */
/* Challenge: getLength
Get the length of an array using recursion without accessing its length property.
Input: {Array} array - array whose length is sought
Output: {Number} 
*/
function getLength(array) {
    if (0 in array) return 1 + getLength(array.slice(1));
    return 0;
}
function getLength(array) {
    return (0 in array) ? 1 + getLength(array.slice(1)) : 0;
}
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, undefined, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

/* ========================== SOLUTION 14  ======================================
================================================================================ */
/* Challenge: getLength
Get the length of an array using recursion without accessing its length property.
Input: {Array} array - array whose length is sought
Output: {Number} 
*/
/*
create a getLength func that accept array 
    return other fun that accept array and count = 0;

create a getLengthInternal func that accept array and count
    base case: if array has not count , return count
    recursive case : invoke getLengthInternal and passed array , count +1
*/
const getLength = (array)=>{
    return getLengthInternal(array, count = 0)
}
const getLengthInternal = (array, count) =>{
     if(!array[count]) return count;
     return getLengthInternal(array, count +1 )
}
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, undefined, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0




/* ========================== SOLUTION 15  ======================================
================================================================================ */
/*
Input : Array
Outpt : Number of index

create getLength func that accept array and set default count = 0
    base case : if array has count return count;
    recursive case : invoke getLength func and passed array, with count increment by 1
*/
const getLength15 = (arr, count = 0)=>{
    if(!arr.hasOwnProperty(count)) return count;
    return getLength15(arr, count + 1)
}
console.log(getLength15([1,2,3])) // 3
console.log(getLength15([])) // 0
console.log(getLength15([1,undefined, 2,3, 4])) // 5