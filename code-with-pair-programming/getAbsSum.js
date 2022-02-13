/*Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// Input : Array
// Output : Number
// Create a fun that take array 
		// declare a result varible assign to 0
    	// iterate thru array 
      		// use Math.abs to postivie 
          	// reassign sum add current element         
  return sum;    
*/
const getAbsSum = (array) =>
  array.reduce((acc, curr) => acc + Math.abs(curr), 0);

console.log(getAbsSum([2, -1, 4, 8, 10])); //➞ 25

console.log(getAbsSum([-3, -4, -10, -2, -3])); //➞ 22

console.log(getAbsSum([2, 4, 6, 8, 10])); //➞ 30

console.log(getAbsSum([-1])); //➞ 1
