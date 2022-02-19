/*
Create a function 'charCount' that takes two arguments (the first argument is a single character) and
returns the number of times the character is found in the second argument.
For example, charCount('i', 'Codesmith') should return the number 1

Input : String
Output : Number
*/
/* ================ SOLUTION 1 Recursion ========================== */
const charCount = (target, string, i = 0, count = 0) => {
    if (!string[i]) {
        if (count === 0) return -1;
        else return count;
    };
    if (string[i] === target) count += 1;
    return charCount(target, string, i + 1, count)
}

console.log(charCount('i', 'Codesmith')); // 1
console.log(charCount('o', 'google')); // 2
console.log(charCount('a', 'banana')); // 3
console.log(charCount('e', 'elephent')); // 3
console.log(charCount('e', 'howlooo')); // -1

/* ================ SOLUTION 2 Loop ========================== */
const charCountLoop = (target, string) => {
    let count = 0;
    let i = 0;
    while (i < string.length) {
        if (string[i] === target) count += 1;
        i++;
    }
    if (count === 0) return -1;
    else return count;
}

console.log(charCountLoop('i', 'Codesmith')); // 1
console.log(charCountLoop('o', 'google')); // 2
console.log(charCountLoop('a', 'banana')); // 3
console.log(charCountLoop('e', 'elephent')); // 3
console.log(charCountLoop('e', 'howlooo')); // -1