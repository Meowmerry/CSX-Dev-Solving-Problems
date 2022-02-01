
/* Declare a variable 'number' and set it to the value 10. */


/* Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6. */

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
const addNumbers = (nums) =>{
   let sum = 0;
   for(let i = 0; i <= nums ; i++)
      sum+= i;
    return sum;
}
// console.log(addNumbers(4))
/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/



/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by the 100, and a negative number OR even. Then test the number 250.
*/


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

const isPalindrome = (string)=>{
  string = string.replace(/\W/g, '').toLowerCase();
  if(string.length === 0 || string.length ===1 ) return true;
  return string[0] === string[string.length-1]  && isPalindrome(string.slice(1,-1))
}

// console.log(isPalindrome('RACECAR')) // true
// console.log(isPalindrome('hello meow')) // false

/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/


/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/
const  add = (num) => (value) => num + value;
const addBy10 = add(10)
//console.log(addBy10(20)) // -> 30


/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

const transpose = (array) =>{
  const result = [];
  for(let i = 0 ; i < array[0].length; i++){
     const subArr = []
     for(let j = 0 ; j < array.length ; j++){
          subArr.push(array[j][i])
     }
     result.push(subArr)
  }
  return result;
  // return array.reduce((acc, curr) =>{
  //       const subArr = []
  //       for(let i = 0 ; i < curr.length ; i++){
  //            subArr.push(curr)
  //       }
  // })
}
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]



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











