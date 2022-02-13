/*Create a function that takes an array of non-negative integers 
and strings and return a new array without the strings. */

const filterArrays  = (array)=>{
    return array.reduce((acc, curr, i) => {
        if(typeof curr === 'number'){
            acc.push(curr)
        }
        return acc;
    }, [])
}

console.log(filterArrays([1, 2, "a", "b"]))// ➞ [1, 2]
console.log(filterArrays([1, "a", "b", 0, 15]))// ➞ [1, 0, 15]
console.log(filterArrays([1, 2, "aasf", "1", "123", 123])) //➞ [1, 2, 123]

const filterArrays1  = (array)=> array.filter((ele) => typeof ele !== 'string')

console.log(filterArrays1([1, 2, "a", "b"]))// ➞ [1, 2]
console.log(filterArrays1([1, "a", "b", 0, 15]))// ➞ [1, 0, 15]
console.log(filterArrays1([1, 2, "aasf", "1", "123", 123])) //➞ [1, 2, 123]