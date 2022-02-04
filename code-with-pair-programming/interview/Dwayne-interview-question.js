/* Declare a variable 'number' and set it to the value 10. */
let number = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

In : Number
Out : Number

Create a function 'addNumbers' that takes a number as an argument	
  declare a sum variable assign = 0;
        	
      iterate thru number use a for loop
            	
          reassign a sum add current number
          
      return sum 

*/

const addNumbers = (nums) => {

    let sum = 0;

    for (let i = 0; i <= nums; i++) {

        sum += i;

    }

    return sum;
}

// console.log(addNumbers(4)) // 10




/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.

In : Number
Out : Boolean

Create a function "between50And500" that takes a number as an argument
        check if numberInput > 50 and < 500 return true
        otherwish return false
        	
*/

const between50And500 = (nums) => {

    if (nums > 50 && nums < 500) return true;

    else return false;

}

// console.log(between50And500(45)) // false
// console.log(between50And500(472)) // true



/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.

In : Number
Out : Boolean 

Create a function "divBy100" that takes a number as an argument.
    check if nubmerInput idivisible by 100 return true;
    otherwise return false;

*/

const divBy100 = (nums) => {

    if (nums % 100 === 0) return true;

    else return false;

}

// console.log(divBy100(120)) // false
// console.log(divBy100(600)) // true


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.

In : Number
Out : Boolean

Create a function "negativeOrEven" that takes a number as an argument.
    check if numberInput < 0 OR numberInput divisible by 2 equal to 0 return 
    otherwise return false
    

*/

const negativeOrEven = (nums) => {

    if (nums < 0 || nums % 2 === 0) return true;

    else return false;

}
// console.log(negativeOrEven(7)) // false
// console.log(negativeOrEven(-3)) // true
// console.log(negativeOrEven(400)) // true



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false



In : array of func
Out : return inner func, with passed value


Create a function "passAllTests" that takes an array of functions and another value as arguments.
    	
            creat innerfunce will takes value as arguements
                	
            iterate thru funcArr use a for loop
                	
                check and and invoke current fucnArr with passed in value
                            if all not passed will return false
                      
                      
                otherwise return true;

declare variable result assign to passAllTests 

call result and passed value

*/

const passAllTests = (arrFunc) => {

    return (value) => {

        for (let i = 0; i < arrFunc.length; i++) {

            if (!arrFunc[i](value)) return false;

        }

        return true;

    }

}

const result = passAllTests([between50And500, divBy100, negativeOrEven]);
// console.log(result(250)) // false
// console.log(result(300)) // true


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by the 100, and a negative number OR even. Then test the number 250.
*/




/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")


In : String
Out : Boolean

Define a function "isPalindrome" that takes a string
        	
       reassign string to get out of all symble and spac transfrom to lowercase
       
       base case : 
       - if string length is 0 return false
       - if string lenght is 1 return true
       
       - if the first letter with the last letter of string not equal return false 
       
       recursive case : return and invoke isPrlindrom func with passed in new update input
                                                inInput using slice by 1 form first letter and -1 form last letter

*/
const isPalindrome = (str) => {
    // return str.split('').reverse().join('') === str;

    str = str.replace(/\W/g, '').toLowerCase();

    if (str.length === 0) return false

    if (str.length === 1) return true;


    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, -1));

}

console.log(isPalindrome("LEVEL")) // true
// console.log(isPalindrome("RACECAR")) // true
// console.log(isPalindrome("I love code smith and love to code")) // false



/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2


In : Stirng 
Out : Nubmer
    	
 Count recursively the total number of "abc" and "aba" substrings that appear in the given string.   
    declare a varible to count assign 0;
        base case : 
            - if string === '' return count
            - if string stars with abc OR string start with aba , increment count by 1
    
            recursive case : return countAbc with passe update newInput
                                            string with slice by one , count 
*/


const countAbc = (string, count = 0) => {

    if (string === "") return count;


    if (string.startsWith('abc') || string.startsWith('aba')) count++


    return countAbc(string.slice(1), count)

}

// console.log(countAbc("abc")) //→ 1
// console.log(countAbc("abcxxabc") )//→ 2
// console.log(countAbc("abaxxaba")) //→ 2



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


Input : callback fun
Output : new inner func 


Write a function 'stored' that takes in a function and returns a new function
                newinner will passed in value
                check if value is not a typeof nubmer return "Please enter a valid number".
        
         return with invoke callback fun and passed in values
         
  
*/

const stored = (cb) => {
    return (value) => {
        if (typeof value !== 'number') return "Please enter a valid number";
        return cb(value);
    }
}

const cube = (n) => n ** 3;
const cubeStored = stored(cube);
// console.log(cubeStored(2)) // --> 8
// console.log(cubeStored(3)) // --> 27
// console.log(cubeStored('a')) // --> "Please enter a valid number"


/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
oddCounter(); -> { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); -> false
oddCounter(); -> { true: 1, false: 1 }
*/


/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.

Input : string and target string
Output : Number

create a funct countChar that takes string and target string, and will declare count = 0
    base case : if string at count not equal to target return count
    increment count by 1;
    recursive case,
*/
// function countChar(string, target){
//     let count = 0;
//     for(let i = 0 ; i < string.length ; i++){
//         if(string[i] === target) count ++
//     }
//     return count;
// }
function countChar(string, target , index = 0,  count = 0 ){
     if(string === '') return count;
     if(string[index++] === target) count +=1;   
     if(!string[index]) return count;
     return countChar(string, target, index, count)
    
}
console.log(countChar('')) // 0
console.log(countChar('hello world', 'o')) // 2
console.log(countChar('javascript', 'j')) // 1
console.log(countChar('study js', 'c')) // 0

/*
Write a function 'subsetSum' that is given an array of integers and a target number. 
It should return true if there is a subset of the array that sums up to the target and returns false otherwise. 
A subset can be any size and the elements do not have to appear consecutively in the array.

Examples:
subsetSum([3, 2], 5)
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
*/