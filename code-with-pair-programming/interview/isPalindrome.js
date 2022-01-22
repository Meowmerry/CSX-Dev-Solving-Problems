
/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//input: string
//output: Boolean

//declare a function that takes a string
//the string needs to be .split after .reversed .joined
const isPalindrome = (str) => {
    const result = str.split('').reverse().join('');
    // if (str === result) {
    //     return true
    // } else { return false; }
    return str.split('').reverse().join('') === str;
};
console.log(isPalindrome("LEVEL"))  //--> true
// console.log(isPalindrome("RACECAR"))  //--> true
// console.log(isPalindrome("car"))  //--> false
console.log(isPalindrome("a")); //-> true
console.log(isPalindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(isPalindrome("llama mall")); //-> true
console.log(isPalindrome("jmoney")); //-> false


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

