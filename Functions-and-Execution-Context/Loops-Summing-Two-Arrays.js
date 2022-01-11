

/*Challenge: Loops - Summing Two Arrays
Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array */

/* ========================== SOLUTION 1  ======================================
================================================================================ */

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


/* ========================== SOLUTION 2  ======================================
================================================================================ */
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


/* ========================== SOLUTION 3  ======================================
================================================================================ */
const mergingElements = (array1, array2) => {
    return array1.reduce((acc, curr, i) => {
        acc.push(curr + array2[i])
        return acc;
    }, [])
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]


/* ========================== SOLUTION 4  ======================================
================================================================================ */
const mergingElements = (array1, array2) =>
    array1.reduce((acc, curr, i) => {
        acc[i] = curr + array2[i]
        return acc;
    }, [])

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]