// function disemvowel(string) {
//     // ADD CODE HERE
//     //return string.replace(/[aeiou]/gi, '')
//     // create an object that will include all vowels to be check again;
//     const vowelsObj = {
//         'a': true,
//         'e': true,
//         'i': true,
//         'o': true,
//         'u': true
//     }
//     // create an empty string that will act as our result value;
//     let result = "";
//     // loop through the inputted string;
//     for (let i = 0; i < string.length; i++) {
//         // convert the letter to lowercase to catch uppercase inputs;
//         let letter = string[i].toLowerCase();
//         // check if the letter is inside of the object
//         if (!vowelsObj[letter]) {
//             // if not, concatenate that letter onto result
//             result += string[i]
//         }
//     }
//     // return result;
//     return result;

// }

// // Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


function disemvowel(string) {
    // create an empty string that will act as our result value;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = "";
    // loop through the inputted string;
    for (let i = 0; i < string.length; i++) {
        // convert the letter to lowercase to catch uppercase inputs;
        let letter = string[i].toLowerCase();
        // check if the letter is inside of the object
        // if not, concatenate that letter onto result
        if (!vowels.includes(letter)) {
            result += string[i]
        }
    }
    // return result;
    return result;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'