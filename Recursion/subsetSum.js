/*
Write a function 'subsetSum' that is given an array of integers and a target number. 
It should return true if there is a subset of the array that sums up to the target and returns false otherwise. 
A subset can be any size and the elements do not have to appear consecutively in the array.

Examples:
subsetSum([3, 2], 5)
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)

Input : Array and Number of target
Output : Boolean

create a function that take array and number
*/
function subsetSum(arr, target) {
  // base case : if arr has no length return false;
  if (arr.length === 0) return false;
  // declare the initvalue assign to first element
  const initValue = arr[0];
  // base case : check if the initValue is equal to target return true;
  if (initValue === target) return true;
  // declare the rest of arr with the next element use slice method
  const restOfArr = arr.slice(1);
  // declare the resultWithInit assign to invoking subsetSum func and passed restOfArr, target decrement initvalue
  const rusultWithInit = subsetSum(restOfArr, target - initValue)
  // base case : if result return result
  if (rusultWithInit) return rusultWithInit
  // declare the resultWithoutInit assign to invoking subsetSum func and passed restOfArr, target
  const resultWithoutInit = subsetSum(restOfArr, target)
  // if resultWithoutInit is not undefind return resultWithoutInit
  if (resultWithoutInit) return true;
  // return false
  return false;
}
console.log(subsetSum([3, 2], 5)); //-> true (3 + 2 = 5)
console.log(subsetSum([3, 7, 4, 2], 5)); //-> true (3 + 2 = 5)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); //-> true (3 + 12 + 5 + 12 = 32)
console.log(subsetSum([8, 2, 4, 12], 13)); //-> false
console.log(subsetSum([8, -2, 1, -3], 6)); //-> true (8 + 1 + (-3) = 6)



