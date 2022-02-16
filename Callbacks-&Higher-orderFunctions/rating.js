/* Callback Challenge 
Create a function rating that accepts an array (of functions) and a value. 
All the functions in the array will return true or false. 
rating should return the percentage of functions from the array that return true when the value is used as input. 
1/2 .50 * 100 = 50
4/4 1
3/4 .75 * 100
1/4 .25 * 100 = 25
Input : Array of Func, value
Output : Number
    create func rating takes Array of Func, value
      declare a variable result assign to 0
      declare a count = 0
    	iterate thre arrFunc use forEach()
      			invoke current element and passed value
                   if true increment count by 1;
                reassign result = (count/arr.length) * 100 
    return result;
*/
function rating(arrOfFuncs, value) {
  let result = 0;
  let count = 0;
  arrOfFuncs.forEach((ele) => {
    if (ele(value)) {
      count += 1;
    }
    result = (count / arrOfFuncs.length) * 100;
  });
  return result;
}
// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0; // true
const greaterThanFour = (n) => n > 4; // true
const isSquare = (n) => Math.sqrt(n) % 1 === 0; // true
const hasSix = (n) => n.toString().includes("6"); // true
const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75
