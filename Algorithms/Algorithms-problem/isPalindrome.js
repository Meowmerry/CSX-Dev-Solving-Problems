
/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/
/*
Input : String
Output : Boolean

Define a function "isPalindrome" that takes a string and returns a boolean 
   reassign string by removing all space and symbol and using split and join method
   crete a reverse string, remove all space , symbol using split and reverse string and join method
   compare the two strings, if strictly equal, return true

*/


const isPalindrome = (str) => {
  str = str.replace(/\W/g,'').toLowerCase();
  const reverse = [...str].reverse().join('');
  return str === reverse;
};
console.log(isPalindrome("LEVEL"))  //--> true
console.log(isPalindrome("RACECAR"))  //--> true
console.log(isPalindrome("car"))  //--> false
console.log(isPalindrome("a")); //-> true
console.log(isPalindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(isPalindrome("llama mall")); //-> true
console.log(isPalindrome("jmoney")); //-> false

/* ====================== SOLUTION 1 ============================ */
//declare fun that accepts a string
//create reversed variable using split, reverse, and join methods
//compare the two strings, if strictly equal, return true
function isPalindrome1(string) {
    const reversed = string.split(``).reverse().join(``);
    if (string === reversed) return true;
    return false;
  }
  console.log(isPalindrome1("LEVEL"))  //--> true
  console.log(isPalindrome1("RACECAR"))  //--> true
  console.log(isPalindrome1("car"))  //--> false
  console.log(isPalindrome1("a")); //-> true
  console.log(isPalindrome1("Anne, I vote more cars race Rome-to-Vienna")); //-> true
  console.log(isPalindrome1("llama mall")); //-> true
  console.log(isPalindrome1("jmoney")); //-> false
