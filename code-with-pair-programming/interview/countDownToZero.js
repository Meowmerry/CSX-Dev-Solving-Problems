/* 
Challenge 1
Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
*/

// const countdown = (num, count = 0) => {
//     if (num === count) return count;
//     count++
//     console.log(num)
//     let newNum = num - count;
//     return countdown(newNum)
// }
// console.log(countdown(10))

const countdown = (num) => {
    if (num <= 0) return 0;
    else {
        console.log(num);
        return countdown(num - 1)
    }
}
console.log(countdown(10))