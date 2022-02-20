/*
Write a function sumItUp which adds each element in an array (with an unknown number of elements) 
to find the array total.
*/

const sumItUp = (arr) => arr.reduce((acc, curr) => acc + curr)
console.log(sumItUp([1, 2, 3, 4])) // should log 10
console.log(sumItUp([20, 24, 1])) // should log 45