// Declare a variable 'number' and set it to the value 10.

// use variable declaration let and set to value 10
let number = 10;

// TEST CASES:
	// console.log(number); // -> 10


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

// declare a function addNumbers that accepts a number as argument
function addNumbers (num) {
// throw error if num type !== number && num < 0
  if (typeof num !== 'number' || num < 0) throw new Error ('Please input a positive integer as argument.')
// initialize a result variable assigned 0
  let result = 0;
// using for loop to iterate through the numbers; += value into result
  for (let i = 1; i <= num; i++) {
    result += i;
  }
// return result
  return result;
}

// TEST CASES:
// console.log(addNumbers(4)) // -> 10
// console.log(addNumbers(5)) // -> 15
// console.log(addNumbers(-5)) // -> 'Please input a positive integer as argument.'


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

// declare func between50And500 that accepts a number as arg
function between50And500 (num) {
// throw error if num type !== number
  if (typeof num !== 'number') throw new Error ('Please input an integer as an argument.');
// return my conditional statement at if num > 50 && num < 500
  return (num > 50 && num < 500);
}

// TEST CASES:
// console.log(between50And500(50)) // -> false
// console.log(between50And500(45)) // -> false
// console.log(between50And500(472)) // -> true


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

// declare a func divBy100 that accepts a number as arg
function divBy100 (num) {
  // throw error if arg type !== num
  if (typeof num !== 'number') throw new Error ('Please input an integer as an argument.')
  // return conditional statement num%100 === 0
  return (num%100 === 0)
}
// TEST CASES:
// console.log(divBy100(5)) // -> false
// console.log(divBy100(500)) // -> true
// console.log(divBy100(5000)) // -> true

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

//declare a func negativeOrEven that accepts a num
function negativeOrEven (num) {
// throw error if arg type !== num
  if (typeof num !== 'number') throw new Error ('Please input an integer as an argument.')
// return conditional statement of num%2 === 0 OR num < 0
  return (num%2=== 0 || num <0)
}

// TEST CASES:
// console.log(negativeOrEven(5)) // -> false
// console.log(negativeOrEven(-5)) // -> true
// console.log(negativeOrEven(55)) // -> false

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

// declare a function passAllTests that accepts as arg: 1. array of cb, 2. value
function passAllTests (arr, val) {
// initialize a result = true;
  let result = true;
// iterate through the array with forEach
  arr.forEach(cb => {
    if (cb(val) === false) {
// reassign result = false if evaluated result is false
      result = false;
    }
  })
// return result
  return result;
}

/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

// TEST CASES:
console.log(passAllTests([between50And500, divBy100, negativeOrEven], 300)); // -> true
console.log(passAllTests([between50And500, divBy100, negativeOrEven], 250)); // -> false


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

// declare func isPalindrome that accepts a string
function isPalindrome (str) {
// initialize a reverse variable assigned ''
  let reverse = '';
// iterate through the string using for loop and += to reverse
  for (let i = str.length-1; 0 <= i; i--) {
    reverse += str[i];
  }
// return conditional if reverse === string
  return (reverse === str)
}

// console.log(isPalindrome('level')) // -> true
// console.log(isPalindrome('racecar')) // -> true
// console.log(isPalindrome('test')) // -> false


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

// declare a function getLength that accepts a string as arg, use storage parameter
function getLength (str, count = 0) {
// if str === '' return count
  if (!str[count]) return count;
// return function getLength(str, count)
  //count += 1
  return getLength(str, count+=1)
}

console.log(getLength('hello')) // -> 5
console.log(getLength('helloWorld')) // -> 10


/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.
const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/
// declare a func that accepts an array and string
const itemRetriever = (arrObj, str)=>{
  // declare a variable index assign to 0
  let index = 0;
    // create a function and will be return 
  return ()=>{
        // if index >= arr.length return the first index
        if(index >= arrObj.length) index = 0
        // return on object each time call  increment index by 1 
        return arrObj[index++][str];
  }
}
  
// // declare a func itemRetriever that accepts an array and a string (that represents a key)
// function itemRetriever (arr, str) {
// // declare a var count set to zero
//   let count = 0;
// // declare a embed func
//   function embed () {
// // increment count
// // return embed func at arr [count][str]
//     return arr[count++][str];
//   }
//   return embed;
// }

// TEST CASES:
const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' }
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
console.log(nextAuthor()) //-> 'Earnest Hemingway'
console.log(nextAuthor()) //-> 'Agatha Christie'
console.log(nextAuthor()) //-> 'J.K. Rowling'
console.log(nextAuthor()) //-> 'Steven King'
console.log(nextAuthor()) //-> 'Earnest Hemingway'

/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

// declare a function transpose that accepts an arr with subarr
function transpose (arr) {
// initialize a result array = [];
  const result = [];
// declare a var row = arr[0].length // -> 2
  let row = arr[0].length;
// declare a var col = arr.length // -> 3
  let col = arr.length;
// iterate through each element of the arrays and subarrays
  for (let i = 0; i < row; i++) {
    const subarray = [];
    for (let j = 0; j < col; j++) {
      subarray.push(arr[j][i])
    }
    result.push(subarray)
  }
// return the result array
  return result
}


const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]