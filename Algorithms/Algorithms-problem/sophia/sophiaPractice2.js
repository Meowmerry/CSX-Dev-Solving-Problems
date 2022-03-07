// PROBLEM 1 - LEVEL 1: DECLARE A VARIABLE
// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

// declare a variable randomNums using the keyword const
const randomNums = [1, 14, 7, 21, -6];

// TEST CASES:
// console.log(randomNums); // -> [1, 14, 7, 21, -6]

// PROBLEM 2 - LEVEL 1: CREATE A FUNCTION
// Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
// NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]

// declare a function minAndMax that accepts an array of numbers
function minAndMax(arr) {
  const sorted = arr.sort((a, b) => a - b)
  // return the smallest and largest number in the array.
  return [sorted[0], sorted[sorted.length - 1]];
}

// TEST CASES:
// console.log(minAndMax([-5, 0, 18, 2, 1, 9])); // -> [-5, 18]

// PROBLEM 3 - LEVEL 1: CREATE A FUNCTION
//PART A - Create a function "addOne" that takes a number as and argument and returns that number plus one
// PART B - Create a function "subtractOne" that takes a number as and argument and returns that number minus one

// create a function addOne that accepts a num as arg
function addOne(num) {
  // returns num + 1
  return num + 1;
}
// create a function subtractOne that accepts a num as arg
function subtractOne(num) {
  // returns num + 1
  return num - 1;
}

// TEST CASES:
// console.log(addOne(5)) // -> 6
// console.log(addOne(8)) // -> 9
// console.log(subtractOne(5)) // -> 4
// console.log(subtractOne(8)) // -> 7

// PROBLEM 4 - LEVEL 1: CREATE A FUNCTION
/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

// declare a function that accepts a positive integer
function largestPossible(num) {
  // throw error if input is not a positive integer
  if (typeof num !== 'number' && num > 0) throw new Error('Please input a possible integer as argument.')
  // convert number to string and sort
  let numSort = String(num).split('').sort((a, b) => b - a);
  // convert array back to string and convert to number
  numSort = Number(numSort.join(''));
  // returns the largest possible number
  return numSort;
}

// console.log(largestPossible(42145)); //-> 54421
// console.log(largestPossible(145263)); //-> 654321

// PROBLEM 5 - LEVEL 2: HOF/CALLBACKS
/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
usePotions("9999B") //➞ "9998"
usePotions("9A123") //➞ "10123"
usePotions("567") //➞ "567"
*/

// declare a function usePotions that accepts a String
function usePotions(str) {
  // initialize a result variable to return
  let result = '';
  // iterate through the length of the string
  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf('A') - 1) {
      result += addOne(Number(str[i]));
    } else if (i === str.indexOf('B') - 1) {
      result += subtractOne(Number(str[i]));
    } else {
      result += str[i]
    }
  }
  // return result
  return result.replace('A', "").replace('B', "");
}

//TEST CASES:
// console.log(usePotions("3A78B51")) //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
// console.log(usePotions("9999B")) //➞ "9998"
// console.log(usePotions("9A123")) //➞ "10123"
// console.log(usePotions("567")) //➞ "567"

// PROBLEM 6 - LEVEL 3: WRITE A FUNCTION
/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

// declare a function transpose that accepts an array with subarrays


// PROBLEM 7 - LEVEL 3: CLOSURE
/*
Write a function 'stored' that takes in a function and returns a new function. The new function
will check if it has already computed the result for the given argument. If it hasn't, it will
run the passed-in function on the argument and return the result. If it has, it will return
the stored argument along with its result. If an argument is not a number, the new function
will not store the argument and instead return the error message "Please enter a valid number".

Ex:
const cube = (n) => n ** 3;
const cubeStored = stored(cube);
cubeStored(2) --> 8
cubeStored(2) --> '2: 8'
cubeStored(3) --> 27
cubeStored(3) --> '3: 27'
cubeStored('a') --> "Please enter a valid number"
cubeStored('a') --> "Please enter a valid number"
cubeStored(2) --> '2: 8'
*/

// PROBLEM 8 - LEVEL 3: RECURSION
/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/

// const cube = (n) => n ** 3;
// const cubeStored = stored(cube);
// console.log(cubeStored(2)) // --> 8
// console.log(cubeStored(2)) // --> '2: 8'
// console.log(cubeStored(3)) // --> 27
// console.log(cubeStored(3)) // --> '3: 27'
// console.log(cubeStored('a')) // --> "Please enter a valid number"
// console.log(cubeStored('a')) // --> "Please enter a valid number"
// console.log(cubeStored(2)) // --> '2: 8'

// PROBLEM 9
/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps. 'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

// PROBLEM 10
/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

/*Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter 
that we are going to search for). "wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up
in the word search.
Example:
wordSearchLetterCounter([
["D", "E", "Y", "H", "A", "D"],
["C", "B", "Z", "Y", "J", "K"],
["D", "B", "C", "A", "M", "N"],
["F", "G", "G", "R", "S", "R"],
["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

// SOLUTION USING REDUCE FOR HASH TABLES
// const count = fruitBasket.reduce( (tally, fruit) => {
// tally[fruit] = (tally[fruit] || 0) + 1 ;
// return tally;
// } , {})

// { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// SOLUTION USING HASH TABLE AND METHODS
//   //initiate function arr and search value
// function countTimes (arr, search) {
//   //declare empty object variable
//   let hash = {};
//   //iterate through array and assign each element as a property, assign all values as 1. each instance of property in the array will increment value by 1.
//   arr.forEach(key =>{
//     hash[key] ? hash[key] += 1 : hash[key] = 1;
//   })
//   return hash[search];
// //return count
// }

// function wordSearchLetterCounter(arr, letter) {
//   return countTimes(arr.flat(),letter)
// }

// SOLUTION USING REDUCE
// function wordSearchLetterCounter(arr, letter) {
//   let result = [];
//   result = arr.reduce((outputArr, currArr) => {
//       currArr.forEach((element) => {
//         if (element === letter) {
//           outputArr.push(element)
//         }
//       })
//   return outputArr
// }, [])
// return result.length
// }

console.log(wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D"))