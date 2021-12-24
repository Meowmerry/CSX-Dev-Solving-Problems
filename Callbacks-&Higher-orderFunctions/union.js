// input : array of arrays
// output : array
// create a function union that takes array of arrays
const union = (arrays) => {
    // use reduce the iterate through the outer array of arrays;
    return arrays.reduce((accumulator, currentValues) => {
        // iterate through inner array use a forEach loop through currentValues
        currentValues.forEach((element) => {
            // check if current element in currentValues is not includes in accumulator then push to newArr;
            if (!accumulator.includes(element)) accumulator.push(element);
        });
        // return accumulator
        return accumulator;
    }, []); // initailize an empty array to be output;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]