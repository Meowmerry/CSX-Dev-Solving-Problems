/* Challenge: arrayBuilder
Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped. */

// input : object;
// output : array
// create a function arrayBuilder that take count object
function arrayBuilder(obj) {
    // declare a variable output set to empty array [];
    const array = [];
    // use a for..in loop thru iterates thrugh the properties inside of the object
    for (let key in obj) {
        // inside or in loop, use for loop iterates objec[key]
        for (let i = 0; i < obj[key]; i++) {
            // update array by push key to array;
            array.push(key);
        }
    }
    // return array;
    return array;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []