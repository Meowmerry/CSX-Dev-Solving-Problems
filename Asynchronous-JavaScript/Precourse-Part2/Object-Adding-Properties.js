/* Challenge: Objects - Adding Properties
You are provided with an array, possibleIterable. Using a for loop, 
build out the object divByThree so that each key is an element of possibleIterable 
that is divisible by three. The value of each key should be the array index at 
which that key can be found in possibleIterable.*/

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
// iterate over possibleIterable using a for loop
for (let i = 0; i < possibleIterable.length; i++) {
    // determine if current element is divisible by 3
    if (possibleIterable[i] % 3 === 0) {
        // if so, assign new key value pair to divByThree
        // key is current element, value is current index
        divByThree[`${possibleIterable[i]}`] = i
    }
}
console.log(divByThree)