/* Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.

Input : String, sub string , nubmer
Output : Boolean

create function strCopies take three aguments
      base case :
      - string is empty return false
      - if string starsWith substirng increment coutn by 1;
      - count is equal to value return true
      recursive case : invoke strCopies passed in stirng use slice
*/
const strCopies = (str, subStr, value, count = 0) => {
  if (str === '') return false;
  if (str.startsWith(subStr)) count += 1;
  if (count === value) return true;
  return strCopies(str.slice(1), subStr, value, count)
}

console.log(strCopies("catcowcat", "cat", 2))//=> true
console.log(strCopies("catcowcat", "cow", 2)) //=> false
console.log(strCopies("catcowcat", "cow", 1)) //=> true
