// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
/* 
Input : Array of string
Output: Array
declare a result with empty array 
iterate array use a for loop 
      use other for loop thru each element 
           check if the curent index === 0 change to upppercase

return result;
  
*/

const capMe = (array) => {
    // const result = [];
    // for (let i =0 ; i< array.length; i++){
    //   result.push(array[i][0].toUpperCase() + array[i].slice(1));
    // }
    //return result;
    return array.map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
}
// Examples
console.log(capMe(["mavis", "senaida", "letty"])) // ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) // ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) // ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
//   Notes
//   Don't change the order of the original array.
//   Notice in the second example above, "MABELLE" is returned as "Mabelle".


/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'
tHE qUICK
*/

const upper = (str) => {
    const result = str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    return result.join(' ')
}
console.log(upper('the quick brown fox'))  //The Quick Brown Fox