/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/
/*
Input : Array 
Output : Array of min and max
Create a function minAndMax that takes array of Nubmer
declare an empty array

    iterate through my array
    pull out the smallest and largest num
        push into array
        return array
*/
function minAndMax(array) {
    let smallest = Infinity;
    let largest = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        } 
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    // return result;
    return [smallest, largest];
}

console.log(minAndMax([4, 8, 15, 7])); // [4, 15]
console.log(minAndMax([1, 19, 3, 6])); // [1, 19]
console.log(minAndMax([20, 17, 14, 8])); // [8, 20]

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest 
and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. 
For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
/* 
Input : Array 
Output : New Array with Min and Max Number

    create a function minAndMax that takes Array of Nubmer
        declare a variable smallest assign to -Infinity
        declare a varialbe largest assign to Infinity
        iterate through array use a for loop
            check a  

*/
const minAndMaxNumber = (array)=>{
  const result =  array.sort((a,b) => a - b)
  return [result[0], result[result.length - 1]]
}
console.log(minAndMaxNumber([4, 8, 15, 7])); // [4, 15]
console.log(minAndMaxNumber([1, 19, 3, 6])); // [1, 19]
console.log(minAndMaxNumber([20, 17, 14, 8])); // [8, 20]
