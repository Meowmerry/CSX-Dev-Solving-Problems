// LEVEL 2 PRACTICE EXAM from LAWRENCE

// Declare a variable 'names' and set it to an array with the values 'Chris', 'Samantha', 'Richard', and 'Kyle' in it.
const names = ['Chris', 'Samantha', 'Richard', 'Kyle'];

// TEST CASES:
console.log(names) // -> ['Chris', 'Samantha', 'Richard', 'Kyle']

/* A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function 'societyName' that takes in an array of names and returns the name of the secret society.
For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS' */

// declare a function societyName that accepts an array of strings as argument
function societyName (names) {
// declare a variable sorted assigned to the sorted array
const sorted = names.sort();
// declare a result variable
let result = ''
// iterate through the first index of each element
sorted.forEach(element => {
  result += element[0]
})
// return the alphabetical sort of first letter of each element
return result
}

// TEST CASES:
console.log(societyName(['Sophia', 'Boris', 'Emi', 'Ender'])) //-> BEES

/* Create a function "concatWithSpace" that takes in two arguments (both will be strings). "concatWithSpace" should return the two strings concatenated with a space in between them.
For example, if the arguments are "hello" and "world" then "concatWithSpace" should return "hello world". */

// declare a function concatWithSpace that accepts 2 strings as argument
function concatWithSpace (str1, str2) {
// return the two strings with a space concatenated between them
return `${str1} ${str2}`
}

console.log(concatWithSpace('hello', 'world!')) //-> 'hello world!'

/*Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
​
- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.
*/
//   ​
// // - The array is iterated over, passing the accumulator value and the next array element to the callback function.
// /*
// Check that your 'shorten' function is working correctly by passing an array to it with the string values 'is', 'so', 'much' and 'fun!' as the first argument.
// Pass your concatWithSpace function as our callback and the string 'Programming' as the initialValue argument. The result of this call to shorten should be the string 'Programming is so much fun!'
// */
// ​
// ​
// ​
// ​