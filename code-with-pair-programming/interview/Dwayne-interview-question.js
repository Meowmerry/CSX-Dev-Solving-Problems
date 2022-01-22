/* Declare a variable 'number' and set it to the value 10. */
let number = 10;


/* Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. 

Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function */


/* Create a function "between50And500" that takes a number as an argument. "between50And500" should return a true if the number passed to it is between 50 and 500 exclusive. For example, if the input is 45 then your function should return false and if the input is 472 it should return true. */
/* 

*/

const between50And500 = (nums) => {
    if (nums > 50 && nums < 500) {
        return true;
    } else {
        return false;
    }
}
console.log(between50And500(45)) // false
console.log(between50And500(475)) // true
console.log(between50And500(50)) // false
console.log(between50And500(500)) // false
console.log(between50And500(420)) // true



/* Create a function "divBy100" that takes a number as an argument. "divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true. */

/* 
Input number, 
Output boolean 
 if num / 100 retrun true
 else num / 100 return false
*/
const divBy100 = (nums) => {
    if (nums % 100 === 0) return true;
    else return false;
}
// console.log(divBy100(120)) // false
// console.log(divBy100(420)) // false




/* Create a function "negativeOrEven" that takes a number as an argument. "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number. For example, if the input is 7 then your function should return false and if the input is -3 it should return true. */

/*
Input : Number
Output : Boolean
 check if nums input is greater than or eqult to 0  return false
 otherwise return true
*/

const negativeOrEven = (nums) => {
    if (nums >= 0) return false
    else return true;
}
// console.log(negativeOrEven(7)) // false;
// console.log(negativeOrEven(-3)) // true;
// console.log(negativeOrEven(20)) // false;



/* Create a function "passAllTests" that takes an array of functions and another value as arguments. 
Each function in your array will return a boolean value. 
"passAllTests" should pass your value argument to each function. 
If all functions in your array return true then "passAllTests" will return true. 
Otherwise "passAllTests" should return false */

/*
Input : Array of function, Value of nums
Output : Boolean, which check in passed funciton

    iterate thru array
        check on each element, check if the value passed with invoking each func all true
    return true
    otherwise, rerurn false;
*/

const passAllTests = (funcArr, value) => {
    if (funcArr[0](value) && funcArr[1](value) && funcArr[2](value)) {
        return true;
    }
    return false;
}

// 300 > 50 ?? 300 < 500 ?? 300 / 100 // check 300 is negative or even
/* Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250. */


const evenNumFunc = (num) => num % 2 === 0; // return true
console.log(passAllTests([between50And500, divBy100, evenNumFunc], 300)) // true
// console.log(passAllTests([divBy100, between50And500, evenNumFunc], 345)) // false
// console.log(passAllTests([divBy100, between50And500, evenNumFunc], 420 )) // false


/* Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome (a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR") */

/*
Input : String
Output : Boolean
    move all space out, 
    change string to be all lowercase 
  base case :
  1) check string.length is equal to 0 return true
  2) check string at first is not equal to the last string return false
  recursive case : 
  return isPalindrome with passed in newinput
  newinput : string with slice from frist and last
*/

const isPalindrome = (string) => {
    string = string.replace(/\W/g, '').toLowerCase();
    if (string.length === 0) return true;
    if (string[0] !== string[string.length - 1]) return false;
    return isPalindrome(string.slice(1, -1));
}
// console.log(isPalindrome('LEVEL')) // true
// console.log(isPalindrome('RACECAR')) // true;
// console.log(isPalindrome('lla mall')) // true;  lla mall => llma all
// console.log(isPalindrome('hello world')) // false;
// console.log(isPalindrome('')) // true;
// console.log(isPalindrome('a')) // true;
// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true











