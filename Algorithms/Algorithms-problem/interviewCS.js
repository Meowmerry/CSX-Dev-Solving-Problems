
/*
QUESTION 1a
Declare a variable 'number' and set it to the value 10.
*/
let number = 10;

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2a
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function
*/
const addNumbersLoop = (nums, sum = 0) => {
    for (let i = 1; i <= nums; i += 1) {
        sum += i;
    }
    return sum;
}

// console.log(addNumbersLoop(4)) // 10
// console.log(addNumbersLoop(3)) // 6
// console.log(addNumbersLoop(5)) // 15

const addNumbers = (nums, sum = 0) => {
    if (nums === 0) return sum;
    return addNumbers(nums - 1, sum + nums)
}
// console.log(addNumbers(4)) // 10
// console.log(addNumbers(3)) // 6
// console.log(addNumbers(5)) // 15

//////////////////////////////////////////////////////////////////////////////////////

/*

QUESTION 3a
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
const between50And500 = (nums) => {
    if (nums >= 50 && nums < 500) return true;
    else return false;
}
// console.log(between50And500(45)) // false
// console.log(between50And500(455)) // true
// console.log(between50And500(300)) // true
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4a
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
const divBy100 = (nums) => nums % 100 === 0 ? true : false;
// console.log(divBy100(45)) // false
// console.log(divBy100(455)) // false
// console.log(divBy100(300)) // true
// console.log(divBy100(500)) // true
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5a
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
const negativeOrEven = (nums) => nums < 0 || nums % 2 === 0 ? true : false;

// console.log(negativeOrEven(-45)) // true
// console.log(negativeOrEven(455)) // false
// console.log(negativeOrEven(315)) // false
// console.log(negativeOrEven(500)) // true
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6a
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false

Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by 100, and a negative number OR even. Then test the number 250.
*/
const passAllTests = (arrFunc, value) => {
    return arrFunc.reduce((acc, curr) => {
        if (!curr(value)) {
            acc = false;
        }
        return acc;
    }, true)

}
// console.log(passAllTests([between50And500, divBy100, negativeOrEven], 100)) // true
// console.log(passAllTests([between50And500, divBy100, negativeOrEven], -45)) // false
// console.log(passAllTests([between50And500, divBy100, negativeOrEven], 300)) // true
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7a
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('')
}
// console.log(isPalindrome('LEVEL')) // true
// console.log(isPalindrome('RACECAR')) // true
// console.log(isPalindrome('RACECARsa')) // true

const isPalindromeRecursive = (str) => {
    str = str.replace(/\W/g, '').toLowerCase();
    if (str.length === 1 || str.length === 0) return true;
    return str[0] === str[str.length - 1] && isPalindromeRecursive(str.slice(1, -1))

}
console.log(isPalindromeRecursive('LEVEL')) // true
console.log(isPalindromeRecursive('RACECAR')) // true
console.log(isPalindromeRecursive('RACECARsa')) // false
console.log(isPalindromeRecursive('RAhslwo CECARsa')) // false
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8 a
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/
const add = (num1) => {
    return (num2) => num1 + num2;
}
const addBy10 = add(10)
//console.log(addBy10(20)) // -> 30

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 9a
Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
*/

const getLength = (str, i = 0) => {
    if (str[i] === undefined) return i;
    return getLength(str, i + 1)
}
console.log(getLength('')) // 0
console.log(getLength('aa')) // 2
console.log(getLength('hello')) // 5
//////////////////////////////////////////////////////////////////////////////////////

/*
Question 10a
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the 
same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [[7, 4, 1],
                                           [8, 5, 2],
                                           [9, 6, 3] ]
Input : Array of subArray
Output : New Array with newSubArray
create a func takes array as arguments
    iterate thru array 
*/

const rotateGrid = (array) => {
    return array[0].map((val, index) => array.map(row => row[index]).reverse())
}
const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateGrid(sampleGrid)); // -> [[7, 4, 1], [8, 5, 2], [9, 6, 3] ]
///////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 1b
Declare a variable ‘names’ and set it to an array with the values ‘Chris’, ‘Samantha’, ‘Richard’, and ‘Kyle’ in it.
*/
const names = ['Chris', 'Samantha', 'Kyle']
//////////////////////////////////////////////////////////////////////////////////////

/*
Question 2b
A group of friends have decided to start a secret society. 
The name will be the first letter of each of their names, sorted in alphabetical order. 
Create a function ‘societyName’ that takes in an array of names and returns the name of the secret society. 
For example, if our input is [‘Adam’, ‘Sarah’, ‘Malcolm’] then ‘societyName’ should return the string ‘AMS’
*/
/* ================= SOLUTION 1 ======================== */
const upperCase = (str) => {
    return str.toUpperCase()
}
const societyName = (arr) => {
    return arr.reduce((acc, curr) => {
        [...curr].forEach(ele => {
            // if (ele.toUpperCase() === ele) {
            if (upperCase(ele) === ele) {
                acc += ele
            }
        })
        return acc.split('').sort().join('')
    }, '')
}
// console.log(  (['Adam', 'Sarah', 'Malcolm'])) // ASM
// console.log(societyName(['Meow', 'Manddy', 'Ann'])) // AMM
// console.log(societyName(['Cecilia', 'Andrea', 'Ronald'])) // ACR

/* ================= SOLUTION 2 ======================== */

const strAtFirstChar = str => str[0];
const societyName2 = (arr) => arr.map(strAtFirstChar).sort().join('');

console.log(societyName2(['Adam', 'Sarah', 'Malcolm'])) // ASM
console.log(societyName2(['Meow', 'Manddy', 'Ann'])) // AMM
console.log(societyName2(['Cecilia', 'Andrea', 'Ronald'])) // ACR
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3b
Create a function “countTimes” that takes in two arguments (an array and a search value). 
“countTimes” should return the number of times the search value is present in the array.
Example: countTimes([1, 8, 9, 9, 10], 9) -> 2

In : Array and Nubmer target
Out : Number
create a func takes array as aruments
    declare default variable count assign to 0 , i assign to 0
    base case : 
    arr as i is undefined return count;
    arr as i is equal to target, then count increment by 1;
    
    recursive case : 
    invoke countTimes func passed in arr, target , count , i increment by 1

*/
const countTimes = (arr, target, count = 0, i = 0) => {
    if (arr[i] === undefined) return count;
    if (arr[i] === target) count += 1;
    return countTimes(arr, target, count, i + 1);

}
// console.log(countTimes([1, 8, 9, 9, 10], 9)) //-> 2
//////////////////////////////////////////////////////////////////////////////////////

/*+==`
QUESTION 4b
Create a function called “wordSearchLetterCounter” that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for). “wordSearchLetterCounter” should use your “countTimes” function to count the total number of times a letter show up in the word search.
Example: wordSearchLetterCounter([ [“D”, “E”, “Y”, “H”, “A”, “D”], [“C”, “B”, “Z”, “Y”, “J”, “K”], [“D”, “B”, “C”, “A”, “M”, “N”], [“F”, “G”, “G”, “R”, “S”, “R”], [“V”, “X”, “H”, “A”, “S”, “S”] ], “D”) ➞ 3 “D” shows up 3 times: twice in first row, once in third row.
*/
/* ============ SOLUTION 1 ====================== */
const wordSearchLetterCounter = (arr, letter) => countTimes(arr.flat(), letter);
console.log(wordSearchLetterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
], "D")) //-> D ==>  3

/* ============ SOLUTION 2 ====================== */
const wordSearchLetterCounter2 = (arr, letter) => {
    return arr.reduce((acc, curr) => {
        curr.forEach((ele) => acc += countTimes(ele, letter))
        return acc;
    }, 0)

}
console.log(wordSearchLetterCounter2([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
], "D")) //-> D ==>  3
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5b
Create a function “concatWithSpace” that takes in two arguments (both will be strings). “concatWithSpace” should return the two strings concatenated with a space in between them. For example, if the arguments are “hello” and “world” then “concatWithSpace” should return “hello world”.
*/
const concatWithSpace = (str1, str2) => `${str1} ${str2}`
console.log(concatWithSpace('hello', 'world'))
//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6b
Create a function called “shorten”. “shorten” takes three arguments (an array, a function, and an initial value). “shorten” is designed to shorten this array’s multiple values to just one value by applying the callback function to each of the values in the array. This is how it works:

The shorten function will have an “accumulator value” which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
The array is iterated over, passing the accumulator value and the next array element to the callback function.
The callback function’s returned value becomes the new accumulator value
The next loop executes with the new accumulator value.

Check that your ‘shorten’ function is working correctly by passing an array to it with the string values ‘is’, ‘so’, ‘much’ and ‘fun!’ as the first argument. Pass your concatWithSpace function as our callback and the string ‘Programming’ as the initialValue argument. The result of this call to shorten should be the string ‘Programming is so much fun!’ */
const shorten = (arr, cb, init) => arr.reduce(cb, init);
console.log(shorten([1, 2, 3], (num1, num2) => num1 + num2, 0)); // 6

const shorten1 = (arr, cb, init) => arr.reduce(cb, init);

console.log(shorten1([1, 2, 3], (num1, num2) => num1 + num2, 0))

//////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7b
Create a function “countChar” that takes two arguments (an input string and a target string). “countChar” will return the number of times the target string is found in the input string.

Example: countChar(‘hello world’, ‘o’); -> 2 countChar(‘javascript’, ‘j’); -> 1 Note: Do not use any native JS methods, or loops. */
const countChar = (str, letter, count = 0, i = 0) => {
    if (str[i] === undefined) return count;
    if (str[i] === letter) count += 1;
    return countChar(str, letter, count, i + 1)
}
console.log(countChar('hello world', 'o')); //-> 2 
console.log(countChar('javascript', 'j')); //-> 1

//////////////////////////////////////////////////////////////////////////////////////
/*
QUESTION 1c
Create an object named "example" with a key "sentence" that has a value of the string "TODAY IS AN AWESOME DAY FOR CODING!"
*/
const example = { sentence: "TODAY IS AN AWESOME DAY FOR CODING!" };

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
const fixTitle = () => {

}

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
const containsJ = (str) => str.includes("J") || str.includes('j');
console.log(containsJ('Cat')) // false
console.log(containsJ('Jaguar')) // true
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

const isOdd = n => n % 2 !== 0;
// console.log(isOdd(3)) // true
// console.log(isOdd(4)) // false

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6d
Create a function ‘atLeastOne’ that takes in two inputs (an array and a callback function).
The callback function will return a boolean value.
The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then ‘atLeastOne’ should return true. Otherwise it should return false.
*/
const atLeastOne = (arr, callback) => arr.reduce((acc, curr) => {
    callback(curr) ? acc = true : false;
    return acc;
}, false);
console.log(atLeastOne([1, 3, 5, 6], isOdd)); // true;
console.log(atLeastOne([2, 4, 6, 8], isOdd)); // false;
console.log(atLeastOne([1, 4, 6, 8], isOdd)); // true;
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
 */

//////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 2e
Create a function 'cubeNum' that takes in a number as an argument and returns the number cubed.
For example, if we pass the number 3 to 'cubeNum' it will return 27 because 3 * 3 * 3 = 27
*/

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 3e
Create a function 'sumOfCubes' that takes in an array of numbers as and argument and uses your 'cubeNum' function.
'sumOfCubes' should return the sum of the array's elements cubed.
For example, if we pass the array [1,5,9] to the function 'sumOfCubes' it should return 855 because 1^3 + 5^3 + 9^3 = 855

Check that your 'sumOfCubes' function is working correctly by passing the value of 'myNumbers' to it
*/

/////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 4e
Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.
 */

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 5e
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/

///////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 6e
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'

Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function
*/

//////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 7e
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
*/

//////////////////////////////////////////////////////////////////////////////////////////

/*
QUESTION 8e
Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.

Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.

*/

//////////////////////////////////////////////////////////////////////////////////////////


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
const doubleChar = (str, i = 0, result = '') => {
    if (str[i] === undefined) return result;
    if (str[i]) result += str[i] + str[i];
    return doubleChar(str, i + 1, result);
}
console.log(doubleChar('Hello World!!'))
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
let randomNumber = 10;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/
const amplify = (nums) => {
    let newArr = [];
    for (let i = 1; i <= nums; i += 1) {
        if (i % 4 === 0) newArr.push(i * 10);
        else newArr.push(i)
    }
    return newArr
}
//console.log(amplify(randomNumber)) // [1, 2, 3, 40, 5 , 6 , 7 , 80 , 9 , 10]
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Check that your 'amplify' function is working correctly by passing the value of 'randomNumber' to the 'amplify' function */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'. */

const programmingLanguages = ['C++', 'Java', 'Python', 'Javascript', 'Swift'];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*  Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following
behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function groupBy that accepts an array and a callback, and returns an object.
groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object.
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

const floored = function(num) { return Math.floor(num); };
console.log(groupBy(numbers, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.
*/

// console.log(endX("Myexesloveme")) //→ "Myeeslovemex"
// console.log(endX("xxre")) //→ "rexx"
// console.log(endX("xxhixx")) //→ "hixxxx"
// console.log(endX("xhixhix")) //→ "hihixxx"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function that takes in an array and returns a new array with duplicates removed
Ex: deleteDups(['a','a','a']) -> ['a']
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

Examples
returnUnique([1, 9, 8, 8,stored 7, 6, 1, 6]); // ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]); // ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]); // ➞ [5, 6]
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function 'subsetSum' that is given an array of integers and a target number.
It should return true if there is a subset of the array that sums up to the target and returns false otherwise.
A subset can be any size and the elements do not have to appear consecutively in the array.

Examples:
subsetSum([3, 2], 5)
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Challenge: Loops - Multiple Conditions
Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1.
Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1. */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Given a non-negative int n, return the sum of its digits recursively (no loops).

sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
'largestSwap' should return a boolean.
For example, if 57 is our our input, we should return false because swapping the digits gives us 75, and 75 > 57.
Furthermore, if our input is 61 'largestSwap' should return true because swapping the digits gives us 61 and 61 > 16.
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Create a function longestWord that that retuns the longest word of a sentence.
  If there are ties, the function should return the later word.  */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Create a function noseFinder that accepts an array of objects as an argument, and returns an array with the name of only the reindeer
with a red nose as a first value, and the name of the color of that reindeers nose as a second value.
Ex:
console.log(noseFinder(santasReindeer))// ["Rudolph", "red"]
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. 
Create a function that takes an array and returns the sum of all numbers in the array.

console.log(numbersSum([1, 2, "13", "4", "645"])) //➞ 3
console.log(numbersSum([true, false, "123", "75"])) //➞ 0
console.log(numbersSum([1, 2, 3, 4, 5, true])) //➞ 15
*/

const numbersSum = (arr) => arr.reduce((acc, curr) => typeof curr === 'number' ? acc += curr : acc, 0);
console.log(numbersSum([1, 2, "13", "4", "645"])) //➞ 3
console.log(numbersSum([true, false, "123", "75"])) //➞ 0
console.log(numbersSum([1, 2, 3, 4, 5, true])) //➞ 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////