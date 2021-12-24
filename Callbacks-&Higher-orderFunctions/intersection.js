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