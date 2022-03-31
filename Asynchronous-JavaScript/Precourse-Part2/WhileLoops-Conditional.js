/*
Challenge: While Loops - Conditional Expression
Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.

 */

let addThis = 0;
let sum = 0;
while (addThis < 10) {
    sum += addThis;
    addThis++
}
console.log(sum);