/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); // -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]


*/

const anagrams = (string) => {


}

console.log(anagrams('aabc')); // -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]


const allAnagrams = function (string) {

    function findAnagrams(start, stringRemainder) {
        if (stringRemainder.length === 1) {
            return [start + stringRemainder];
        } else {
            let results = [];
            for (let i = 0; i < stringRemainder.length; i++) {
                let anagram = findAnagrams(stringRemainder[i], stringRemainder.substr(0, i) + stringRemainder.substr(i + 1));
                for (let j = 0; j < anagram.length; j++) {
                    results.push(start + anagram[j]);
                }
            }

            return results;
        }
    }

    return findAnagrams('', string);
};

console.log(allAnagrams('aabc'));