// Write a function that returns true if there exists at least one number that is larger than or equal to n.
// Input : array of number and number
// Output : boolean

// creat fun accept array and number
// iterate thre array use for loop
// check current element  number is grater than 
// return true
// retrun false
/* =============  SOLUTION 1 ================ */
const existsHigher = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= n) return true;
    }
    return false
}

console.log(existsHigher([5, 3, 15, 22, 4], 10))// ➞ true
console.log(existsHigher([1, 2, 3, 4, 5], 8)) //➞ false
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)) //➞ true
console.log(existsHigher([], 5)) //➞ false

/* =============  SOLUTION 2 ================ */
const existsHigher2 = (arr, n) =>  Math.max(...arr) >= n;

console.log(existsHigher2([5, 3, 15, 22, 4], 10))// ➞ true
console.log(existsHigher2([1, 2, 3, 4, 5], 8)) //➞ false
console.log(existsHigher2([4, 3, 3, 3, 2, 2, 2], 4)) //➞ true
console.log(existsHigher2([], 5)) //➞ false