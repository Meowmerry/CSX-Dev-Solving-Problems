// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.
const randamNums = [1, 14, 7, 21, -6];


// Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
// NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
/*
Input :Array of Number
Out : New Array with 2 numbers


Create a function 'minAndMax' that takes an array of numbers
      declare a varible smallest assign to the fisrtIdx
    declare a varible largest assign to the firstIdx
    
        iterate thru array use a for loop 
            check if smallest is grater than current element 
            reassign current element to smallest;
        check if largest less than current element 
            reassign current element to largest
    
    return newArr with smallest and largest;
 
*/
const minArr = array =>{
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0 ;i < array.length  ;i ++){
        if(array[i] < min) min = array[i];
        if(array[i] > max) max = array[i];
    }
    return [min, max];
}
console.log(minArr([7, 68, 2, 19]))
console.log(minArr([1, 19, 3, 6])); // [1, 19]
console.log(minArr([20, 17, 14, 8])); // [8, 20]

const minAndMax = (array) => {

    let smallest = array[0];

    let largest = array[0];


    for (let i = 0; i < array.length; i++) {

        if (smallest > array[i]) smallest = array[i];

        else if (largest < array[i]) largest = array[i];

    }

    return [smallest, largest];

}
// console.log(minAndMax(randamNums)) // [-6, 21]
// console.log(minAndMax([7, 68, 2, 19])) // [2, 68]

// Create a function "addOne" that takes a number as and argument and returns that number plus one
// Input : Number
// Output : Number + 1;

const addOne = (number) => number + 1;
// console.log(addOne(9)) // 10



// Create a function "subtractOne" that takes a number as and argument and returns that number minus one
// Input : Number
// Output : Number - 1 
const subtractOne = (number) => number - 1;
// console.log(addOne(10)) // 11

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
usePotions("9999B") //➞ "9998"
usePotions("9A123") //➞ "10123"
usePotions("567") //➞ "567" 

Input : String
Output : String

Create a function "usePotions" that returns a string according to these rules,
        declare a variable output assign to empty string 
    	
        iterate thru string input use a for loop
      	    if the current element is equal to "A"
                    reassign output assign to invoke addOne function 
          
          check if the current element is equal to "B";
          
                        reassign output assign to invoke subtrctOne function 
              
          otherwise, check if the current. element not A and B 
                    reassign output to current element

        return output;
*/


/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/



/*
Write a function 'stored' that takes in a function and returns a new function. The new function
will check if it has already computed the result for the given argument. If it hasn't, it will
run the passed-in function on the argument and return the result. If it has, it will return
the stored argument along with its result. If an argument is not a number, the new function
will not store the argument and instead return the error message "Please enter a valid number".

Ex:
const cube = (n) => n ** 3;
const cubeStored = stored(cube);
cubeStored(2) --> 8
cubeStored(2) --> '2: 8'
cubeStored(3) --> 27
cubeStored(3) --> '3: 27'
cubeStored('a') --> "Please enter a valid number"
cubeStored('a') --> "Please enter a valid number"
cubeStored(2) --> '2: 8'
*/

/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/




























