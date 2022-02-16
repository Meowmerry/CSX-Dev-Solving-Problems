// PROBLEM 1: randomNums
  // Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

  //declare a const label assigned to an array with elements
  const randomNums = [1, 14, 7, 21, -6];

  // TEST CASES:
  // console.log(randomNums); // -> [1, 14, 7, 21, -6]

// PROBLEM 2: minAndMax
  /* Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
  NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68] */

    // declare a function minAndMax that accepts an array of nums as arg
    function minAndMax(arr) {
      // sort the numbers from smallest to largest
      let sort = arr.sort((a, b) => a - b);
      // return an array with smallest and largest num from arg; use index of 0 and last element index
      return [sort[0], sort[arr.length - 1]]
    }

  // TEST CASES:
  // console.log(minAndMax([1, 14, 7, 21, -6])) // -> [-6, 21]
  // console.log(minAndMax([5, 8, 9, 10, 82])) // -> [5, 82]

// PROBLEM 3: between50And500
  /* Create a function "between50And500" that takes a number as an argument.
  "between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
  For example, if the input is 45 then your function should return false and if the input is 472 it should return true. */

    // declare a function between50And500 that accepts a num as arg
    function between50And500(num) {
      // throw error if input type !== num
      if (typeof num !== 'number') throw new Error('Please input an integer as argument');
      // return boolean based on conditional statement
      return (num > 50 && num < 500)
    }

    // TEST CASES:
    // console.log(between50And500(82)); // -> true
    // console.log(between50And500(-82)); // -> false
    // console.log(between50And500(800)); // -> false

// PROBLEM 4: divBy100
  /* Create a function "divBy100" that takes a number as an argument.
  "divBy100" should return a true if the number passed to it is divisible by 100.
  For example, if the input is 120 then your function should return false and if the input is 600 it should return true. */

    // declare a function divBy100 that accepts an integer as arg
    function divBy100(num) {
      // throw error if arg type !== num
      if (typeof num !== 'number') throw new Error('Please input an integer as argument.')
      // return boolean result of conditional statement
      return (num % 100 === 0)
    }

    // TEST CASES:
    // console.log(divBy100(120)) // -> false
    // console.log(divBy100(1000)) // -> true
    // console.log(divBy100(120)) // -> false
    // console.log(divBy100(600)) // -> true

// PROBLEM 5: negativeOrEven
  /* Create a function "negativeOrEven" that takes a number as an argument.
  "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
  For example, if the input is 7 then your function should return false and if the input is -3 it should return true. */

    //declare a function negativeOrEven that accepts a num as arg
    function negativeOrEven(num) {
      // throw error if type of arg !== num
      if (typeof num !== 'number') throw new Error('Please input an integer as argument.')
      // return result of conditional statement
      return (num % 2 === 0 || num < 0)
    }

    // TEST CASES:
    // console.log(negativeOrEven(5)); // -> false
    // console.log(negativeOrEven(-2)); // -> true
    // console.log(negativeOrEven(8)); // -> true

// PROBLEM 6: passAllTests
  /* Create a function "passAllTests" that takes an array of functions and another value as arguments.
  Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
  If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false. */

  /* Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
  */

    //declare a function passAllTests that accepts an array of functions and a value as arg
    function passAllTests (arrCB, val) {
    // declare a bool variable assigned to true;
    bool = true;
    // iterate through all the cases, if a false appears, return false, else return true
    arrCB.forEach(cb => {
      if (cb(val) === false) {
        bool = false;
      }
    })
    return bool;
    }

    // TEST CASES:
    // console.log(passAllTests([divBy100, between50And500, negativeOrEven], 300)) // -> true
    // console.log(passAllTests([divBy100, between50And500, negativeOrEven], 500)) // -> false

// PROBLEM 7: usePotions
  /* There are two types of potions:
  Growing potion: “A”
  Shrinking potion: “B”
  If “A” immediately follows a digit, add 1 to the digit using your “addOne” function
  If “B” immediately follows a digit, subtract 1 from the digit using your subtractOne function
  Create a function “usePotions” that returns a string according to these rules, removing the potions once they’ve been consumed. */

  // Example:
  // console.log(usePotions('3A78B51')) ➞ //“47751"
  // usePotions(“9999B”)// ➞ “9998"
  // usePotions(“9A123”)// ➞ “10123"
  // usePotions(“567”)// ➞ “567"

    // declare funcs addOne and subtractOne respectively that accept num as arg and returns num +1 and num - 1
    function addOne(num) {
      return num+1;
    }
    function subtractOne(num) {
      return num-1;
    }

    // declare func usePotions that accept a string as arg
    function usePotions (str) {
      // initialize an empty result string
      let result = '';
      // iterate through the string elements
      for (let i = 0; i < str.length; i++) {
        // if i+1 === 'A' execute addOne
        if (str[i+1] === 'A') {
          result += addOne(Number(str[i]));
        // if i+1 === 'B' execute subtractOne
        } else if (str[i+1] === 'B') {
          result += subtractOne(Number(str[i]));
        } else {
          result += str[i];
        }
      }
      // return string replacing 'A' and 'B'
      return result.replace('A','').replace('B','')
    }

  // TEST CASES:
  // console.log(usePotions('3A78B51')) //➞ “47751"
  // console.log(usePotions('9999B')) // ➞ “9998"
  // console.log(usePotions('9A123')) // ➞ “10123"
  // console.log(usePotions('567')) // ➞ “567"

// PROBLEM 8: rollCall
  /* Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'. */

    // declare a function rollCall that accepts an array of names as arg
    function rollCall (arr) {
    // initialize a var name = '';
    let count = 0;
    // declare a function call
      function call () {
      // conditional statement if no name is passed, return 'Everyone accounted for'
      if (count >= arr.length) return 'Everyone accounted for'
      return arr[count++]
      }
    // return the call func
    return call
    }

    // TEST CASES:
    // const smallClass = rollCall(['Ana', 'Jeff', 'Sam', 'Kim']);
    // console.log(smallClass()); // -> 'Ana'
    // console.log(smallClass()); // -> 'Jeff'
    // console.log(smallClass()); // -> 'Sam'
    // console.log(smallClass()); // -> 'Kim'
    // console.log(smallClass()); // -> 'Everyone accounted for'
    // console.log(smallClass()); // -> 'Everyone accounted for'

// PROBLEM 9: isPalindrome
  /* Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome (a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR") */

    // declare a function isPalindrome that accepts a string as arg
    function isPalindrome (str) {
      // initialize a variable reverse
      let reverse = '';
      // iterate through the arg and += into reverse
      for (let i = str.length-1; 0 <= i; i--) {
        reverse += str[i];
      }
      // return conditional statement of reverse === str
      return (reverse === str)
    }

    // TEST CASES:
    // console.log(isPalindrome('racecar')) // -> true
    // console.log(isPalindrome('level')) // -> true
    // console.log(isPalindrome('false')) // -> false

// PROBLEM 10: itemRetriever
  /* Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
  The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
  When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever". */

  // declare a function itemRetriever that accepts an array and string as key
  // declare function favAuthor
  // return the next element in the array
  // return favAuthor function

// PROBLEM 11: sumAllElements
  /* Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value. Do not use any native JS methods or loops
    Example:
      sumAllElements([1,2,3,4], 10) -> 20Note: Do NOT use any native JS methods, or loops */

    // declare a function sumAllElements that accepts an array and initial value
    function sumAllElements (arr, initial) {
      // initialize a variable result
      let result = 0;
      //  if initial is defined, set result = initial
      if (initial) {
        result = initial
      }
      // create a basecase to stop the recursion
      if (arr.length === 0) return result
      // iterate through the arr using reduce
      result += arr[0];
      // return sum of all elements in the array
      return result + sumAllElements(arr.slice(1))
    }

    // TEST CASES:
    // console.log(sumAllElements([1,2,3,4], 10)) // - > 20

// PROBLEM 12: uniqueNumber
  /* Write a function that takes in an array in which every number appears exactly twice, except for one number which appears exactly once. The function should return the number that appears exactly once.

  Ex. uniqueNumber([1,1,4,2,3,2,3]) should return the number 4 since it is the number that appears exactly once in the array */

    // declare a function 
