// // Write a function that returns the length of a string. Make your function recursive.

// function length(str) {
//   // if(str === '') return 0; // base case
//   // return 1 + length(str.slice(1));
// }

// function length(str, count = 0) {
//   if(str === '') return count; // base case
//   return length(str.slice(1), count + 1);
// }

// // Examples
// console.log(length("apple")) //➞ 5

// console.log(length("make")) //➞ 4

// console.log(length("a")) //➞ 1

// console.log(length("")) //➞ 0


// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// function search(arr, item, index = 0) {
// 	if(arr[index] === item){
//      return index;
//   } else if(arr[index] === undefined){
//     return -1;
//   }
//   return search(arr, item, index + 1)
// }




// Examples
// console.log(search([1], 0)) // -1

// console.log(search([1, 2, 3, 4], 3)) //➞ 2

// console.log(search([2, 4, 6, 8, 10], 8)) //➞ 3

// console.log(search([1, 3, 5, 7, 9], 11)) //➞ -1
// Notes
// If the item is not present, return -1.
// The given array is ordered.

// Given a number, return the total sum of that number multiplied by every number between 1 and 10.

// function multiSum(num, ten = 10, sum = 0) {
// 	if(ten === 0) return sum;
//   return multiSum(num, ten-1, num * ten + sum);
// }

// function multiSum(num, ten = 10) {
// 	if(ten === 0) return 0;
//   return  ten * num + multiSum(num, ten - 1);
// }

// Examples
// console.log(multiSum(1)) //➞ 55
// // 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

// console.log(multiSum(6)) //➞ 330
// // 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

// console.log(multiSum(10)) //➞ 550

// console.log(multiSum(8)) //➞ 440

// console.log(multiSum(2)) //➞ 110

// Write a function that reverses a string. Make your function recursive.

// function reverse(str, index = str.length-1, res = '') {
//   if(str[index] === undefined) return res;
//   return reverse(str, index - 1, res + str[index]);
// }

// function reverse(str) {  
//   if (str === '') return '';
//   return reverse(str.slice(1)) + str.charAt(0); 
//   //'olle' + 'h' = 'olleh'
//   //'oll' + 'e' = 'olle'
//   //'ol' + 'l' = 'oll'
//   //'o' + 'l' = 'ol'
//   //'' + '' = 'o'
// }


// Examples
// console.log(reverse("hello")) //➞ "olleh"

// console.log(reverse("world")) //➞ "dlrow"

// console.log(reverse("a")) //➞ "a"

// console.log(reverse("")) //➞ ""

// console.log(reverse("ab")) //➞ "ba"

// Write a function that finds the sum of the first n natural numbers. Make your function recursive.

// function sum(n, res = []) {
//   if(n === 0) return res.reduce((acc,curr)=>acc + curr);
//   res.push(n);
// 	return sum(n - 1, res)
// }

// function sum(n) { // n = 2
//   if (n === 1) return 1;
//   return n + sum(n - 1); // 3
// }

// const sum = n => n === 1 ? n : n + sum(n-1);

// Examples
// console.log(sum(5)) //➞ 15
// 1 + 2 + 3 + 4 + 5 = 15

// console.log(sum(1)) //➞ 1
// console.log(sum(2)) // => 3

// console.log(sum(12)) //➞ 78

// Write a function that finds the sum of an array. Make your function recursive.

// function sum(arr) {
// 	if(arr.length === 0) return 0;
//   if(arr.length === 1) return arr[0];
//   arr[0] += arr[arr.length-1];
//   return sum(arr.pop());
// }

// function sum(arr) {
//   if (!arr.length) return 0;
//   return arr[0] + sum(arr.slice(1));
// }

// function sum(arr, total = 0) {
//   if (!arr.length) return total
//   return sum(arr.slice(1), total + arr[0]);
// }

// function sum(arr) {
// return arr.length === 0?0:arr.pop()+sum(arr);
// }

// Examples
// console.log(sum([1, 2, 3, 4])) //➞ 10

// console.log(sum([1, 2])) //➞ 3

// console.log(sum([1])) //➞ 1

// console.log(sum([])) //➞ 0
// Notes
// Return 0 for an empty array.
// Check the Resources tab for info on recursion.

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function addUp(num, res=0) {
// 	if(num === 0) return res;
//   return addUp(num - 1, res += num);
// }

// function addUp(num) { // num = 2, num = 1
//   if (num === 1) return 1;
//   return num + addUp(num - 1); // 3
// }

// Examples
// console.log(addUp(1)); // 1

// console.log(addUp(2)); // 3
// console.log(addUp(4)) //➞ 10

// console.log(addUp(13)) //➞ 91

// console.log(addUp(600)) //➞ 180300
// Notes
// Expect any positive number between 1 and 1000.


// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// function numberSquares(n) {
// 	//base case
//   if (n === 0) return 0;
//   return n ** 2 + numberSquares(n - 1); 
// }


// Examples
// console.log(numberSquares(0)) // 0
// console.log(numberSquares(1)) // 1

// console.log(numberSquares(2)) //➞ 5

// console.log(numberSquares(4)) //➞ 30

// console.log(numberSquares(5)) //➞ 55
// Explanation
// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
// As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

// Notes
// Input is a positive integer.
// Square pyramidal number.

// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// function repetition(txt, n, res=txt) {
// 	if(n === 1) return res;
//   return repetition(txt, n - 1, res + txt);
// }

// function repetition(txt, n) {
//   if (n === 1) return txt;
//   return txt + repetition(txt, n - 1);
// }

// String.prototype.repeat() is not allowed

// Examples
// console.log(repetition("ab", 3)) //➞ "ababab"

// console.log(repetition("kiwi", 1)) //➞ "kiwi"

// console.log(repetition("cherry", 2)) //➞ "cherrycherry"
// Notes
// The second parameter of the function is positive integer.

// Write a function that calculates the factorial of a number recursively.

// function factorial(n, prod=1) {
// 	// 5*4*3*3*2*1=120
// // 5-1
// //mult 
// // solve recursively
// //base case when n=0 return prod
// if (n===0) return prod
// return factorial(n-1, prod*n)
// }

// function factorial(n) { // n = 2, n = 1, n = 0

// if (n === 0) return 1
// return n * factorial(n-1) 
//2 * 1 = 2 
//1 * 1 = 1
// }

// Examples
// console.log(factorial(9))
// console.log(factorial(5)) //➞ 120
// console.log(factorial(4))
// console.log(factorial(3)) //➞ 6
// console.log(factorial(2)) // 2
// console.log(factorial(1)) //➞ 1

// console.log(factorial(0)) //➞ 1

// Create a function that finds the highest integer in the array using recursion.

// function findHighest(arr, index = 0, highest = arr[0]) {
// 	//create base: if arr[index] doesn't exist return highest
//   if (arr[index] === undefined) return highest;
//   //if arr[index] > highest -- highest = arr[index]
//   if (arr[index] > highest) highest = arr[index];
//   //recursive case increment index by 1
//   return findHighest(arr, index + 1, highest)
// }

// function findHighest(arr, highest = -Infinity) {
//   if (!arr.length) return highest;
//   if (arr[0] > highest) highest = arr[0];
//   return findHighest(arr.slice(1), highest);
// }

// function findHighest(arr){
//   if (arr.length === 1)
//         return arr[0];
//     if (arr[0] > arr[1])
//         arr[1] = arr[0];
//     arr = arr.splice(1);
//     return findHighest(arr);
// }

// Examples
// console.log(findHighest([-1, 3, 5, 6, 99, 12, 2])) //➞ 99

// console.log(findHighest([0, 12, 4, 87])) //➞ 87

// console.log(findHighest([6,7,8])) //➞ 8
// Notes
// Please use the recursion to solve this (not the max() method).

// Create a function that takes a number num and returns its double factorial.

// function doubleFactorial(num) {
//   if (num === 0 || num === 1) return 1;
//   return num * doubleFactorial(num - 2); 
// }

// // Examples
// console.log(doubleFactorial(0)) //➞ 1

// console.log(doubleFactorial(2)) //➞ 2

// console.log(doubleFactorial(9)) //➞ 945
// // 9*7*5*3*1 = 945

// console.log(doubleFactorial(14)) //➞ 645120
// Notes
// Assume all input values are greater than or equal to -1.
// Try to solve it with recursion.
// Double factorial is not the same as factorial * 2.

// Create a function that takes an array and returns the sum of all items in the array.
//create a fxn called sumArray
//i: arr
//o: number ( sum)
//   function sumArray (arr, sum=0) {
//   //create a storage parameter for sum
//   // test 1st el in arr
// if (arr.length === 0) return sum;
//   if (typeof arr[0] === "number") {
//    //is el an arr or is a number sum +=arr[0]
//         // if el is a number => add to sum and reassin sum
//   } else {
//   //if el is an array write our recursive case
//     return sumArray (arr.slice(1), sum)
//   }
//   //slice the arr starting from index 1
//     //base case: when length of arr is zero

//   return sumArray (arr.slice(1), sum+arr[0])
//   }

// function sumArray(arr, result = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = sumArray(arr[i], result);
//     } else {
//       result += arr[i];
//     }
//   }
//   return result;
// }

// function sumArray(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result += sumArray(arr[i]);
//     } else {
//       result += arr[i];
//     }
//   }
//   return result;
// }

// function sumArray(arr) {
//   return arr.reduce((acc, num) => {
//     if (Array.isArray(num)) {
//       acc += sumArray(num);
//     } else {
//       acc += num;
//     }
//     return acc;
//   }, 0);
// }

// function sumArray(arr) {
// 	return arr.reduce((acc,cur)=> acc + (Array.isArray(cur)?sumArray(cur):cur),0)
// }


// Examples
// console.log(sumArray([1, 2, 3])) //➞ 6
// 1 + 2 + 3 = 6


// console.log(sumArray([1, [2, [1]], 3])) //➞ 7
// 1 + 2 + 1 + 3 = 7

// Create a function that takes a positive integer number (one of base2, base8, or base16) and converts the integer into the given base and returns a string using recursion.

// function integerToString(number, base) {
// 	return number.toString(base);
// }

// const HEX = "0123456789abcdef";
// const integerToString = (n, b) => n ? integerToString(n / b | 0, b) + HEX[n % b] : "";

// // Examples
// // console.log(integerToString(10 , 2)) //➞ "1010"
// // // Base = 2

// // console.log(integerToString(1642 , 8)) //➞ "3152"
// // // Base = 8

// // console.log(integerToString(212 , 16)) //➞ "d4"
// // Base = 16

// // Notes
// // Input is a positive integer and base = 2, 8, or 16.
// // Please use recursion to solve this.


// Write a function that returns the greatest common divisor (GCD) of two integers.

// function gcd(n1, n2, smallest=Math.min(n1, n2)) {
// 	//find smallest number using Math.min
// // console.log(smallest)
//   if (smallest === 0) return 1;
//   if ( n1 % smallest ===0 && n2 % smallest === 0) return smallest;
//   //decremet smallest number by 1 until mod by is eq zero for both nums
//   //base case the smallest num is eq zero return 1
//   //solve recursively
//   return gcd(n1, n2, smallest-1)
// }


// // Examples
// console.log(gcd(32, 8)) //➞ 8

// console.log(gcd(8, 12)) //➞ 4

// console.log(gcd(17, 13)) //➞ 1
// Notes
// Both values will be positive.
// The GCD is the largest factor that divides both numbers.

// Write a function that recursively determines if a string is a palindrome.

// function isPalindrome(str) { str = 'abcba' , str = 'bcb' , str = 'c' str = ''
// 	if (str.length < 1) return true;
//   if (str[0] !== str[str.length - 1]) return false;
//   return isPalindrome(str.slice(1, -1)); 'abcba', 'bcb', 'c', ''
// }

// // Examples
// console.log(isPalindrome("abcba")) //➞ true

// console.log(isPalindrome("b")) //➞ true

// console.log(isPalindrome("")) //➞ true

// console.log(isPalindrome("ad")) //➞ false
// Notes
// An empty string counts as a palindrome.


// Write a function that recursively returns the number of vowels in a string.

// function countVowels(str, index = 0, vowelCounter = 0) {
// 	//default parameter index = 0
//   //vowelCounter = 0
//   //base case: when !str[index] return counter
//   if (!str[index]) return vowelCounter;
//   //if str[index] is a vowel counter++
//   if (str[index] === 'a' || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u') vowelCounter++;
//   //recursive: call function and increment index by 1
//   return countVowels(str, index + 1, vowelCounter)
// }

// function countVowels(str,count=0) {
// 	let vowels = 'aeiou';
// 	if (str.length === 0) {
// 		return count;
// 	}
// 	if (vowels.includes(str[0])) {
// 		count++;
// 	}
// 	return countVowels(str.slice(1), count)
// }

// function countVowels(str){
//     if(str === '')return 0;

//     let count = 0;
//     if(/[aeiou]/g.test(str[0]))count++;

//     return count + countVowels(str.slice(1))
// }

// Examples
// console.log(countVowels("apple")) //➞ 2

// console.log(countVowels("cheesecake")) //➞ 5

// console.log(countVowels("bbb")) //➞ 0

// console.log(countVowels("")) //➞ 0
// Notes
// All letters will be in lower case.
// Vowels are: a, e, i, o, u.

// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// function add_suffix(suffix) {
// 	//return anon function
//   //anon fun takes in put
//   return (input) => {
//     return input + suffix;
//   }

// }

// // Examples
// const add_ly = add_suffix("ly")

// console.log(add_ly("hopeless")) //➞ "hopelessly"
// console.log(add_ly("total")) //➞ "totally"

// const add_less = add_suffix("less");

// console.log(add_less("fear")) //➞ "fearless"
// console.log(add_less("ruth")) //➞ "ruthless"

// An instructor has given her student an assignment to calculate the sum of the digits of a positive integer using recursion.The student came up with the solution but the solution does not seem to be correct. Help her fix the error.

// function sumDigit(positiveInteger) {
//     const num = [...positiveInteger.toString()];
//       // console.log(num)

// return num.reduce(function (acc,v) {
// return acc + +v
// console.log(acc)
// },0);
// }
// Examples
// console.log(sumDigit(111)) //➞ 3
// 1 + 1 + 1 = 3

// console.log(sumDigit(222)) //➞ 6
// 2 + 2 + 2 = 6

// console.log(sumDigit(333)) //➞ 9
// 3 + 3 + 3 = 9
// Notes
// Input is a positive integer.

// Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.

// function noYelling(phrase) {
//   // return phrase.replace(/([?!])+$/g, '$1')
//   const words = phrase.split(' ');
//   if (words[words.length-1].includes("?"))  {
//     words[words.length - 1] = words[words.length-1].slice(0, words[words.length-1].indexOf('?') + 1);
//   }
//   if (words[words.length-1].includes("!"))  {
//     words[words.length - 1] = words[words.length-1].slice(0, words[words.length-1].indexOf('!') + 1);
//     }
//   return words.join(' ');
// }

// Examples
// console.log(noYelling("What went wrong?????????")) //➞ "What went wrong?"

// console.log(noYelling("Oh my goodness!!!")) //➞ "Oh my goodness!"

// console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!")) //➞ "I just!!! can!!! not!!! believe!!! it!"
// Only change repeating punctuation at the end of the sentence.

// noYelling("Oh my goodness!") //➞ "Oh my goodness!"
// Do not change sentences where there exists only one or zero exclamation marks/question marks.

// noYelling("I just cannot believe it.") //➞ "I just cannot believe it."
// Notes
// Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
// Don't worry about mixed punctuation (no cases that end in something like ?!??!).
// Keep sentences that do not have question/exclamation marks the same.


// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// function reverseImage(image) {
// const result = [];
// for(let i = 0; i < image.length; i++) {
//   const subArr = [];
//   for(let j = 0; j < image[i].length; j++) {
//     let element =image[i][j];
//     if(element === 1) {
//       subArr.push(element - 1);
//     } else if(element === 0) {
//       subArr.push(element + 1);
//     }
//   }
//   result.push(subArr);
// }
// return result;

// }


// function reverseImage(image) {
// 	return image.map(v => v.map(x => +!x));
// }

// Examples
// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) //➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) //➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// console.log(reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ])) //➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]

// Create a function that takes in an array and returns an array of the accumulating sum.

// function accumulatingArray(arr) {
// 	//create new array
//   if (arr.length === 0) return [];
//   const newArray = [arr[0]]
//   //iterate through array
//   //i + 1 = i -1 + i
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i + 1] = arr[i] += arr[i + 1];
//     newArray.push(arr[i + 1])
//   } return newArray;
// }

// const accumulatingArray = arr => {
//   let sum = 0; 
//   return arr.map(num => (sum += num)); 
// };


// Examples
// console.log(accumulatingArray([1, 2, 3, 4])) //➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

// console.log(accumulatingArray([1, 5, 7])) //➞ [1, 6, 13]

// console.log(accumulatingArray([1, 0, 1, 0, 1]))// ➞ [1, 1, 2, 2, 3]

// console.log(accumulatingArray([])) //➞ []
// Notes
// An empty array input should return an empty array [].

// Given a number, n, return a function which adds n to the number passed to it.

function add(n) {

}

// Examples
// add(10)(20) //➞ 30

// add(0)(20) //➞ 20

// add(-30)(80) //➞ 50


/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'
tHE qUICK
*/

// function upper(str) {
//   str = str.toLowerCase();
//   const mapped = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
//   return mapped.join(' ');
// }

// console.log(upper('the quick brown fox'))

// Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr) {
//   let str = '';
// 	arr.forEach(function (el) {
//     str += el;
//   })
//   return str;
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"
// console.log(arrayToString([1, 2, , "a", "s", "dAAAA"])) //➞ "123asdAAAA"

// Examples

// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// function removeLeadingTrailing(n) {
// 	return Number(n);
// }

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples
// console.log(removeLeadingTrailing("230.000")) //➞ "230"

// console.log(removeLeadingTrailing("00402")) //➞ "402"

// console.log(removeLeadingTrailing("03.1400")) //➞ "3.14"

// console.log(removeLeadingTrailing("30")) //➞ "30"
// Notes
// Return a string.
// If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".

// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// function reverseWords(string) {
// 	const str = string.trim().split(' ').reverse();
//   return str.join(' ')
// }

// function reverseWords(str){
//   const words = str.split(' ');
//   return words.filter(Boolean).join(' ');
// }

console.log(Number('5'));

// function Number(val) {
//   return Number(val);
// }



// Examples. [] ''  , 'the', 'sky', 'is', 'blue']
// console.log(reverseWords(" the sky is blue")) //➞ "blue is sky the"

// console.log(reverseWords("hello   world!  ")) //➞ "world! hello"

// console.log(reverseWords("a good example")) //➞ "example good a"
// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.