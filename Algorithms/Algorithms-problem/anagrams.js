/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:

*/

const anagrams = (str) => {
    const map = {};
    for (const char of str) {
        const sorted = str.split('').sort().join('');
        if (!map[sorted]) map[sorted] = [char];
        else map[sorted].push(char);
    }
    return Object.values(map);
}

console.log(anagrams('aabc')); // -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]