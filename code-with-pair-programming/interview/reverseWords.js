/* 
Notes
A word is defined as a sequence of non-space characters.
The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
Try to solve this in linear time.


======================== Solution 1 ===============*/
function reverseWords(string) {
    const str = string.trim().split(' ').reverse();
    return str.join(' ')
}

console.log(reverseWords(" the sky is blue")) //➞ "blue is sky the"
console.log(reverseWords("hello   world!  ")) //➞ "world! hello"
console.log(reverseWords("a good example")) //➞ "example good a"
/* ======================== Solution 1 ===============*/
function reverseWords2(str) {
    const words = str.trim().split(' ');
    // return words.filter(function (el) {
    //     return Boolean(el)
    // }).join();
    return words.filter(Boolean).join(' ')
}

console.log(reverseWords2(" the sky is blue")) //➞ "blue is sky the"
console.log(reverseWords2("hello   world!  ")) //➞ "world! hello"
console.log(reverseWords2("a good example")) //➞ "example good a"

/* ======================== Solution 3 ===============*/
function reverseWords3(str) {
    str = str.trim()
    return [...str].reduce((prev, next)=> next+prev)
}
console.log(reverseWords3(" the sky is blue")) //➞ "blue is sky the"
console.log(reverseWords3("hello   world!  ")) //➞ "world! hello"
console.log(reverseWords3("a good example")) //➞ "example good a"

function reverseString(str){

    const arr = [...str];
    let reverse= "";
  
    while(arr.length){
      // joining the reversed string
       reverse = reverse + arr.pop();
    }
  
    return reverse;
  }
  
  console.log(reverseString('hi')); // ih