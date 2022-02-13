/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge 8
There are n stairs. A person standing at the bottom wants to reach the top. 
The person can climb either 1 or 2 stairs at a time. 
Write a function countWaysToReachNthStair to count the number of ways 
the person can reach the top (order does matter). See test cases for examples.


console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
console.log(countWaysToReachNthStair(5)) //-> 3 ((1, 1, 1, 1, 1), (1, 1, 1, 2), (2, 2, 1))

/* ========================== SOLUTION 1  ===========================
============================================================================================= */
function fib(n) {
  // base case : if n <= 1 return product
  if (n <= 1) return n;
  // recursive case : invoke fib and passed in new input
  return fib(n - 1) + fib(n - 2); // 7 - 1 = 6  + 7 - 2 = 5 ==> 5 + 8 --> 13
}
function countWaysToReachNthStair(n) {
  return fib(n + 1);
}

console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
console.log(countWaysToReachNthStair(5)) //-> 8 // ((1, 1, 1, 1, 1), (1, 1, 1, 2), (2, 1, 1, 1) (2, 1, 2) , (1, 1, 2)) , (1, 2, 1, 1) ,(1, 1, 2, 1),,(2, 2, 1)