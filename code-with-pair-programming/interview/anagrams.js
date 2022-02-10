/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:

*/

// var groupAnagrams = function(strs) {
//     /* sort each string, use that as key in map and when new sorted string matches a key we add it to that */
//     const map = {};
    
//     for (const str of strs) {
//         const sorted = str.split('').sort().join('');
        
//         if (!map[sorted]) {
//             map[sorted] = [str];
//         } else {
//             map[sorted].push(str);
//         }
//     }
    
//     return Object.values(map);
// };
const anagrams = (str) =>{
    const map = {};
    for(const char of str){
        const sorted = str.split('').sort().join('');
        if(!map[sorted]) map[sorted] = char;
       console.log(map)
    }
}

console.log(anagrams('aabc')); // -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]