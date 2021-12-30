/* Challenge: New Year's Resolutions
You and your friends are each making lists of your New Year's resolutions.

You want to write a function that will allow you to create and update a separate list for each person.

Create a function newYearsResolutions that returns a function. The returned function should take one string as an argument.

Each time the returned function is called, it should push the string into an array, then return that full array.

The array should contain the current string, as well as every string that the function was previously called with! */

// input : String
// output : Array of String
// create a function newYearsResolutions that will return a function and with no argument.
/* ========================== SOLUTION 1  ======================================
================================================================================ */
const newYearsResolutions = () => {
    // declare const result assign to empty array []
    const result = [];
    // return a function will accept string as argument, 
    return (string) => {
        // each time will push the string to the result
        result.push(string);
        // return result;
        return result;
    }
};

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const newYearsResolutions1 = () => {
    let resolutions = [];
    return resolution => {
        resolutions = [...resolutions, resolution];
        return resolutions;
    };
};

const myResolutions = newYearsResolutions();
const yourResolutions = newYearsResolutions();
console.log(myResolutions('Learn JavaScript')) // should log ['Learn JavaScript']
console.log(myResolutions('Cook delicious food')) // should log ['Learn JavaScript', 'Cook delicious food']
console.log(yourResolutions('Read more books')) // should log ['Read more books']
console.log(yourResolutions('Learn JavaScript')) // should log ['Read more books', 'Learn JavaScript']
