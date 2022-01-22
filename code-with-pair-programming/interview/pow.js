/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 * 2* 0 = 2
 * 2*1 = 2 
 * 2 *2 = 4
  * 4* 2= 8
   8* 2 = 16
  * Use recursion
 */
const pow = (x, y, product = 1) => {
    // base case : 
    if (y === 0) return product;
    // recursive case: 
    return x * pow(x, y - product)
}
console.log(pow(2, 4)) // 16