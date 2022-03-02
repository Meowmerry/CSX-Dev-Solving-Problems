/*Create a function ‘containsJ’ that takes a string as an argument
‘containsJ’ should return a boolean value based off of whether or not the string being passed to it contains the letter ‘j’ or ’J.
For example, if the input is ‘Cat’ then your function should return false, and if the input is ‘Jaguar’ it should return true.

In : String
Out : Boolean

create a func take string as arguements

    iterate thru string 
      on element
            chcek if find J or j return true;
      otherwise return  false

*/
/* =================== SOLUTION 1 ===================== */
const containsJ = (str) => {
    return [...str].reduce((acc, curr) => {
        if (curr === "J" || curr === "j") {
            acc = true;
        }
        return acc;
    }, false);
};

console.log(containsJ("cat")); // false
console.log(containsJ("JavaScript")); // ture
console.log(containsJ("Jaquar")); // true

/* =================== SOLUTION 2 ===================== */
const containsJ2 = (str) => str.includes('J') || str.includes('j')
console.log(containsJ2("cat")); // false
console.log(containsJ2("JavaScript")); // ture
console.log(containsJ2("Jaquar")); // true