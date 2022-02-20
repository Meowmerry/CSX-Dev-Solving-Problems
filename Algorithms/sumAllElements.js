/*
Create a function “sumAllElements” that takes in two arguments (an array of numbers and a initial value). “sumAllElements” will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops


Input : Array
Output : Number
*/
/* ============== SOLUTION 1 ====================== */
const sumAllElements = (arr, init, i = 0) => {
    if (!arr[i]) return init;
    return sumAllElements(arr, init += arr[i], i + 1)
}
console.log(sumAllElements([1, 2, 3, 4], 10))//-> 20
console.log(sumAllElements([1, 2, 3, 4], 20))//-> 30
console.log(sumAllElements([1, 2, 3, 4], 30))//-> 40


/* ============== SOLUTION 2 ====================== */
function sumAllElements(array, initialValue, i = 0) {
    if (array[i] === undefined) {
        return initialValue;
    }
    initialValue += array[i];
    return sumAllElements(array, initialValue, i + 1);
}
console.log(sumAllElements([1, 2, 3, 4], 10))//-> 20
console.log(sumAllElements([1, 2, 3, 4], 20))//-> 30
console.log(sumAllElements([1, 2, 3, 4], 30))//-> 40
