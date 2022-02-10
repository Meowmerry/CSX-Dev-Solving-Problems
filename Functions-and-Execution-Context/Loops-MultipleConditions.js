

/* Challenge: Loops - Multiple Conditions
Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1. */
/* ========================== SOLUTION 1  ======================================
================================================================================ */

// input : two arrays of numbers;
// output : new arrays by following the condition
// create function addingAllTheWeirdStuff that takes two arrays as arguments
function addingAllTheWeirdStuff1(array1, array2) {
    // check if both arrays are the same length 
    if (array1.length !== array2.length) return "Array should be same length";
    // declare a variable sumOdd = 0;
    let sumOdd = 0;
    // declare a variable sumEven = 0;
    let sumEven = 0;
    // use a for loop to iterates thru array
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
console.log(addingAllTheWeirdStuff1([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff1([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// input : array
// output : array
// create a function addingAllTheWeirdStuff that takes two arrays;
function addingAllTheWeirdStuff(array1, array2) {
    // set a array of two postion index 0, and index 2 to find sumOdd and sumEven will be [sumOdd, sumEven]
    // set [sumOdd, sumEven] assign to array2 and use the reduce to find value of sumOdd and sumEven
    // in reduce, take two parameter will prev and curr value, 
    // check if curr  is a odd then update prev[0] = curr;
    // else curr is a even then update prev[1] = curr;
    // init reduce first time set to [0,0]
    const [sumOdd, sumEven] = array2.reduce((prev, curr) => {
        (curr % 2 !== 0) ? prev[0] += curr : prev[1] += curr;
        // console.log('prev', prev)
        return prev;
    }, [0, 0]) 
    // [sumOdd = 9, sumEven = 6] //  [sumOdd = 9, sumEven = 28]
    // declare a isMoreThan20 and set to  array2 is greater than 20 use a some();
    const isMoreThan20 = +array2.some(num => num > 20);
    // return array1, use a map to check if in array1 is odd, or even than reture array1;
    return array1.map(num => num + isMoreThan20 + (num < 10 ? sumOdd : sumEven))
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

/* ========================== SOLUTION 3  ======================================
================================================================================ */
// Input : Two Array
// Output : One array
function addingAllTheWeirdStuff(array1, array2) {
    // declear a varible sumEven and sumOdd assign to 0;
    let sumEven = 0;
    let sumOdd = 0;
    let isOverThen20 = false;
    // iterate thru array2 using a forEach loop to sum 
    array2.forEach(ele => {
        // check if each element is odd, reassign to sumOdd
        if (ele % 2 !== 0) {
            sumOdd += ele;
        } else {// otherwise, reassign to sumEven
            sumEven += ele;
        }
        // if array2, is greater than 20, set to true and add 1 to each elemen in array1
        if (ele > 20) {
            isOverThen20 = true;
        }
    })
    // iterate thre array1 using a forEach
    array1.forEach((ele, i) => {
        // check if current ele is under 10 add to sumOdd,
        if (ele < 10) {
            array1[i] = sumOdd + ele;
        } else if (ele > 10) { // if over then 10 add to sumEven 
            array1[i] = sumEven + ele;
        }
        if (isOverThen20) {
            array1[i] = array1[i] + 1;
        }
    });
    // return array1
    return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]


/* ========================== SOLUTION 4   ======================================
================================================================================ */
const addingAllTheWeirdStuff4 =  (arr1, arr2) => {
    // use  arr 2 to sumOdd or sumEven
   const [sumOdd, sumEven] = arr2.reduce((prev, curr)   => {
       curr % 2 !== 0 ? prev[0] += curr : prev[1] += curr;
       return prev;
   },[0,0])
    // check if element in arr2 is greater than 20 and set to 1
    const isMoreThan20 = +arr2.some(num => num > 20)
   
    // using map to add odd or even to the arr1
    return arr1.map(num => num + isMoreThan20 + (num < 10 ? num + sumOdd : num + sumEven))
}

console.log(addingAllTheWeirdStuff4([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff4([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
