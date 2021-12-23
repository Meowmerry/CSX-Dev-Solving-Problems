/*Challenge: Loops - Summing Two Arrays
Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array */

// create a function mergingElements that acceptes two arrays of numbers
function mergingElements(array1, array2) {
    // iterate element using a for loop 
    // update array1 by add array2 then return array1
    for (let i = 0; i < array1.length; i++) array1[i] += array2[i]
    return array1;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

// input : two arrays as arguments
// output : new arrays
// create a function mergingElements 
function mergingElements(array1, array2) {
    // check if array1.length !== array2.length;
    if (array1.length !== array2.length) return `Please input the same length of array!`
    // declare a variable newArr = []
    let newArr = [];
    // use a for loop to iterate thrught array1 
    for (let i = 0; i < array1.length; i++) {
        // add each element and pushing to newArr 
        newArr.push(array1[i] + array2[i]);
    }
    // return newArr;
    return newArr;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]