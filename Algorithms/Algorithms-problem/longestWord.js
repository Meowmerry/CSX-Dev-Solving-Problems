/* Create a function longestWord that that retuns the longest word of a sentence.
 If there are ties, the function should return the later word. */
const longestWord = (sentence) => {
    const words = sentence.split(' ');
    return words.reduce((acc, curr) => {
        if (curr.length >= acc.length) {
            acc = curr;
        }
        return acc;
    }, '')
}
console.log(longestWord("This is a sentence"));