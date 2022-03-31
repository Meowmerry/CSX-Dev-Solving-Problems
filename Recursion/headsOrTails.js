/* 
Heads or Tails

Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays
function headsOrTails(n) {

}

To check if you've completed the challenge, uncomment this code!
console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
console.log(headsOrTails(3));
-> [
  ['heads', 'heads', 'heads'],
  ['heads', 'heads', 'tails'],
  ['heads', 'tails', 'heads'],
  ['heads', 'tails', 'tails'],
  ['tails', 'heads', 'heads'],
  ['tails', 'heads', 'tails'],
  ['tails', 'tails', 'heads'],
  ['tails', 'tails', 'tails'],
]
*/

function headsOrTails(n, buffer = [], ans = []) {
  if (buffer.length === n) {
    ans.push(buffer);
    return ans;
  }
  headsOrTails(n, [...buffer, "heads"], ans);
  headsOrTails(n, [...buffer, "tails"], ans);
  return ans;
}
console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
console.log(headsOrTails(3));