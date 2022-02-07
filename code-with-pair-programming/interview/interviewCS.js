
/*
QUESTION 1a
Declare a variable 'number' and set it to the value 10.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2a
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3a
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4a
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5a
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6a
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false

Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
*/


//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7a
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8 a
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 9a
Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Question 10a
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [[7, 4, 1],
                                           [8, 5, 2],
                                           [9, 6, 3] ]
*/

///////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 1b
Declare a variable ‘names’ and set it to an array with the values ‘Chris’, ‘Samantha’, ‘Richard’, and ‘Kyle’ in it.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Question 2b
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function ‘societyName’ that takes in an array of names and returns the name of the secret society. For example, if our input is [‘Adam’, ‘Sarah’, ‘Malcolm’] then ‘societyName’ should return the string ‘AMS’
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3b
Create a function “countTimes” that takes in two arguments (an array and a search value). “countTimes” should return the number of times the search value is present in the array.
Example: countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4b
Create a function called “wordSearchLetterCounter” that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for). “wordSearchLetterCounter” should use your “countTimes” function to count the total number of times a letter show up in the word search.
Example: wordSearchLetterCounter([ [“D”, “E”, “Y”, “H”, “A”, “D”], [“C”, “B”, “Z”, “Y”, “J”, “K”], [“D”, “B”, “C”, “A”, “M”, “N”], [“F”, “G”, “G”, “R”, “S”, “R”], [“V”, “X”, “H”, “A”, “S”, “S”] ], “D”) ➞ 3 “D” shows up 3 times: twice in first row, once in third row.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5b
Create a function “concatWithSpace” that takes in two arguments (both will be strings). “concatWithSpace” should return the two strings concatenated with a space in between them. For example, if the arguments are “hello” and “world” then “concatWithSpace” should return “hello world”.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6b
Create a function called “shorten”. “shorten” takes three arguments (an array, a function, and an initial value). “shorten” is designed to shorten this array’s multiple values to just one value by applying the callback function to each of the values in the array. This is how it works:

The shorten function will have an “accumulator value” which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
The array is iterated over, passing the accumulator value and the next array element to the callback function.
The callback function’s returned value becomes the new accumulator value
The next loop executes with the new accumulator value.

Check that your ‘shorten’ function is working correctly by passing an array to it with the string values ‘is’, ‘so’, ‘much’ and ‘fun!’ as the first argument. Pass your concatWithSpace function as our callback and the string ‘Programming’ as the initialValue argument. The result of this call to shorten should be the string ‘Programming is so much fun!’ */

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7b
Create a function “countChar” that takes two arguments (an input string and a target string). “countChar” will return the number of times the target string is found in the input string.

Example: countChar(‘hello world’, ‘o’); -> 2 countChar(‘javascript’, ‘j’); -> 1 Note: Do not use any native JS methods, or loops. */


//////////////////////////////////////////////////////////////////////////////////////
/*
QUESTION 1c
Create an object named "example" with a key "sentence" that has a value of the string "TODAY IS AN AWESOME DAY FOR CODING!"
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2c
Create a function "fixTitle" that take an argument (a string). Your job is to have the function
return the string in title case/style, meaning that each word is capitalized (all other letters in the word are lowercase).
Assume passive words like "the", "and", "to" are also going to be capitazlized.

example:
input: "THE HiSTory of mathematiCS"
output: "The History Of Mathematics"

Test your fixTile function by passing in the sentence value of your "example" object.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3c
The bookstore has a list of books but they are not titled correctly since the book titles should be in title case/style.

const books = [
 {title: "the midnight sky", author: "Samuel Goodens"},
 {title: "technology In THE age of artificial intelligenge", author: "Lara Del Rio"},
 {title: "never GIVE up", author: "Michelle Li"} 
];

Write a function that uses your "fixTitle" function to fix each title and return an array of strings where each entry is the fixed title.

example output: ["The Midnight Sky", "Technology In The Age Of Artificial Intelligenge", "Never Give Up" ]
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4c
Create a function "checklist" that will take an array as argument (an array of food items). "checklist" should return a function "purchased" that
also takes an array of food items as an argument. If all items did not get purchased, return "{allPurchased: false, missing: [<missing items>]}".
If all food items were purchashed, {allPurchased: true, missing: []}

Example:
const func = checklist(["apple", "rice", "wine"])
func(["mango", "bread", "lettuce", "apple"]) // expected: {allPurchased: false, missing: ["rice", "wine"]}
func(["rice", "bread", "wine", "lettuce", "apple"]) // expected: {allPurchased: true, missing: []}

*/


///////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5c
Write a function "percentMissing" to return the percentage of times a letter character is missing in a phrase. A missing character is
shown with an underscore "_". Examples:
percentMissing("Co_i_ng i_ f_n") should return 28.5
percentMissing("J___s_ript") should return 40 or 40.0

Note: Do not use any native JS methods, or loops.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
Question 6c
Write a function that provided n (a number) as input, will return a string representing a chessboard of n x n squares.

_#_#
#_#_
_#_#
#_#_
*/


//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 1d
Declare a variable ‘programmingLanguages’ and set it to an array that contains the values ‘C++’, ‘Java’, ‘Python’, Javascript’, and ‘Swift’.
*/

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2d
Create a function ‘containsJ’ that takes a string as an argument
‘containsJ’ should return a boolean value based off of whether or not the string being passed to it contains the letter ‘j’ or ’J.
For example, if the input is ‘Cat’ then your function should return false, and if the input is ‘Jaguar’ it should return true.
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3d
Create a function ‘screen’ that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When ‘screen’ is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The ‘screen’ function will return that new array.
For example, if we were to call ‘screen’ and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to ‘screen’
*/

// Check that your ‘screen’ function is working correctly by passing it your  ‘programmingLanguages’ array and your ‘containsJ’ function
// console.log(screen(programmingLanguages, containsJ))

/////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4d
Declare a variable ‘numbers’ and set it equal to an array containing the values 2, -14, -8, 22, 97, and 88
*/

////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5d
Declare a function ‘isOdd’ that takes one input (a number) and return a boolean indicating whether or not the number is odd.
For example, if we call ‘isOdd’ with an input of 3 it will return true.
*/

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6d
Create a function ‘atLeastOne’ that takes in two inputs (an array and a callback function).
The callback function will return a boolean value.
The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then ‘atLeastOne’ should return true. Otherwise it should return false.
*/

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7d
Write a function “memoryMaker” that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember(‘hello’); -> [‘hello’]
iRemember(1); -> [‘hello’, 1]
iRemember(‘world’); -> [‘hello’, 1, ‘world’]
iRemember(true); -> [‘hello’, 1, ‘world’, true]
*/

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8d
Create a function “sumAllElements” that takes in two arguments (an array of numbers and a initial value). “sumAllElements” will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 9d
Write a function ‘anagrams’ that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams(‘aabc’)); -> [ ‘aabc’, ‘aacb’, ‘abac’, ‘abca’, ‘acab’, ‘acba’, ‘baac’, ‘baca’, ‘bcaa’, ‘caab’, ‘caba’, ‘cbaa’ ]
*/

//////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 1e
Declare a variable myNumbers and set it to array containing the numbers 8, 3, and 14
​*/

//////////////////////////////////////////////////////////////////////////////////////////
​
/*
QUESTION 2e
Create a function 'cubeNum' that takes in a number as an argument and returns the number cubed.
For example, if we pass the number 3 to 'cubeNum' it will return 27 because 3 * 3 * 3 = 27
*/

///////////////////////////////////////////////////////////////////////////////////////////
​
/*
QUESTION 3e
Create a function 'sumOfCubes' that takes in an array of numbers as and argument and uses your 'cubeNum' function.
'sumOfCubes' should return the sum of the array's elements cubed.
For example, if we pass the array [1,5,9] to the function 'sumOfCubes' it should return 855 because 1^3 + 5^3 + 9^3 = 855

Check that your 'sumOfCubes' function is working correctly by passing the value of 'myNumbers' to it
*/
​
​/////////////////////////////////////////////////////////////////////////////////////////​
​
/*
QUESTION 4e
Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.
​*/

///////////////////////////////////////////////////////////////////////////////////////////
​
/*
QUESTION 5e
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/
​​
///////////////////////////////////////////////////////////////////////////////////////////
​
/*
QUESTION 6e
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'

Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function
*/
​
​//////////////////////////////////////////////////////////////////////////////////////////
​
/*
QUESTION 7e
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
*/
​
​//////////////////////////////////////////////////////////////////////////////////////////
​
/*
QUESTION 8e
Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.

Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.

*/
​
​//////////////////////////////////////////////////////////////////////////////////////////
​
​
/*
QUESTION 9e
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/


/////////////////////////////////Carlos 3rd Interview/////////////////////////////////////

/*
QUESTION 1f
Declare a variable myNumbers and set it to array containing the numbers 8, 3, and 14
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2f
Create a function 'cubeNum' that takes in a number as an argument and returns the number cubed.

For example, if we pass the number 3 to 'cubeNum' it will return 27 because 3 * 3 * 3 = 27
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
QUESTION 3f
Create a function 'sumOfCubes' that takes in an array of numbers as and argument and uses your 'cubeNum' function.

'sumOfCubes' should return the sum of the array's elements cubed.

For example, if we pass the array [1,5,9] to the function 'sumOfCubes' it should return 855 because 1^3 + 5^3 + 9^3 = 855
*/

/////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4f
Declare a variable 'myRandomString' and set it to the value ‘Codesmith'
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
QUESTION 5f
Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.

For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo WWoorrlldd!!'
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*6f
QUESTION
Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
QUESTION 7f
Create a function 'containsJ' that takes a string as an argument

'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.

For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8f
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.

The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.

If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.

For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 9f
Declare a variable 'numbers' and set it equal to an array containing the values 2, -14, -8, 22, 97, and 88
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 10f
Declare a function 'isOdd' that takes one input (a number) and return a boolean indicating whether or not the number is odd.

For example, if we call 'isOdd' with an input of 3 it will return true.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 11f
Create a function 'atLeastOne' that takes in two inputs (an array and a callback function).

The callback function will return a boolean value.

The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then 'atLeastOne' should return true. Otherwise it should return false.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 12f
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/

///////////////////* Sanaya Third Interview *//////////////////

// Declare a variable 'randomNumber' and set it equal to the number 10

/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/

// Check that your 'amplify' function is working correctly by passing the value of 'randomNumber' to the 'amplify' function

// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.

/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/

/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/

// Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function

/*
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
*/

/*
Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.
*/

/*
Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.
*/

/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/

/*
Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.

example:
SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object

MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
*/