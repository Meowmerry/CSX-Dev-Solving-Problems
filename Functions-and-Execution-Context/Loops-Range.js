/*Challenge: Loops - Range
Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range. */
// forEach
function getTheRange(arr) {
    let max = -Infinity, min = Infinity;
    arr.forEach(val => {
        if (max <= val) max = val;
        if (min >= val) min = val;
    })
    return [min, max, max - min]
}
console.log(getTheRange([-3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]


// input : array of number
// output : array of min, max , range
function getTheRange1(arr) {
    // find max by using a Math.max and set to variable max
    const max = Math.max(...arr);
    // find min by using a Math.min and set to variable min
    const min = Math.min(...arr);
    // return newarry;
    return [min, max, max - min]
}
// Uncomment these to check your work!
console.log(getTheRange1([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

// For loop
function getTheRange3(arr) {
    // ADD CODE HERE
    const result = [];
    let max = -Infinity, min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) { max = arr[i] };
        if (min >= arr[i]) { min = arr[i] };
    }
    result.push(min, max, max - min)
    return result
}

// Uncomment these to check your work!
console.log(getTheRange3([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]


function getTheRange(arr) {
    // declare a variable to store low and high 
    let low = Infinity, high = -Infinity;
    // iterate thru arr use a forEach
    arr.forEach(val => {
        // check if high is less than current element, reassign high set to current element
        if (high <= val) {
            high = val;
        }
        // chec if low is greater than current element , reassign low set to current element
        if (low >= val) {
            low = val
        }
    })
    // return low, high and range(high - low) set to array []
    return [low, high, high - low]
}
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]


