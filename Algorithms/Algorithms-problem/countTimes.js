/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.
Example:
*/
const countTimes = (arr, num) => arr.reduce((acc, curr) => curr === num ? acc += 1 : acc, 0)
// console.log(countTimes([1, 8, 9, 9, 10], 9)) //-> 2
// console.log(countTimes([1, 8, 1, 1, 10], 1)) //-> 3
// console.log(countTimes([10, 10, 9, 10, 10], 10)) //-> 4

/*
 Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
 "wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter shows up in the word search.
 
 Example:
 wordSearchLetterCounter([
   ["D", "E", "Y", "H", "A", "D"],
   ["C", "B", "Z", "Y", "J", "K"],
   ["D", "B", "C", "A", "M", "N"],
   ["F", "G", "G", "R", "S", "R"],
   ["V", "X", "H", "A", "S", "S"]
 ], "D") ➞ 3
 "D" shows up 3 times: twice in first row, once in third row.
 */
const wordSearchLetterCounter = (array, value) => {

    const arrayFlat = array.flat();
    return countTimes(arrayFlat, value)
}

console.log(wordSearchLetterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "S", "S"]
], "D"))// ➞ 3