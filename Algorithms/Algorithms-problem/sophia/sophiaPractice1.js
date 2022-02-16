// 1. Write a function that returns the length of a string. Make your function recursive.

  // function length(string, count = 0) {
  //   // base case
  //   if (string === '') return count;
  //   return length(string.slice(1),count+1)
  // }

  // // Examples:
  // console.log(length("apple")) //➞ 5
  // console.log(length("make")) //➞ 4
  // console.log(length("a")) //➞ 1
  // console.log(length("")) //➞ 0

// 2. Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
  // Notes:
  // If the item is not present, return -1.
  // The given array is ordered.
  // function search(array, item) {
  //   let index = -1
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === item) {
  //       index = i
  //     }
  //   }
  //   return index
  // }

  // // Examples:
  // console.log(search([1], 0)) // -1
  // console.log(search([1, 2, 3, 4], 3)) //➞ 2
  // console.log(search([2, 4, 6, 8, 10], 8)) //➞ 3
  // console.log(search([1, 3, 5, 7, 9], 11)) //➞ -1

// 3. Given a number, return the total sum of that number multiplied by every number between 1 and 10.
  // function multiSum(number) {
  //   let total = 0;
  //   for (let i = 1; i < 11; i++) {
  //     total += i*number
  //   }
  //   return total
  // }

  //   // Examples:
  //   console.log(multiSum(1)) //➞ 55
  //   // 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
  //   console.log(multiSum(6)) //➞ 330
  //   // 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330
  //   console.log(multiSum(10)) //➞ 550
  //   console.log(multiSum(8)) //➞ 440
  //   console.log(multiSum(2)) //➞ 110

// 4. Write a function that reverses a string. Make your function recursive.
  // function reverse(string, reversed = '') {
  //   reversed += string.slice(string.length-1)
  //   if (string === '') return reversed
  //   return reverse(string.slice(0,string.length-1), reversed)
  // }

  // // Examples:
  // console.log(reverse("hello")) //➞ "olleh"
  // console.log(reverse("world")) //➞ "dlrow"
  // console.log(reverse("a")) //➞ "a"
  // console.log(reverse("")) //➞ ""
  // console.log(reverse("ab")) //➞ "ba"

// 5. Write a function that finds the sum of the first n natural numbers. Make your function recursive.

  // const sum = n => n===0 ? n : n+sum(n-1)

  // // Examples:
  //   console.log(sum(5)) //➞ 15
  // //1 + 2 + 3 + 4 + 5 = 15
  //   console.log(sum(1)) //➞ 1
  //   console.log(sum(2)) // => 3
  //   console.log(sum(12)) //➞ 78

// 6. Write a function that finds the sum of an array. Make your function recursive.
  // function sum(array) {
  //   if (!array.length) return 0;
  //   return array[0] + sum(array.slice(1))
  // }

  // // Examples:
  // console.log(sum([1, 2, 3, 4])) //➞ 10
  // console.log(sum([1, 2])) //➞ 3
  // console.log(sum([1])) //➞ 1
  // console.log(sum([])) //➞ 0

// 7. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
  // function addUp(n, total = 0) {
  // if (n < 0) throw new Error ('Please input a positive integer')
  //   for (let i = 1; i <= n; i++) {
  //     total += i
  //   }
  //   return total
  // }

  // // Examples:
  // console.log(addUp(1)); // 1
  // console.log(addUp(2)); // 3
  // console.log(addUp(4)) //➞ 10
  // console.log(addUp(13)) //➞ 91
  // console.log(addUp(600)) //➞ 180300
  // console.log(addUp(-5))

// 8. Create a function that calculates the number of different squares in an n * n square grid.
  // Explanation:
  // If n = 0 then the number of squares is 0
  // If n = 1 then the number of squares is 1 + 0 = 1
  // If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
  // If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
  // As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.
  // Notes:
  // Input is a positive integer.
  // Square pyramidal number. 
  // function numberSquares(n) {
  //   if (n < 0) throw new Error('Please input a positive integer')
  //   if (n === 0) return 0
  //   return (n**2) + numberSquares(n-1)
  // }

  // // Examples:
  // console.log(numberSquares(0)) // 0
  // console.log(numberSquares(1)) // 1
  // console.log(numberSquares(2)) //➞ 5
  // console.log(numberSquares(4)) //➞ 30
  // console.log(numberSquares(5)) //➞ 55

// 9. Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
  // Note: String.prototype.repeat() is not allowed
  // The second parameter of the function is positive integer.
  // function repetition(string,n) {
  //   if (n < 0) throw new Error ('Please input a positive integer')
  //   if (n === 1) return string
  //   return string + repetition(string,n-1)
  // }

  // // Examples:
  // console.log(repetition("ab", 3)) //➞ "ababab"
  // console.log(repetition("kiwi", 1)) //➞ "kiwi"
  // console.log(repetition("cherry", 2)) //➞ "cherrycherry"

//10. Write a function that calculates the factorial of a number recursively.
  // const factorial = n => n === 0? 1: n*factorial(n-1)

  // // Examples:
  // console.log(factorial(9)) //➞ 362880
  // console.log(factorial(5)) //➞ 120
  // console.log(factorial(4)) //➞ 24
  // console.log(factorial(3)) //➞ 6
  // console.log(factorial(2)) //➞ 2
  // console.log(factorial(1)) //➞ 1
  // console.log(factorial(0)) //➞ 1

//11. Create a function that finds the highest integer in the array using recursion.
  // Notes:
  // Please use the recursion to solve this (not the max() method).
  // function findHighest(array, max = -Infinity) {
  //   if (array.length === 0) return max;
  //   if (array[0] > max) max = array[0]
  //   return findHighest(array.slice(1), max)
  // }

  // // Examples:
  // console.log(findHighest([-1, 3, 5, 6, 99, 12, 2])) //➞ 99
  // console.log(findHighest([0, 12, 4, 87])) //➞ 87
  // console.log(findHighest([6,7,8])) //➞ 8

//12. Create a function that takes a number num and returns its double factorial.
  // Notes:
  // Assume all input values are greater than or equal to -1.
  // Try to solve it with recursion.
  // Double factorial is not the same as factorial * 2.
  // function doubleFactorial(n) {
  //   if (n <= 0) return 1
  //   return n*doubleFactorial(n-2)
  // }

  // //Examples:
  // console.log(doubleFactorial(0)) //➞ 1
  // console.log(doubleFactorial(2)) //➞ 2
  // console.log(doubleFactorial(9)) //➞ 945 ➞ 9*7*5*3*1 = 945
  // console.log(doubleFactorial(14)) //➞ 645120

//13. Create a function that takes an array and returns the sum of all items in the array.
  //create a fxn called sumArray
  //i: arr
  //o: number (sum)
  // function sumArray(array) {
  //   let newArray = array.flat()
  //   if (newArray.length === 0) return 0
  //   return newArray[0] + sumArray(newArray.slice(1))
  // }

  // // Examples:
  // console.log(sumArray([1, 2, 3])) //➞ 6
  // // 1 + 2 + 3 = 6
  // console.log(sumArray([1, [2, [1]], 3])) //➞ 7
  // // 1 + 2 + 1 + 3 = 7

//14. Create a function that takes a positive integer number (one of base2, base8, or base16) and converts the integer into the given base and returns a string using recursion.
  // Notes:
  // Input is a positive integer and base = 2, 8, or 16.
  // Please use recursion to solve this.

  // const HEX = "0123456789abcdef";
  // const integerToString = (n, b) => n ? integerToString(n / b | 0, b) + HEX[n % b] : "";

  // // Examples:
  // console.log(integerToString(10 , 2)) //➞ "1010"
  // // Base = 2
  // console.log(integerToString(1642 , 8)) //➞ "3152"
  // // Base = 8
  // console.log(integerToString(212 , 16)) //➞ "d4"
  // // Base = 16

//15. Write a function that returns the greatest common divisor (GCD) of two integers.
  // Notes:
  // Both values will be positive.
  // The GCD is the largest factor that divides both numbers.

  // function gcd(n1, n2) {
  //   // find the which number is smaller
  //   let min = Math.min(n1,n2);
  //   while (n1%min !== 0 || n2%min !== 0) {
  //     min = min-1
  //   }
  //   return min
  // }

  // // Examples:
  // console.log(gcd(32, 8)) //➞ 8
  // console.log(gcd(8, 12)) //➞ 4
  // console.log(gcd(17, 13)) //➞ 1

//16. Write a function that recursively determines if a string is a palindrome.
  // Notes: An empty string counts as a palindrome.

  // function isPalindrome(string, setString = string, reverse = '') {
  //   if (string === '') {
  //     return reverse === setString
  //   }
  //   reverse += string.slice(-1)
  //   return isPalindrome(string.slice(0,-1), setString, reverse)
  // }

  // // Examples:
  // console.log(isPalindrome("abcba")) //➞ true
  // console.log(isPalindrome("b")) //➞ true
  // console.log(isPalindrome("")) //➞ true
  // console.log(isPalindrome("ad")) //➞ false

//17. Write a function that recursively returns the number of vowels in a string.
  // Notes:
  // All letters will be in lower case.
  // Vowels are: a, e, i, o, u.

  // function countVowels(string, count = 0) {
  //   let regex = /[aeiou]/gi
  //   if (string.match(regex) === null) return 0
  //   return string.match(regex).length
  // }

  //   function countVowels(str){
  //     if(str === '')return 0;
  //     let count = 0;
  //     if(/[aeiou]/g.test(str[0])) count++;
  //     return count + countVowels(str.slice(1))
  // }

  //   // Examples:
  //   console.log(countVowels("apple")) //➞ 2
  //   console.log(countVowels("cheesecake")) //➞ 5
  //   console.log(countVowels("bbb")) //➞ 0
  //   console.log(countVowels("")) //➞ 0

//18. Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

  // function add_suffix(suffix) {
  //   function func(word){
  //     return word+suffix
  //   }
  // return func
  // }

  //   // // Examples:
  //   const add_ly = add_suffix("ly")
  //   console.log(add_ly("hopeless")) //➞ "hopelessly"
  //   console.log(add_ly("total")) //➞ "totally"
  //   const add_less = add_suffix("less");
  //   console.log(add_less("fear")) //➞ "fearless"
  //   console.log(add_less("ruth")) //➞ "ruthless"

//19. An instructor has given her student an assignment to calculate the sum of the digits of a positive integer using recursion.The student came up with the solution but the solution does not seem to be correct. Help her fix the error.
  // Notes:
  // Input is a positive integer.
  // function sumDigit(num) {
  //   let sum = 0;
  //   while (num !== 0) {
  //     sum += num%10
  //     num = Math.trunc(num/10)
  //   }
  //   return sum
  // }

  // // Examples:
  // console.log(sumDigit(111)) //➞ 3
  // // 1 + 1 + 1 = 3
  // console.log(sumDigit(222)) //➞ 6
  // // 2 + 2 + 2 = 6
  // console.log(sumDigit(333)) //➞ 9
  // // 3 + 3 + 3 = 9

//20. Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.
  // Notes:
  // Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
  // Don't worry about mixed punctuation (no cases that end in something like ?!??!).
  // Keep sentences that do not have question/exclamation marks the same.
  // Only change repeating punctuation at the end of the sentence.
  // noYelling("Oh my goodness!") //➞ "Oh my goodness!"
  // Do not change sentences where there exists only one or zero exclamation marks/question marks.
  // noYelling("I just cannot believe it.") //➞ "I just cannot believe it."
  
  // create function noYelling with string parameter
  function noYelling(string) {
    // base case
    if (string[string.length-1] !== string[string.length-2]) return string;
    // compare the last char of string === second to last char of string && === '!'; slice the end of string by 1
    if (string[string.length-1] === string[string.length-2] && string[string.length-2] === '!') {
    }
    if (string[string.length-1] === string[string.length-2] && string[string.length-2] === '?') {
  }
  return noYelling(string.slice(0,-1));
  }

  // let text = "What went wrong123456789"
  // console.log(text[text.length-1])
  // console.log(text[0])
// // Examples:
console.log(noYelling("What went wrong?????????")) //➞ "What went wrong?"
console.log(noYelling("Oh my goodness!!!")) //➞ "Oh my goodness!"
console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!")) //➞ "I just!!! can!!! not!!! believe!!! it!"

//21. Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.
// // create a function reverseImage that accepts an array as argument
// function reverseImage(array) {
// // initialize a result array
// let result = [];
// // use for loop to run through the arrays 
// for (let i = 0; i < array.length; i++) {
//   // use map to reverse the image and push into the result array
//   result.push(array[i].map(element => {
//     if (element === 0) return element = 1
//     if (element === 1) return element = 0
//   }))
// }
// // return result
// return result
// }

// // Examples:
// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) //➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// console.log(reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ])) //➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// console.log(reverseImage([
//   [1, 0, 0],
//   [0, 1, 0]
// ])) //➞ [
//   [0, 1, 1],
//   [1, 0, 1]
// ]

//22. Create a function that takes in an array and returns an array of the accumulating sum.
// Notes:
// An empty array input should return an empty array [].

// // create a function accumulatingArray that takes an array as an argument
// function accumulatingArray(array) {
// // create a scenerio if the array.length === 0 return []
// if (array.length === 0) return [];
// // initialize a result array with the first number of the array
// let result = [array[0]];
// // loop through the array adding the numbers before it
// for (let i = 1; i < array.length; i++) {
//   result.push(array[i]+result[i-1])
// }
// // return the array
// return result;
// }

// // // Examples:
// console.log(accumulatingArray([1, 2, 3, 4])) //➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// console.log(accumulatingArray([1, 5, 7])) //➞ [1, 6, 13]
// console.log(accumulatingArray([1, 0, 1, 0, 1]))// ➞ [1, 1, 2, 2, 3]
// console.log(accumulatingArray([])) //➞ []

//23. Given a number, n, return a function which adds n to the number passed to it.



// Examples:
// add(10)(20) //➞ 30
// add(0)(20) //➞ 20
// add(-30)(80) //➞ 50

//24. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// // Examples:
// console.log(upper('the quick brown fox'))

//25. Create a function that takes an array of numbers or letters and returns a string.

// // Examples:
// console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"
// console.log(arrayToString([1, 2, , "a", "s", "dAAAA"])) //➞ "123asdAAAA"

//26. Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

//27. Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).

//28. Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Notes:
// Return a string.
// If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".

// Examples:
// console.log(removeLeadingTrailing("230.000")) //➞ "230"
// console.log(removeLeadingTrailing("00402")) //➞ "402"
// console.log(removeLeadingTrailing("03.1400")) //➞ "3.14"
// console.log(removeLeadingTrailing("30")) //➞ "30"

//29. Given an input string, reverse the string word by word, the first word will be the last, and so on.
// Notes:
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.

// // Examples:
// console.log(reverseWords(" the sky is blue")) //➞ "blue is sky the"
// console.log(reverseWords("hello   world!  ")) //➞ "world! hello"
// console.log(reverseWords("a good example")) //➞ "example good a"

//30. There are two types of potions:
// Growing potion: “A”
// Shrinking potion: “B”
// If “A” immediately follows a digit, add 1 to the digit using your “addOne” function
// If “B” immediately follows a digit, subtract 1 from the digit using your subtractOne function
// Create a function “usePotions” that returns a string according to these rules, removing the potions once they’ve been consumed.

// SOLUTION USING CLOSURE
// create a function usePotionsOutter
    // function usePotionsOutter() {
    //   //  declare an empty variable result = '' (this will be used as a backpack, scope, COVE, whatever you want to call it create an embedded function that calls on result, adding to it almost like a recursion.
    //   let newString = '';
    //   function usePotionsInner(string, strLength = string.replace('A','').replace('B','').length) {
    //     // determine the length of the string without 'A' and 'B', this will be the base case to reset the newString and counter so that a new test case isn't added to the newString.

    //   // base case: if (string.length === 0) return newString
    //       if (string.length === 0) {
    //         return newString;
    //       }
    //       if (string[1] === 'A') {
    //         newString += Number(string[0])+1;
    //       } else if (string[1] === 'B') {
    //         newString += Number(string[0])-1;
    //       } else if (string[0] === 'A' || string[0] === 'B') {
    //         newString;
    //       } else {
    //         newString += string[0];
    //       }
    //       return usePotionsInner(string.slice(1))
    //     }
        
    // // return usePotion(string)
    //   return usePotionsInner
    // }

    // const usePotions = usePotionsOutter();


// SOLUTION USING RECURSION
// create a function usePotions that accepts a string, newString = ''
  // function usePotions(string, newString = '') {
  //   // base case: if (string.length === 0) return newString
  //     if (string.length === 0) return newString;
  //     if (string[1] === 'A') {
  //       newString += Number(string[0])+1;
  //     } else if (string[1] === 'B') {
  //       newString += Number(string[0])-1;
  //     } else if (string[0] === 'A' || string[0] === 'B') {
  //       newString;
  //     } else {
  //       newString += string[0];
  //     }
  //   // return usePotion(string)
  //     return usePotions(string.slice(1), newString)
  //   }

// SOLUTION USING HIGHER ORDER / CALLBACK METHOD
// // create a function usePotions that accepts a string as arg
// function usePotions(string) {
//   // create a new string variable
//   let string2 = '';
//   // changes using addOne and subtractOne
//   string2 = subtractOne(addOne(string));
//   // replace all A and B if exist
//   if (string2.includes('A')) {
//     string2 = string2.replace('A','');
//   }
//   if (string2.includes('B')) {
//     string2 = string2.replace('B','');
//   }
//   // return a new string
//   return string2
// }

// // create function addOne
// function addOne(string) {
//   let newString = ''
// // declare a variable of locA
// let locA = string.lastIndexOf('A')-1;
// // look for last index of string (A); -1 or index of A
// for (let i = 0; i < string.length; i++) {
//   if (i === locA) {
//     newString += Number(string[locA])+1;
//   } else {
//   newString += string[i]
//   }
// }
//   return newString
// }

// function subtractOne(string) {
//   let newString = ''
// // declare a variable of locA
// let locB = string.lastIndexOf('B')-1;
// // look for last index of string (A); -1 or index of A
// for (let i = 0; i < string.length; i++) {
//   if (i === locB) {
//     newString += Number(string[locB])-1;
//   } else {
//   newString += string[i]
//   }
// }
//   return newString
// }

// ARRAY MANIPULATION (ROBERT'S SOLUTION)
/* There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed. 
*/

// function addOne(num) {
//   return num + 1;
// }

// function subtractOne(num) {
//   return num - 1;
// }

// // Declare a function usePotions that accepts a single argument: a string 
// function usePotions(str) {
//   // Initiate an array variable (strArray) assigned the value of spliting the passed in string. Initiate a outputArray variable assigned an empty array
//   const strArray = str.split("");
//   const outputArray = [];
//   // Iterate through strArray using for loop
//   for (let i = 0; i < strArray.length; i++) {
//     // if the current element is not equal to "A" or "B" then push the element to outputArray
//     if(strArray[i] !== "A" && strArray[i] !== "B"  ) {
//       outputArray.push(strArray[i]);
//     }
//     // if the current element is equal to "A" then pop the last element off the outputArray and push the evaluted result of invoking addOne wiht the prior element passed in to outputArray.
//     if(strArray[i] === "A") {
//       outputArray.pop();
//       outputArray.push(addOne(Number(strArray[i-1])));
//     }
//     // if the current element is equal to "B" then pop the last element off the outputArray and push the evaluted result of invoking subtractOne wiht the prior element passed in to outputArray.
//     if(strArray[i] === "B") {
//       outputArray.pop();
//       outputArray.push(subtractOne(Number(strArray[i-1]));
//     }
//   }
//   // return the outputArray manipulated back into a string using .join method
//   return outputArray.join("")
// }

// ARRAY MANIPULATION (ANJANIE'S SOLUTION)
//   function usePotions(str, output = []) {
//   // input: string
//   // output: string

//   // recursive case:
//   // split the str and make it an array
//   // iterate through str
//   let strArray = str.split(""); // -> an array

//   // base case: 
//   // if str length is zero, return output
//   if (strArray.length === 0) return output.join('');
//   if (strArray[1] == 'A') {
//     output.push(addOne(Number(strArray[0])));
//   } else if (strArray[1] == 'B') {
//     output.push(subtractOne(Number(strArray[0])))
//   } else if (strArray[0] == 'A' || strArray[0] == 'B') {
//     output = output;
//   } else {
//    output.push(strArray[0]);
//   }

//   let arrayToString = strArray.join('');

//   return usePotions(arrayToString.slice(1), output); // -> using recursion to iterate
// }


// // Examples:
// console.log(usePotions('3A78B51')) //➞ “47751": 3 grows to 4, 8 shrinks to 7
// console.log(usePotions('9999B')) // ➞ “9998"
// console.log(usePotions('9A123')) // ➞ “10123"
// console.log(usePotions('567')) // ➞ “567"

/* PROBLEM 40 - Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. */
// If you want to know more: http://en.wikipedia.org/wiki/DNA

/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]