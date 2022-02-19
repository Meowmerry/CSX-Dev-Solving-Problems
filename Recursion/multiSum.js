//Given a number, return the total sum of that number multiplied by every number between 1 and 10.
/* ================= SOLUTION Loop ================================== */
const multiSumLoop = (num) => {
    if(num < 1 || num > 10)  throw new Error('Please input valid number only between 1 to 10 only!')
    let sum = 0; 
    for(let i = 0 ; i <= 10 ; i += 1){
        sum += num * i;
        console.log('i', i ,'num ', num ,'sum',  sum)
    }
    return sum;
} 
console.log(multiSumLoop(1)) //➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

//console.log(multiSumLoop(6)) //➞ 330
// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

// console.log(multiSumLoop(10)) //➞ 550

//console.log(multiSumLoop(8)) //➞ 440

//console.log(multiSumLoop(2)) //➞ 110

/* ================= SOLUTION 1 Recursion ============================= */
// input Number 
// out Number

// base case 
// if number === 0 return sum
// recuresive case 
// num + callMultiSum passed in num - 1;


const multiSum = (num , ten = 10 , total = 0)=>{
    if(num < 1 || num > 10)  throw new Error('Please input valid number only between 1 to 10 only!')
    if(ten === 0) return total;
    return total + multiSum(num, ten - 1 , num * ten)
} 
console.log(multiSum(1)) //➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

console.log(multiSum(6)) //➞ 330
// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

console.log(multiSum(10)) //➞ 550

console.log(multiSum(8)) //➞ 440

console.log(multiSum(2)) //➞ 110

/* ================= SOLUTION 2 Recursion ============================= */
const multiSum1 = (num , count = 1 , total = 0)=>{
    if(num < 1 || num > 10)  throw new Error('Please input valid number only between 1 to 10 only!')
    if(count > 10 ) return total;
    return total + multiSum1(num, count + 1, num * count)
} 
console.log(multiSum1(1)) //➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

console.log(multiSum1(6)) //➞ 330
// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

console.log(multiSum1(10)) //➞ 550

console.log(multiSum1(8)) //➞ 440

console.log(multiSum1(2)) //➞ 110

/* ================= SOLUTION 3 Recursion ============================= */
function multiSum3(num, count =10, sum = 0, prod =1) {
  if (count === 0) return sum;
// console.log("num", num, "count", count, "sum", sum, "prod",prod)
return multiSum3(num, count-1, sum += (prod*(num *count)))
}
console.log(multiSum3(1)) //➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

console.log(multiSum3(6)) //➞ 330
// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

console.log(multiSum3(10)) //➞ 550

console.log(multiSum3(8)) //➞ 440

console.log(multiSum3(2)) //➞ 110