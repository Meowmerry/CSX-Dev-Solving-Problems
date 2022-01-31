// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.
/*
Input : Array 
Output : Array with 2 unique



*/
const returnUnique = (array)=>{
   return array.filter((ele, idx, arr) => arr.indexOf(ele) === idx)
}
// Examples
console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])); // ➞ [9, 7]

// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])); // ➞ [2, 1]

// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])); // ➞ [5, 6]