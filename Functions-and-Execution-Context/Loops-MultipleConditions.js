/* Challenge: Loops - Multiple Conditions
Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1. */

// function addingAllTheWeirdStuff(array1, array2) {
//     // ADD CODE HERE
//     const [sumOdd, sumEven] = array2.reduce((prev, curr) => {
//         if (curr % 2 !== 0) prev[0] += curr;
//         else prev[1] += curr;
//         return prev;
//     }, [0, 0])
//     const moreThan20 = +array2.some(num => num > 20)
//     return array1.map(num => num + moreThan20 + (num < 10 ? sumOdd : sumEven))
// }

// // Uncomment these to check your work!
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22, 44])); // expected log [11, 13, 15, 46, 44, 11]

// input : two arrays of numbers;
// output : new arrays by following the condition
// create function addingAllTheWeirdStuff that takes two arrays as arguments
function addingAllTheWeirdStuff(array1, array2) {
    // check if both arrays are the same length 
    if (array1.length !== array2.length) return "Array should be same length";
    // declare a variable sumOdd = 0;
    let sumOdd = 0;
    // declare a variable sumEven = 0;
    let sumEven = 0;
    // use a for loop to iterates thru array1
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] % 2 !== 0) {// check on each element of array2 is odd number, re-assign sumOdd;
            // add sumOdd to each element array2 which is under 10;
            sumOdd += array2[i];
        } else if (array2[i] % 2 === 0) {// check on each element of array2 is even number, re-assign sumEven;
            // add sumOdd to each element array1 which is over 10;
            sumEven += array2[i];
        }
    }
    const isMoreThan20 = array2.some(e => e > 20)
    for (let i = 0; i < array1.length; i++) {
        console.log(isMoreThan20)
        if (array1[i] < 10) {
            array1[i] += sumOdd;
        } else if (array1[i] > 10) {
            array1[i] += sumEven;
        }
        if (isMoreThan20) {
            array1[i] += 1;
        }
    }
    //return array1;
    return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]


