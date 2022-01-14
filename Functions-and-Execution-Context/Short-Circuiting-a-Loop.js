

/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: Short-Circuiting a Loop
Complete the function holidays that accepts an array of strings and iterates through the array. If the array contains the string "October", return "Happy Halloween". Otherwise, return the string "Have a great day!". Do not use a variable to store the result that you are returning.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// Input : Array of string// input : array of string;
// output : string 
function holidays(arr) {
    return arr.reduce((acc, curr) => {
        if (curr === 'October') {
            return `Happy Halloween`;
        }
        return `Have a great day!`
    })
}
/* ========================== SOLUTION 2  ======================================
================================================================================ */
// declear a function holidays that accepts an arary of strings
function holidays(arrOfString) {
    // use a for loop to iterate thru the input array
    for (let i = 0; i < arrOfString.length; i++) {
        // use a conditional to check each element of the array for the string 'October'
        // if the current element is "October", return 'Happy Halloween'
        if (arrOfString[i] === "October") return "Happy Halloween";
    }
    // return 'Have a great day!';
    return "Have a great day!";

}

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const holidays = (arr) => arr.reduce((acc, curr) => curr === 'October' ? `Happy Halloween` : `Have a great day!`)
// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"