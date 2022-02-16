// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// Input : String
// Output : String with the first letter to Uppercase
// create a func that take string
// reassign string to array use split method to change sting to array
// declare a result variable to string empty
// iterate thre arr use a for loop
// connvers the first index to uppercase 
//  reassign result 
// join array to string
/* ================== Solution 1 ================================ */
const upper = (str) => {
    str = str.split(' ')
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i][0].toUpperCase() + str[i].slice(1))
    }
    return result.join(' ')
}
console.log(upper('the quick brown fox')) //  'The Quick Brown Fox '

/* ================== Solution 2 ================================ */
const upper2 = (str) => {
   const newArr = []
   return str.split(' ').reduce((acc, curr , idx, arr)=>{
       newArr.push(curr[0].toUpperCase() + arr[idx].slice(1))
       acc = newArr.join(' ')
       return acc
   },'')
}
console.log(upper2('the quick brown fox')) //  'The Quick Brown Fox '

/* ================== Solution 3 ================================ */
const upper3 = (str) => {
    const newArr = []
    str.split(' ').forEach((ele, idx,arr) => {
        newArr.push(ele[0].toUpperCase() + arr[idx].slice(1))
    });
    return newArr.join(' ')
 }
 console.log(upper3('the quick brown fox')) //  'The Quick Brown Fox '