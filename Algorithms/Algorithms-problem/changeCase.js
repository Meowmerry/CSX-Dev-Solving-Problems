/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.

Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'

In : string
Out : Strin 
create a funce take string as argument s
    if string is lowercase changeto upperecse  return 
    else return string to lowercase
*/
const changeCase = (letter) => {
    if (letter === letter.toLowerCase()) return letter.toUpperCase();
    else return letter.toLowerCase();
}
// console.log(changeCase('a')) //-> 'A'
// console.log(changeCase('B')) //-> 'b'
// console.log(changeCase('C')) //-> 'c'

