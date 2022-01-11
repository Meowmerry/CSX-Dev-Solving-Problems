/*
Challenge: For Loops - Updating Array Elements
Using a FOR loop, write a function addN which adds the argument n to each number in the array arr and returns the updated arr. 
*/

function addN(arr, n) {
    // ADD CODE HERE
    // use a for loop to iterates thru arr and add n to each element
    for (let i = 0; i < arr.length; i++) {
        //arr.push(arr[i] + n);
        arr[i] += n;
    }
    return arr;
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]