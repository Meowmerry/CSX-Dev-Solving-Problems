/*
Write a function that takes in an array and returns a new array with duplicates removed
Ex: deleteDups(['a','a','a']) -> ['a']
*/
// Input : Array
// Output : New Array

// create a function take array
// declare a result assign to new Set with passed arr 
// return result

/* =============== SOLUTION 1 ================== */
const deleteDups = (arr) => [...new Set(arr)];
console.log(deleteDups2(['a', 'a', 'a'])) // -> ['a']
console.log(deleteDups(['b', 'b', 'a'])) // -> ['b', 'a']
console.log(deleteDups(['c', 'c', 'a'])) // -> ['c', 'a']


/* =============== SOLUTION 2 ================== */
const deleteDups2 = (arr) => arr.filter((ele, idx) => arr.indexOf(ele) == idx)
console.log(deleteDups2(['a', 'a', 'a'])) // -> ['a']
console.log(deleteDups2(['b', 'b', 'a'])) // -> ['b', 'a']
console.log(deleteDups2(['c', 'c', 'a'])) // -> ['c', 'a']

/* =============== SOLUTION 3 ================== */
const deleteDups3 = (arr) => {
    return arr.filter((el, idx) => {
        return arr.indexOf(el) === idx;
    })
}

const deleteDups4 = (arr) => {
    return Array.from(new Set(arr))
}
//Array.from(new Set(array))
console.log(deleteDups4(['a', 'a', 'a'])) // -> ['a']
console.log(deleteDups4(['b', 'b', 'a'])) // -> ['b', 'a']
console.log(deleteDups4(['c', 'c', 'a'])) // -> ['c', 'a']