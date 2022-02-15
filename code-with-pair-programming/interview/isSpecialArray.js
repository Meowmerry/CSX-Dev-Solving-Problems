// An array is special if every even index contains an even number and every odd index contains an odd number. 
// Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
    /*
    Input: array of numbers
    Output: boolean
  
    Make a helper function isSpecialElem that takes a value and index number and returns whether it's special
  
    Run every on the array
  
    */

    return arr.every((elem, index) => isSpecial(elem, index));
}

function isSpecial(val, index) {
    /*
     If val is even AND index is even OR val is odd AND index is odd
  
    */

    return (val % 2) === (index % 2);
}

// Examples
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) //➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) //➞ false
// Index 2 has an odd number 9.

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) //➞ false
  // Index 3 has an even number 8.