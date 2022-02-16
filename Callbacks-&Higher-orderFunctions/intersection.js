/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: intersection
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

 */
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array of array
// output : array of the same number from array input;
// create a function that takes three arrays in array as argument;
const intersection = (arrays) => {
    // declare a variable accumulator set to the last element of array input;
    let accumulator = arrays.pop();
  
    // use a while loop iterate throgh length of array input;
    while (arrays.length) {
        // declare a currentValue set to the the last element of the array input
        const currentValue = arrays.pop();
        console.log('currentValue',currentValue)
        // declear a result and set to empty array []
        let result = [];
        // use a forEach to iterate through currentValue to check 
        currentValue.forEach(element => {
            // if accumulator Array includes each element in currentValue, will add to result;
            if (accumulator.includes(element)) result.push(element)
        })
        // reassigned accumulator set to result;
        accumulator = result;
    }
    // return accumulator with alreay update;
    return accumulator;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

/* ========================== SOLUTION 2 ======================================
================================================================================ */
const intersection1 = (arrays) => {
    // using a reduce to iterates 
    return arrays.reduce((accumulator, currentValue) => {
        // declare a result variable set to empty []
        const result = [];
        // iterest thru currentValue by using a forEach
        currentValue.forEach((element) => {
            // check if the current element is including in accumulator array, so push to result;
            if (accumulator.includes(element)) result.push(element);
        })
        // reassign accumulator equal to result;
        accumulator = result;
        // return accumulator;
        return accumulator;
    }) // will not set initail accumulator, so accumulator will be the last array [1, 10, 15, 5, 20]; 
}

// Uncomment these to check your work!
const arr11 = [5, 10, 15, 20];
const arr21 = [15, 88, 1, 5, 7];
const arr31 = [1, 10, 15, 5, 20];
console.log(intersection1([arr11, arr21, arr31])); // should log: [5, 15]

/* ========================== SOLUTION 3 ======================================
================================================================================ */
const intersection3 = (arr) => {
    return arr.reduce((output, curr) => {
        return output.filter(ele => curr.includes(ele))
    })
}
const arr13 = [5, 10, 15, 20];
const arr23 = [15, 88, 1, 5, 7];
const arr33 = [1, 10, 15, 5, 20];
console.log(intersection3([arr13, arr23, arr33])); // should log: [5, 15]

/* ========================== SOLUTION 4 ======================================
Challenge: intersection
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 
BONUS - Use reduce!
================================================================================ */
/* 
In : Array
Out : New array

    iterate thru array use a reduce. (acc, curr)
            iterate and use a filter, check if each element is in the next array?
                if includes we will filter out, push to rest to acc
*/
// const intersection = arr => arr.reduce((acc,curr)	=> acc.filter(ele	=> curr.includes(ele)))
const intersection4 = (arr) => {
    return arr.reduce((acc, curr) => {
        const result = [];
        curr.forEach(ele => acc.includes(ele) ? result.push(ele) : acc)
        acc = result;
        return acc;
    })
}
const arr41 = [5, 10, 15, 20];
const arr42 = [15, 88, 1, 5, 7];
const arr43 = [1, 10, 15, 5, 20];
console.log(intersection4([arr41, arr42, arr43])); // should log: [5, 15]

/* ========================== SOLUTION 5 ======================================*/
/* 
*/
const intersection5 = arr => arr.reduce((acc,curr) => acc.filter(ele=> curr.includes(ele)))

const arr51 = [5, 10, 15, 20];
const arr52 = [15, 88, 1, 5, 7];
const arr53 = [1, 10, 15, 5, 20];
console.log(intersection5([arr51, arr52, arr53])); // should log: [5, 15]
/* ========================== SOLUTION 6 ======================================*/
/* 
Input : Array of sub 3 arrs
Ouput : Array 

create func intersection that takes array at arguments
    use reduce to interate thru array 
            set initialvalue with one array of 3 arrays input  will be accumulated
            set currentValue with the res of other array
            iterate thru accumulated use a filter
                if currentValue is incluesed in accumulated, return accmulated
*/
const intersection6 = arr => arr.reduce((acc, curr) => acc.filter(ele => curr.includes(ele)))
const arr61 = [5, 10, 15, 20];
const arr62 = [15, 88, 1, 5, 7];
const arr63 = [1, 10, 15, 5, 20];

console.log(intersection6([arr61, arr62, arr63])); // should log: [5, 15]

/* ========================== SOLUTION 7 ======================================*/