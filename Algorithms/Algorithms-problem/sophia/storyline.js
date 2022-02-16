// LEVEL 2 PRACTICE EXAM from LAWRENCE

// Declare a variable 'names' and set it to an array with the values 'Chris', 'Samantha', 'Richard', and 'Kyle' in it.


/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function 'societyName' that takes in an array of names and returns the name of the secret society.
For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS'
*/
​
/*
Create a function "concatWithSpace" that takes in two arguments (both will be strings). "concatWithSpace" should return the two strings concatenated with a space in between them.
For example, if the arguments are "hello" and "world" then "concatWithSpace" should return "hello world".
*/

/*Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
​
- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.
  */
  ​
// - The array is iterated over, passing the accumulator value and the next array element to the callback function.
  ​
// reduce function	
// const reducer = (prev, curr) => prev + curr;
​
// const newArray = [1, 2, 3, 4, 5];
// console.log(shorten(newArray, reducer, 0)); // expected output = 15

​
/*
Check that your 'shorten' function is working correctly by passing an array to it with the string values 'is', 'so', 'much' and 'fun!' as the first argument.
Pass your concatWithSpace function as our callback and the string 'Programming' as the initialValue argument. The result of this call to shorten should be the string 'Programming is so much fun!'
*/
​
​
​
​