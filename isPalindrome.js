/* 
Is Palindrome
A palindrome is a word that is spelled the same forwards and backwards. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

Write a recursive function, isPalindrome, to check if a string is a palindrome. Return true if the string is a palindrome; otherwise, return false.

Input : String
Output : Boolean


creat a function that accept a string as arguments
    - get rid of all space or any symble and transform all to lowercase
    - base case : check if string has no length return true;
    - recursive : call the Palindrome itself, 
        newInput will check if the first letter and the lastletter are not equal,  will call function and passed in string use a slice with (1, -1)
*/
const isPalindrome = (string) => {
    string = string.replace(/\W/g, '').toLowerCase();
    if (!string.length) return true;
    return string[0] === string[string.length - 1] && isPalindrome(string.slice(1, -1))
}
console.log(isPalindrome('a')); // => true
console.log(isPalindrome('')); // => true
console.log(isPalindrome('Kayak')); // => true
console.log(isPalindrome('NEVERODDOREVEN')); // => true
console.log(isPalindrome('Tacocat')); // => true
console.log(isPalindrome('straw warts')); // => true
console.log(isPalindrome('this is not a palindrome')); // => false
console.log(isPalindrome('hello, I love $%# to code and learn Js ')); // => false