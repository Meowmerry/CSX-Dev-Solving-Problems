/* Declare a variable 'numbers' and set it equal to an array containing the values  1.3, 2.1, 2.4 */
const numbers = [1.3, 2.1, 2.4];

/* Create a function groupBy that accepts an array and a callback, and returns an object.
groupBy will iterate through the array and perform the callback on each element.
Each return value from the callback will be saved as a key on the object.
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

const floored = function(num) { return Math.floor(num); };
console.log(groupBy(numbers, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
*/


// Input : Array and a callback
// Output : an Object with associated from the callback
// create a function that takes array and a callbeck
// declare an empty object with will store the result
// iterate thru array and perform the callback on each element
// if object not has any key
// SAVE KEY to object with KEY ==> callback on each element
// VALUE will be array
// else return object

const groupBy = (arr, callback) => {
  return array.reduce(function (acc, curr) {
    if (!acc[callback(curr)]) {
      acc[callback(curr)] = [curr];
    } else {
      acc[callback(curr)].push(curr);
    }
    return acc;
  }, {});
};

const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(numbers, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/* Create a function cycleIterator that accepts an array, and returns a function. 
The returned function will accept zero arguments. 
When first invoked, the returned function will return the first element of the array. 
When invoked a second time, the returned function will return the second element of the array, and so forth. 
After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const getDay = cycleIterator(['Fri', 'Sat', 'Sun'])
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
*/

/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
 
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
 */

/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.
 
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
 */

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
Input : String
Output : Boolean

create a functioin that thake a string input
    reassing string input with all to get out of symbol and to lowercase
    base case : string is empty or only one letter return true
    base case : compare the first letter with the last letter if not equal return false
    recuresvie : invoke isPalindrome func and passed in newInput ==> using slice method
*/

const isPalindrome = (string) => {
  string = string.replace(/\W/g, "").toLowerCase();
  if (string === "" || string.length === 1) return true;
  return (
    string[0] === string[string.length - 1] && isPalindrome(string.slice(1, -1))
  );
};

// console.log(isPalindrome('')) // true
// console.log(isPalindrome('RACECAR')) // true
// console.log(isPalindrome('LEVEL')) // true
// console.log(isPalindrome('A')) // true
// console.log(isPalindrome('I love code Smith and friend %@$EE')) // false

/* Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) 
The returned function should have the following  behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false. 

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }
*/
/* 
Input : callback
Ouput : closure --> consistent memory 
      return func with an boolean or object
    
create a function that takes a callback
	
    declare a cache object assign to object will KEY with true and false 
    
    declare a function with or without arguments
           	
            if no argument will invoke, and perform cache object with count times as a key value pair
            
            if has argument so invoke callback and will return boolean
            
            
    return function 
        	

*/

const checkerLogger = (callback) => {
  const cache = { true: 0, false: 0 };
  return (args) => {
    if (!args) return cache;
    cache[callback(args)] += 1;
    return callback(args);
  };
};

// const isOdd = (num) => num % 2 === 1;
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); //->  { true: 0, false: 0 }
// console.log(oddCounter(3)); //-> true
// console.log(oddCounter(2)); //->  false
// console.log(oddCounter()); //-> { true: 1, false: 1 }

/* Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, 
or the length property. */

/*
Input : String
Output : Number

create function getLength take string as arguments
    declaer default idx = 0
    base case : if string no have any index or element return 1
    recursive case : invoke getLenght passed in string , idx + 1

*/

const getLength = (string, idx = 0) => {
  if (!string[idx]) return idx;
  return getLength(string, idx + 1);
};
// console.log(getLength('hello how are you')) // 17
// console.log(getLength('')) // 0
// console.log(getLength('aa')) // 2

/*
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.

console.log(endX("")); //→ ""
console.log(endX("abc")); //→ "abc"
console.log(endX("Myexesloveme")) //→ "Myeeslovemex"
console.log(endX("xxre")) //→ "rexx"
console.log(endX("xxhixx")) //→ "hixxxx"
console.log(endX("xhixhix")) //→ "hihixxx"
*/
const endX = (str, allX = "", output = '', i = 0) => {
  // base case : if string is empty reuturn output
  if (str[i] === undefined) return output + allX;
  // if current element is 'x' reassign to allX
  if (str[i] === 'x') {
    allX += str[i];
  } else {  // if current element is NOT 'x' reassign to output
    output += str[i]
  }
  // recursive case : invoke endX passed str, allX, output , i 
  return endX(str, allX, output, i + 1)
};
console.log(endX("")); //→ ""
console.log(endX("abc")); //→ "abc"
console.log(endX("Myexesloveme")); //→ "Myeeslovemex"
console.log(endX("xxre")); //→ "rexx"
console.log(endX("xxhixx")); //→ "hixxxx"
console.log(endX("xhixhix")); //→ "hihixxx"
/*
Write a function that takes in an array and returns a new array with duplicates removed
Ex: deleteDups(['a','a','a']) -> ['a']
*/
const deleteDups = (arr) => {
  // return [...new Set(arr)]
  return arr.filter((ele, i, arr) => arr.indexOf(ele) === i)
}
console.log(deleteDups(['a', 'a', 'a'])) // -> ['a']
/*
In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

Examples
 returnUnique([1, 9, 8, 8, 7, 6, 1, 6]); // ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]); // ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]); // ➞ [5, 6]
*/

/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/
//permutation

/* Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) 
The returned function should have the following  behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false. 

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }
*/
