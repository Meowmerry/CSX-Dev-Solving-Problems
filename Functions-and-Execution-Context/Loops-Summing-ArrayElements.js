/* Challenge: For Loops - Summing Array Elements
Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.*/

// declear a getTheSum fuction that acceptes an array of number
function getTheSum(arr) {
    // ADD CODE HERE
    // declear a variable to store sum and set initial value to 0;
    let sum = 0;
    // use a for loop iterate through an arr 
    for (let i = 0; i < arr.length; i++) {
        // adds each element in the arr to sum 
        sum += arr[i]

    }
    return sum;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

// Input: arr of number
// Output: number of sum each element in arr;
// create function getTheSum, takes arr as argument;
// function getTheSum(arr){
//     // declare a varialbe result = 0;
//     let result = 0;
//     // use a for loop iterate thue on each element;
//     for (let i = 0; i < arr.length ; i ++) {
//         // update result by add each element together
//           result +=(arr[i])
//     }
//     return result
//   }
  
//   // Uncomment these to check your work!
//   console.log(getTheSum([3, 6, 9])); // expected log 18
//   console.log(getTheSum([10, 11, 12])); // expected log 33