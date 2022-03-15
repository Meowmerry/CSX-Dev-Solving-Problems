/* Filter by Digit Length
Create a function that filters out an array to include numbers that only have a certain number of digits.

console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) //➞ [232, 555]
// Include only numbers with 3 digits.

console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) //➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) //➞ []
// No numbers with only 1 digit exist => return empty array.

console.log(filterDigitLength([5, 6, 8, 9], 1)) //➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
*/

// Input : array of number
// output : newArry 

// declare a newArr assign to empty array
// iterate thre array use forEach 
// change current element to be string 
//  iterate thru arr input use filter 
// check if currnet element equal to n by checking length of current elelment
// push to newArray

// return  newARr
/* ================== Solution 1 ================================ */
const filterDigitLength = (arr, n) => {
  const newArr = [];
  arr.forEach(ele => {
    if (String(ele).length === n) {
      newArr.push(ele)
    }
  })
  return newArr;
}


// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) //➞ [232, 555]
// // Include only numbers with 3 digits.

// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) //➞ [2, 7, 8, 9]
// // Include only numbers with 1 digit.

// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) //➞ []
// // No numbers with only 1 digit exist => return empty array.

// console.log(filterDigitLength([5, 6, 8, 9], 1)) //➞ [5, 6, 8, 9]
// // All numbers in the array have 1 digit only => return original array.

/* ================== Solution 2 ================================ */
const filterDigitLength2 = (arr, n) => {
  return arr.filter(num => String(num).length === n)
}

console.log(filterDigitLength2([88, 232, 4, 9721, 555], 3)) //➞ [232, 555]
// Include only numbers with 3 digits.

console.log(filterDigitLength2([2, 7, 8, 9, 1012], 1)) //➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

console.log(filterDigitLength2([32, 88, 74, 91, 300, 4050], 1)) //➞ []
// No numbers with only 1 digit exist => return empty array.

console.log(filterDigitLength2([5, 6, 8, 9], 1)) //➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
