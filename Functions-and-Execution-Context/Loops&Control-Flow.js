/*Challenge: Loops & Control Flow
Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element at the corresponding index in array2.*/

//create a function mergingTripletsAndQuints that acceptes two arrays of numbers as arguments
// function mergingTripletsAndQuints(array1, array2) {
//     // ADD CODE HERE
//     // iterate array1 by using a for loop
//     for (let i = 0; i < array1.length; i++) {
//         // if element in array1 devisible by 3 or 5,  then replaced with  the same of array2 as same index
//         if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
//             array1[i] += array2[i]
//         }
//     }
//     return array1
// }

// // Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

// input : two array 
// output : new array 
// create a function mergingTripletsAndQuints that takes
// function mergingTripletsAndQuints(array1, array2) {
//     // use a for loop to iterates thrugh array1
//     for (let i = 0; i < array1.length; i++) {
//         // determine on each element of array if divisible by 3 or 5
//         if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
//             // if so we will add the element to array1 which the corresponding in index array2
//             array1[i] += array2[i]
//         }
//     }
//     // return array1
//     return array1;
// }

// // Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

function mergingTripletsAndQuints(array1, array2) {
    return newArr = array1.map((ele, idx) => {
        if (ele % 3 === 0 || ele % 5 === 0) {
            return ele + array2[idx]
        } else {
            return ele;
        }
    })
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]