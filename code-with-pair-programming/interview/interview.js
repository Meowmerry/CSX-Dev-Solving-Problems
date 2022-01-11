/*
Assign "*your first name*" to the variable firstName.
log this out to the console
*/
let firstName = "Meow";
// console.log(firstName); //'Meow'
/*
Assign "*your last name*" to the variable lastName.
log this out to the console
*/
let lastName = "Happy";
// console.log(lastName); //=> 'Happy'
/*
log to the console your full name without creating a new variable.
*/
// console.log(`${firstName} ${lastName}`); // 'Meow Happy'
/*
create a function that takes in that name string and outputs a string with all the vowels removed
  for example: "David" -> "Dvd"
*/
// Input : String
// Output : String
const createName = (string) => {
    // will take all vowels remove from input
    let vowels = ['a', 'e', 'i', 'o', 'u']; // 
    let output = "";
    // iterate thru input string using for loop
    for (let i = 0; i < string.length; i++) {
        // convert the letter to lowercase 
        let letter = string[i].toLowerCase()
        // check if vowel is indide of the object
        // if not, reassign output 
        if (!vowels.includes(letter)) {
            output += string[i];
        }
    }
    return output;
};
// console.log(createName("CodeSmith")) // CdSmth


/*
Create a function that takes in a string and returns that string in alternating cases starting with Upper Case
for example:
dog -> DoG
chair -> ChAiR
elephant -> ElEpHaNt */

// Input : string
// output : string with alternation casees starting iwth upperCase

// const alternatingWord = (str) => {
//     // declar a variable result
//     let result = "";
//     // iterate thru str using a for loop
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             result += str[i].toUpperCase();
//         } else if (i % 2 !== 0) {
//             result += str[i].toLowerCase();
//         }
//     }
//     return result;
// }
// console.log(alternatingWord('dog')) // DoG


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//input: string
//output: Boolean

//declare a function that takes a string
//the string needs to be .split after .reversed .joined
const isPalindrome = (str) => {
    const result = str.split('').reverse().join('');
    // if (str === result) {
    //     return true
    // } else { return false; }
    return str === result;
};
// console.log(isPalindrome("LEVEL"))  //--> true
// console.log(isPalindrome("RACECAR"))  //--> true
// console.log(isPalindrome("car"))  //--> false


/*
Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
The shorten function will have an "accumulator value" which will initially be set to the initialValue argument.
Its job is to accumulate the outputs of each call to the callback function.
The array is iterated over, passing the accumulator value and the next array element to the callback function.
The callback function's returned value becomes the new accumulator value
The next loop executes with the new accumulator value.
*/

// Input : Array, a function , intital Value;
// Output : 
const shorten = (arr, cb, init) => {
    // return arr.reduce((acc, curr) => {
    //     return cb(acc, curr);
    // }, init)
    return arr.reduce(cb, init);
}
// console.log(shorten([2, 3, 4], (num1, num2) => num1 + num2, 0)) 

const shorten1 = (arr, cb, init) => arr.reduce(cb, init);

console.log('shorten', shorten1([2, 3, 4], (num1, num2) => num1 + num2, 0))


/*
Create a function noseFinder that accepts an array of objects as an argument, and returns an array with the name of only the reindeer
with a red nose as a first value, and the name of the color of that reindeers nose as a second value.
Ex:

*/
// I : Array of Object
// O : Array with name as first value and nose red as second
const noseFinder = (array) => {
    // init acc ressign to empty array
    // iterate thru array input using reduce
    return array.reduce((acc, curr) => {
        // check if curr.nose is equal to red , and reassign curr by using push method
        if (curr.nose === "red") {
            acc.push(curr.name, curr.nose)
        }
        return acc;
    }, []);
}
const santasReindeer = [{ name: "Dasher", nose: "blue" }, { name: "Dancer", nose: "green" }, { name: "Prancer", nose: "yellow" }, { name: "Vixen", nose: "reds" },
{ name: "Comet", nose: "grey" }, { name: "Cupid", nose: "pink" }, { name: "Donner", nose: "brown" }, { name: "Blitzen", nose: "limegreen" },
{ name: "Rudolph", nose: "red" }]

// console.log(noseFinder(santasReindeer))// ["Rudolph", "red"]

// function noseFinder(array) {
//     // input: array of objects
//     // output: array
//     // declare an empty output array
//     const output = [];
//     // write if statement checking if nose color is red, push into array
//     array.forEach((reindeer) => {
//         if (reindeer.nose === "red") {
//             output.push(reindeer.name, reindeer.nose);
//         }
//         return output;
//     })
// }
// .find then you can return Object.values


/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.
Example:

*/
const countTimes = (arr, num) => {
    return arr.reduce((acc, curr) => {
        if (curr === num) {
            acc += 1;
        }
        return acc;
    }, 0)
}
// console.log(countTimes([1, 8, 9, 9, 10], 9)) //-> 2
// console.log(countTimes([1, 8, 1, 1, 10], 1)) //-> 3
// console.log(countTimes([10, 10, 9, 10, 10], 10)) //-> 4



/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") â 3
"D" shows up 3 times: twice in first row, once in third row. */


// input: array, and search val
// output: number of times the search val shows up


// create a function
// array.flat return into the countTimes function


function wordSearchLetterCounter(array, searchVal) {
    const newArray = array.flat();
    return countTimes(newArray, searchVal);
}

console.log(wordSearchLetterCounter([
    ["D", "E", "Y", "H", "A", "D"],
    ["C", "B", "Z", "Y", "J", "K"],
    ["D", "B", "C", "A", "M", "N"],
    ["F", "G", "G", "R", "S", "R"],
    ["V", "X", "H", "A", "D", "S", "S"]
], "D")) //-> D==>  4

