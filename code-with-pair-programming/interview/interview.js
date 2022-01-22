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









