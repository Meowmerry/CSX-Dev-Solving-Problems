
// Write a function called sumUpToN which accepts two parameters, an array of numbers, and a number we can call n. The function should return the sum of the numbers up to the index at n. If n is greater than the length of the array, return the sum of all the numbers in the array.

// Examples:
// sumUpToN([1,2,3],1) // 1
// sumUpToN([1,2,3],2) // 3
// sumUpToN([1,2,3],3) // 6
// sumUpToN([1,2,3],10) // 6

/* ================= SOLUTION 1 =================== */
function sumUpToN(array, num, i = 0, sum = 0) {
    if (!array[i]) return sum;
    if (i < num) sum += array[i];
    return sumUpToN(array, num, i + 1, sum)
}

console.log(sumUpToN([1, 2, 3], 1)) // 1
console.log(sumUpToN([1, 2, 3], 2)) // 3
console.log(sumUpToN([1, 2, 3], 3)) // 6
console.log(sumUpToN([1, 2, 3], 10)) // 6
/* ================= SOLUTION 2 =================== */
function sumUpToN(array, num) {
    return array.reduce((sum, curr, i) => {
        i < num ? sum += curr : sum;
        return sum;
    }, 0)
}
console.log(sumUpToN([1, 2, 3], 1)) // 1
console.log(sumUpToN([1, 2, 3], 2)) // 3
console.log(sumUpToN([1, 2, 3], 3)) // 6
console.log(sumUpToN([1, 2, 3], 10)) // 6

/* ================= SOLUTION 2 =================== */
const sumUpToN = (array, num) => array.reduce((sum, curr, i) => i < num ? sum += curr : sum)
console.log(sumUpToN([1, 2, 3], 1)) // 1
console.log(sumUpToN([1, 2, 3], 2)) // 3
console.log(sumUpToN([1, 2, 3], 3)) // 6
console.log(sumUpToN([1, 2, 3], 10)) // 6
