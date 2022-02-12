/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2

*/
/* ===================  Solution 1 ============================== */
function countAbc(string, count = 0) {
  if(string === '') return count;
  if(string.startsWith('abc') || string.startsWith('aba')) count ++;
  return countAbc(string.slice(1), count);
}

console.log(countAbc("abc"));
console.log(countAbc("abcxxabc"));
console.log(countAbc("abaxxaba"));
/* ===================  Solution 2 ============================== */
function countAbc(string, count = 0) {
    const newString = string.replace(/x/g, "");
    //console.log('newString', newString)
    if (
      newString.slice(0, 3) !== "abc" &&
      newString.slice(0, 3) !== "aba" &&
      newString.length === 0
    )
      return count;
  
    return countAbc(newString.slice(3), count + 1);
  }
  
  console.log(countAbc("abc")); // 1
  console.log(countAbc("abcxxabc")); // 2
  console.log(countAbc("abaxxaba")); // 2
  
  /*You are given coins of different denominations and a total amount of money. 



Write a function to compute the fewest number of coins that you need to make up that amount. 



You may assume that you have an infinite number of each kind of coin.  */
  //Start writing your code below
// Input : Array of Number with number



//test cases
// denominations: 25 = quarter, 10 = dime, 5 = nickel, 1 = penny
console.log('1st Test:', coinChange([25, 10, 5, 1], 5));	// 1 (1 nickel)
console.log('2nd Test:', coinChange([25, 10, 5, 1], 20));	// 2 
console.log('3rd Test:', coinChange([25, 10, 5, 1], 90));	// 5