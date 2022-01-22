function reverseWords(string) {
    const str = string.trim().split(' ').reverse();
    return str.join(' ')
}

function reverseWords(str) {
    const words = str.split(' ');
    // return words.filter(function (el) {
    //     return Boolean(el)
    // }).join();
    return words.filter(Boolean).join(' ')
}


// Examples
console.log(reverseWords(" the sky is blue")) //➞ "blue is sky the"
console.log(reverseWords("hello   world!  ")) //➞ "world! hello"
console.log(reverseWords("a good example")) //➞ "example good a"
// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.