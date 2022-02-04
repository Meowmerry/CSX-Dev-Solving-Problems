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
function searches(array, item){
   for(let i = 0; i < array.length ;i++){
       if(array[i]=== item){
           return i;
       }
   }
   return -1;
}
console.log(searches([1, 2, 3, 4], 3)) //➞ 2

console.log(searches([2, 4, 6, 8, 10], 8)) //➞ 3

console.log(searches([1, 3, 5, 7, 9], 11)) //➞ -1
/* ======================== SOLUTION 1 ============================ */
const searches = (array, item, index = 0) =>{
    if(array[0] === item) return index;
    if(!array[index]) return -1;
    if(array[index] === item) return index;
    return searches(array, item, ++index)
}
console.log(searches([1, 2, 3, 4], 3)) //➞ 2
console.log(searches([4, 7, 9, 8, 10, 12] , 12)) //➞ 5
console.log(searches([2, 4, 6, 8, 10], 8)) //➞ 3
console.log(searches([1, 3, 5, 7, 9], 11)) //➞ -1
console.log(searches([11], 11)) //➞ 0
/* ======================== SOLUTION 2 ============================ */
const searches2 = (array, item, index = 0) =>{
    if(array[0]=== item) return index;
    if(!array.length) return -1;
    return searches2(array.slice(1), item, ++index)
}
console.log(searches2([1, 2, 3, 4], 3)) //➞ 2

console.log(searches2([2, 4, 6, 8, 10], 8)) //➞ 3

console.log(searches2([1, 3, 5, 7, 9], 11)) //➞ -1