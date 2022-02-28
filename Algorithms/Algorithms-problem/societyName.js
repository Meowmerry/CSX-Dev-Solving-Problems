/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function 'societyName' that takes in an array of names and returns the name of the secret society.

For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS'
*/
const societyName = (arr) => arr.map(ele => ele[0]).sort().join('');
console.log(societyName(['Adam', 'Sarah', 'Malcolm'])) // ASM
console.log(societyName(['Meow', 'Mandy', 'Joyly'])) // JMM
console.log(societyName(['Celilia', 'Sarah', 'Hanna'])) // CHS