/*
Combos of Any length

Modify this function so that it returns all combinations of the elements of arr as an array of arrays. Use Recursion!

function getAllCombos(arr) {

}

To check if you've completed the challenge, uncomment this code!
console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
console.log(getAllCombos(['a', 'b', 'c']));
-> [
  ['a', 'b', 'c'],
  ['a', 'b'],
  ['a', 'c'],
  ['a'],
  ['b', 'c'],
  ['b'],
  ['c'],
  [],
]
 */

function getAllCombos(arr, buffer = [], ans = [], index = 0) {
  if (index === arr.length) {
    ans.push(buffer);
    return ans;
  }

  getAllCombos(arr, [...buffer, arr[index]], ans, index + 1);
  getAllCombos(arr, [...buffer], ans, index + 1);

  return ans;
}
console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
console.log(getAllCombos(['a', 'b', 'c']));