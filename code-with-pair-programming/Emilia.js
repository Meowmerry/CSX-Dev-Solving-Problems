// Declare a variable 'numbers' and set it equal to an array containing the values 2, 1.3, 2.1, 2.4
const numbers = [2, 1.3, 2.1, 2.4];
//console.log(numbers)

/*
Create a function groupBy that accepts an array and a callback, and returns an object. 
groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

const floored = function(num) { return Math.floor(num); };
console.log(groupBy(numbers, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

Input : Array and callback
Output : an object
		crete a func groupBy 
    	const object = {}
    	iterate thru array use a for loop
      on each current will call a callback 
        if key isn't in obj, assign it to obj
        eles reasign objec push currentment    	
     return object
*/
const groupBy = (arr, callback) => {
  const object = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (!obj[call(arr[i])]) {
      object[callback(arr[i])] = [arr[i]];
    } else {
      object[callback(arr[i])].push(arr[i]);
    }
  }
  return object;
};

const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(numbers, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")


Input : String
Output :Boolean

	crete isPalindrome accetp string
  		declear a veriable reverse assign to string input, strin split, reverse, join 
  	  return compare reverse with string 

*/

const isPalindrome = (string) => {
  const revesre = string.split("").reverse().join("");

  return revesre === string;
};
// console.log(isPalindrome("LEVEL")) // true
// console.log(isPalindrome("RACECAR")) // true
// console.log(isPalindrome("Javascript")) // false

/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following 
behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:

Input : callback Func

Output : return func with one argument OR without arguments

crete a func checkerLogger 
		declare a cache assign to empty object
    return funcInner that will accept one parameter args 			
          	if args retrun true
            else no args return object with key will true and false 
            				value number     
*/

const checkerLogger = (callback) => {
  const cache = { true: 0, false: 0 };
  return (args) => {
    if (!args) {
      return cache;
    }
    cache[callback(args)] += 1;
    return callback(args);
  };
};

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }

/* 
Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

Input : string 
Output : Number

create getLength take string input
		declare index = 0 ;
    base case : if string lenght is less than or equal to 1 return index
    
    recursive case : invoke getLenght and passed in new update , string , index increment by 1
*/

const getLength = (string, idx = 0) => {
  if (!string[idx]) return idx;

  return getLength(string, idx + 1);
};
console.log(getLength("hello")); //  5;
console.log(getLength("")); // 0
console.log(getLength("js")); //  2;

/*
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.
*/

// console.log(endX("Myexesloveme")) //→ "Myeeslovemex"
// console.log(endX("xxre")) //→ "rexx"
// console.log(endX("xxhixx")) //→ "hixxxx"
// console.log(endX("xhixhix")) //→ "hihixxx"

/*
Write a function that takes in an array and returns a new array with duplicates removed
Ex: deleteDups(['a','a','a']) -> ['a']
*/

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
