// create a function that takes and aray of items, removes all duplicate items and returns a new array in the new same sequential oreder as the old array (minus duplicates).

/*
creat a function that takes array of items.  
   declare a result assign to empty array
    use a new Set  to remove out of the same item
    return result
*/

const removeDups = (array) => {
    const newArr = [...new Set(array)]
    return newArr;
}
console.log(removeDups([1, 2, 1, 0, 0])) // [ 1, 2, 0 ]
console.log(removeDups(['The', 'big', 'cat'])) //['The', 'big', 'cat']
console.log(removeDups(['John', 'Taylor', 'John'])) // ['John', 'Taylor']


/*
creat a function that takes array of items.  
   declare a result assign to empty array
    iterate thru the array
    check if the current element is already exits, remove push to the new array
*/

const removeDups1 = (array) => {
    const result = [];
    array.filter((ele, idx, arr) => {
        if (arr.includes(ele)) {
            result.push(ele)
        }
    })
    return result;
}

console.log(removeDups1([1, 2, 1, 0, 0])) // [1,0]
console.log(removeDups1(['The', 'big', 'cat'])) //['The', 'big', 'cat']
console.log(removeDups1(['John', 'Taylor', 'John'])) // ['John', 'Taylor']


const removeDups2 = (array) => {
    return array.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr)
        return acc;
    }, [])
}

console.log(removeDups2([1, 2, 1, 0, 0])) // [1,0]
console.log(removeDups2(['The', 'big', 'cat'])) //['The', 'big', 'cat']
console.log(removeDups2(['John', 'Taylor', 'John'])) // ['John', 'Taylor']



