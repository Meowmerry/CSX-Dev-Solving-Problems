// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
/* creat a func call searches that take array of number */
/* 
create func searches that take array
    
    base case :
    - if first array has only one item return first index
    - if array has no length return -1;
    increment index
    recursive case 
    call searches func and passed in array slice to check , item , index
*/
const searches = (array, item, index = 0) =>{
    if(array[0]=== item) return index;
    if(!array.length) return -1;
    index++
    return searches(array.slice(1), item, index)
}
console.log(searches([1, 2, 3, 4], 3)) //➞ 2

console.log(searches([2, 4, 6, 8, 10], 8)) //➞ 3

console.log(searches([1, 3, 5, 7, 9], 11)) //➞ -1