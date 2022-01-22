/*
Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
The shorten function will have an "accumulator value" which will initially be set to the initialValue argument.
Its job is to accumulate the outputs of each call to the callback function.
The array is iterated over, passing the accumulator value and the next array element to the callback function.
The callback function's returned value becomes the new accumulator value
The next loop executes with the new accumulator value.
*/

// Input : Array, a function , intital Value;
// Output : 
const shorten = (arr, cb, init) => {
    // return arr.reduce((acc, curr) => {
    //     return cb(acc, curr);
    // }, init)
    return arr.reduce(cb, init);
}
// console.log(shorten([2, 3, 4], (num1, num2) => num1 + num2, 0)) 

const shorten1 = (arr, cb, init) => arr.reduce(cb, init);

console.log('shorten', shorten1([2, 3, 4], (num1, num2) => num1 + num2, 0))

