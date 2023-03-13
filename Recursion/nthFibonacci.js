
/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, 
 * and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the 
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be 
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the 
 * performance difference.
 */

 function nthFibonacci(num) {
    const storage = {};
  
    function inputFibonacci(num) {
      if (storage[num]) return storage[num];
      else {
        if (num === 0) return 0;
        if (num === 1) return 1;
        storage[num] = inputFibonacci(num - 1) + inputFibonacci(num - 2)
        return storage[num]
      }
    }
    return inputFibonacci(num)
  }