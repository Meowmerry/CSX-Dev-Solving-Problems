// console.log("Hello World!");
// Declare a variable 'number' and set it to the value 10.
let number = 10;


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
/* 
Input : Number
Output : Number
    create a sum assign to 0;
  iterated thru number 
        ressign sum 
    return sum
*/

// input: number
// output:number
// create a variable and set to zero
// create for looop
// return var


const addNumbers = (number) => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum;
}
// console.log(addNumbers(4)) // 10 


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
/*
Input : number
Output : boolean

check if numInput is greater than 50 and less than 500 
    return true
  otherwish, return false

*/
const between50And500 = (nums) => {
    if (nums > 50 && nums < 500) {
        return true;
    }
    return false;
  
}
// console.log(between50And500(45)); // false;
// console.log(between50And500(472)); // true;




/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
/*
Input : Number
Output : boolean
      if nums input div % 100 === 0 return true;
  else return false;
	
*/

const divBy100 = (nums) => {
    if (nums % 100 === 0) {
        return true;
    }
    return false;
}

// console.log(divBy100(250))// false
// console.log(divBy100(600))// true
// console.log(divBy100(452))// false




/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

/*
Input : number
Outp : boolean
 check if nums < 0 || nums % 2 === 0 return true
 else return false

*/
const negativeOrEven = (nums) => {
    if (nums < 0 || nums % 2 === 0) return true;
    else return false;
}

// console.log(negativeOrEven(7)) // false
// console.log(negativeOrEven(-3)) // true
// console.log(negativeOrEven(4)) // true



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

/*
Input : Array of all function, Number
Output : boolean
    invoke function passedin vale
  if all passed in are true return true
  else reutrn false;

*/

const passAllTests = (array, val) => {
    // array.forEach(fuc => {
    //     if (!fuc(val)) {
    //         pass = false;
    //     }
    // })
    // return true;
    return array.every(func => func(val))
}

console.log(passAllTests([between50And500, divBy100, negativeOrEven], 10)) // false
console.log(passAllTests([between50And500, divBy100, negativeOrEven], 7)) // false
console.log(passAllTests([between50And500, divBy100, negativeOrEven], 300)) // true
console.log(passAllTests([between50And500, divBy100, negativeOrEven], 250)) // false 


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by the 100, and a negative number OR even. Then test the number 250.
*/

/*
if number 300 > 50 && < 500 // true 
--> 300 / 100 -- > true
300 is negative or even  --> true
*/



/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

/*
Input : String
Output : boolean
     transform all string without space and to all lowercase
   base case : 
   - if string length === 0 return true;
   - if string at first char !== last char false
   recursive case : return fucntion with passed newInput
   newInput using slice(first and last)
*/

const isPalindrome = (string) => {

    //      string = string.replace(/\W/g, "").toLowerCase();

    //   	if( string.length === 0|| string.length === 1 ) return true

    //     if( string[0] !== string[string.length - 1] ) return false;

    // 		return isPalindrome( string.slice(1,-1) );
}



// console.log(isPalindrome("")) // true
// console.log(isPalindrome("LEVEL")) // true
// console.log(isPalindrome("RACECAR")) // true
// console.log(isPalindrome("hello world")) // fasle

/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2
*/
/* Input : string 
   Output : number
   
   create a variable count assign to 0
   base case : 
   if string is no length return 0
   
   
   recursive case :
*/

function countAbc(string, counter = 0) {
    //base case
    if (string === '') return counter;

    if (string.startsWith('abc') || string.startsWith('aba')) counter++;

    return countAbc(string.slice(1), counter)
}


// console.log(countAbc("abc")) //→ 1
// console.log(countAbc("abcxxabc")) //→ 2
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
*/
function stored (func){
    const cache = {}
    function inner(num){
       if(typeof num !== 'number') return "Please enter a valid number"
       else if(cache[num]){
         return `${num} : ${cache[num]}`;
       }else{
        cache[num]  = func(num)
        return cache[num];
       }
    }
    return inner;
}

const cube = (n) => n ** 3;
const cubeStored = stored(cube);
console.log(cubeStored(2)) //--> 8
console.log(cubeStored(2)) //--> '2: 8'
console.log(cubeStored(3)) //--> 27
console.log(cubeStored(3) )//--> '3: 27'
console.log(cubeStored('a')) //--> "Please enter a valid number"
console.log(cubeStored('a')) //--> "Please enter a valid number"
// console.log(cubeStored(2))//--> '2: 8'

function countAbc(str, count =0) {
    //o: count of abc AND aba
      
    //base case
      // when does not include abc or aba return count
     if (!str.includes("abc") && !str.includes("aba") ) return count; 
      //recursive case:
    //test is str includes val1 or val 2, inc count
      if (str.includes("abc"))  {
          count++
          str = str.replace("abc", "");
        return countAbc(str, count)
      } 
          
    if (str.includes("aba"))  {
          count++
          str = str.replace("aba", "");
        return countAbc(str, count)
      } 
        
      return countAbc(str, count)
    }
    
    console.log(countAbc("abc"))// → 1
    console.log(countAbc("abcxxabc"))// → 2
    console.log(countAbc("abaxxaba"))// → 2




