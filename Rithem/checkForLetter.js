
// Write a function called checkForLetter that takes in two arguments, a string and a letter. If the string contains the letter, return true, otherwise, return false. The string and the letter will only contain lowercase characters and neither will be empty strings.

// example:
// checkForLetter('potato', 'o') // true
// checkForLetter('taco', 'z') // false
// checkForLetter('brontosaurus', 'b') // true

/* =================== SOLUTION 1 ============================ */
function checkForLetter(string, letter) {
    if (string.includes(letter)) return true;
    else return false;
}
// console.log(checkForLetter('potato', 'o')) // true
// console.log(checkForLetter('taco', 'z')) // false
// console.log(checkForLetter('brontosaurus', 'b')) // true

/* =================== SOLUTION 2 ============================ */
const checkForLetter2 = (str, letter, i = 0) => {
    if (str[i] === undefined) return false;
    if (str[i] === letter) return true;
    return checkForLetter2(str, letter, i + 1)
}

console.log(checkForLetter2('potato', 'o')) // true
console.log(checkForLetter2('taco', 'z')) // false
console.log(checkForLetter2('brontosaurus', 'b')) // true
