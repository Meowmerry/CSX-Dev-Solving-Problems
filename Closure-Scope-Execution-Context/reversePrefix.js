/*
2000. Reverse Prefix of Word
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

1Example 3:
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

Example 2:
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

Example 3:
Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
*/

const reversePrefix = function (word, ch) {
    // let newWord = word.slice(word.indexOf(ch) + 1, word.length);
    // let string = word.slice(0, word.indexOf(ch) + 1)
    // string = string.split('').reverse().join('');
    // return string + newWord;
    const idx = word.indexOf(ch) + 1;
    return [...word.slice(0, idx)].reverse().join('') + word.slice(idx)

};
console.log(reversePrefix('abcdefd', "d")) // "dcbaefd"
console.log(reversePrefix('xyxzxe', "z")) // "zxyxxe"
console.log(reversePrefix('abcd', "z")) // "abcd"