/*Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples
sumOfCubes([1, 5, 9]) //➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) //➞ 216

sumOfCubes([2]) //➞ 8

sumOfCubes([]) //➞ 0*/

function sumOfcubes(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let total += math.pow(array[i], 3);
        result += total
    }
    return result;
}


//  return array.reduce((acc, num) => {
//     return acc + num ** 3;
//   }, 0);
// }
// console.log(sumOfCubes([1, 5, 9]));



// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

const numbersSum = (arr) => {
    // see if the element is a number or integer
    // declare an accumulator
    let acc = 0;
    // iterate through the array
    // check if the element is a number
    // add this to the acc
    arr.forEach(el => {
        if (typeof el === "number") {
            acc += el;
        }
    })

    return acc;
    // arr.reduce((acc, curr) => {
    //   if ((typeOf acc === "number") && (typeOf curr === "number")) {

    //   }
    // }, [])
    // add all numbers and return sum
}

// const numbersSum = (arr) => {
// return arr.reduce((acc, curr) => {
//   if (typeof curr === 'number') return acc + curr;
//   return acc;
// }, 0);

// Examples
console.log(numbersSum([1, 2, "13", "4", "645"])) //➞ 3

console.log(numbersSum([true, false, "123", "75"])) //➞ 0

console.log(numbersSum([1, 2, 3, 4, 5, true])) //➞ 15



// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) //➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) //➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) //➞ false
// // Index 3 has an even number 8.

function isSpecialArray(arr) {
    /*
    Input: array of numbers
    Output: boolean
  
    Make a helper function isSpecialElem that takes a value and index number and returns whether it's special
  
    Run every on the array
  
    */

    return arr.every(elem, index)
}

function isSpecial(val, index) {
    /*
     If val is even AND index is even OR val is odd AND index is odd
  
    */

    return (val % 2) === (index % 2);
}


// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
/* 
Input : Array of string
Output: Array
declare a result with empty array 
iterate array use a for loop 
      use other for loop thru each element 
           check if the curent index === 0 
           change to upppercase
 
return result;
  
*/

const capMe = (array) => {
    return array.map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
}
// Examples
console.log(capMe(["mavis", "senaida", "letty"])) // ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) // ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]




// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr, item, index = 0) {
    //create a fxn called search
    //search for index at item in array
    if (arr[0] === item) return index;
    //if present, ret true
    //otherwise, -1
    // base case: when arr length is zero
    if (arr.length === 0) return -1
    //solve recursively
    index++
    return search(arr.slice(1), item, index)
}
// Examples
console.log(search([1, 2, 3, 4], 3)) //➞ 2

console.log(search([2, 4, 6, 8, 10], 8)) //➞ 3

console.log(search([1, 3, 5, 7, 9], 11)) //➞ -1
// Notes
// If the item is not present, return -1.
// The given array is ordered.






/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 * 2* 0 =1
 * 2*1 = 2 
 * 2 *2 = 4
  * 4* 2= 8
   8* 2 = 16
  * Use recursion
 */

//declare function with arg x and y
function pow(x, y) {
    //var amount
    let output
    //base case if y is 0 
    //return 2
    if (y === 0) return 1
    //2*pow(x,y-1)
    //recur
    output = x * pow(x, y - 1)
    return output
}
console.log(pow(2, 4)); // 16
console.log(pow(2, 3)); // 8
console.log(pow(2, 2)); // 4
console.log(pow(2, 1)); // 2
console.log(pow(2, 0)); // 1
console.log(pow(3, 2)); // 9

/// or 
function pow(x, y, product = 1) {
    //var amount
    // let output 
    // //base case if y is 0 
    //   //return 2
    // if (y===0) return 1
    // //2*pow(x,y-1)
    // //recur
    // output= x * pow(x, y-1);
    // return output
    if (y === 0) return product;
    return pow(x, y - 1, product * x);
}


/*
Given an array of numbers (integers), return the mode, that is, the number that appears most often. If there are multiple modes, use the max of the modes.
Assume that at least one number is present in the array.
e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8
*/


/*
Given an array of numbers (integers), return the mode, that is, the number that appears most often. If there are multiple modes, use the max of the modes.
Assume that at least one number is present in the array.
e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8
*/

//create a function 
function mode(array) {
    //create an empty object
    const newObj = {};
    //iterate through the array 
    let mode;
    array.forEach(element => {
        //conditional that checks if an element is a key in the object 
        //if true, increment that key's value 
        if (!newObj[element]) {
            newObj[element] = 1;
        } else if (newObj[element]) newObj[element]++;
        //if false, create that object key initializing it to 0 
    })
    console.log(newObj)
    //for...in loop to iterate through object keys 
    //intialize a mode variable to the first object key-value
    let highestValue = newObj[array[0]] //2
    console.log('highest value', highestValue);
    //create mode variable
    for (const keys in newObj) {
        //conditional that checks if the current object[key] is greater than the mode
        if (newObj[keys] > highestValue) {
            highestValue = newObj[keys]
            mode = keys;
        }
    }
    if (!mode) mode = array[0];
    return mode;
    //return the mode
}
console.log(mode([3, 2, 4, 3]))
console.log(mode([7, 5, 8, 8, 2, 5]))