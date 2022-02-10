/* Declare a variable ‘names’ and set it to an array with the values ‘Chris’, ‘Samantha’, ‘Richard’, and ‘Kyle’ in it. */


/*
create a function that takes in that name string and outputs a string with all the vowels removed
for example: "David" -> "Dvd"
*/


/*
Create a function that takes in a string and returns that string in alternating cases starting with Upper Case
for example:
dog -> DoG
chair -> ChAiR
elephant -> ElEpHaNt 
*/

/*Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples
sumOfCubes([1, 5, 9]) //➞ 855
sumOfCubes([3, 4, 5]) //➞ 216
3*3*3
4*4*4
5*5*5
sumOfCubes([2]) //➞ 8
sumOfCubes([]) //➞ 0 */


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.

In : Number
Out : Boolean

Create a function "between50And500" that takes a number as an argument
        check if numberInput > 50 and < 500 return true
        otherwish return false
        	
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
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

/* Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property. */

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
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/