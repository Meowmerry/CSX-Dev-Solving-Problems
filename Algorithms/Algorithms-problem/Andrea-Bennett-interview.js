// Name: Andrea Bennett	
// Email: AndreaBennett42@gmail.com	
// Preferred Cohort: Los Angeles April 2022

/*
Create a function "countChar" that takes two arguments (an input string and a target string of length 1).
"countChar" will return the number of times the target string is found in the input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/
function countChar(str, target, index = 0, count = 0) {
  ///create  a fxn called countChar
  //i:  str, target, DEFAULT PARAM: index = 0, count = 0
  //o: count ( num of times target is present in str)

  //base case:  when str is undefined, return count
  if (str[index] === undefined) return count


  //recursrive case
  //inc index with each recursion
  if (str[index] === target) {
    count++
    // console.log(count)
  }
  //cond: if arr at index is eq target, inc count
  return countChar(str, target, index + 1, count)
}

// console.log(countChar('hello world', 'o')); //-> 2
// console.log(countChar('javascript', 'j'));// -> 1

/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe".
"passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string "You have entered the wrong password". If the passwords do match, return the safe.
 
Example:
const mySafe = passwordSafe('myPassword', 'My Super Secret');
mySafe('wrongPassword') -> "You have entered the wrong password"
mySafe('myPassword') -> "My Super Secret"
*/
function passwordSafe(str1, safe) {
  //create a fxn called passwordSafe
  //i: str1 (password), safe (val)
  //o: return a fxn = > closure
  return function (str2) {
    //create a ret fxn
    // i: str2
    // o: ret str see below

    if (str1 === str2) {
      // console.log("see strings", str1, str2)
      // if str1 and str2 are eq, ret "safe" ==='My Super Secret'
      return safe;
    } else if (str1 !== str2) {
      //otherwise, if str1 and str2 are not eq, ret "You have entered the wrong password"
      return "You have entered the wrong password";
    }
  }
}


// const mySafe = passwordSafe('myPassword', 'My Super Secret');
// console.log(mySafe('wrongPassword'))// -> "You have entered the wrong password"
// console.log(mySafe('myPassword'))// -> "My Super Secret"

/*
Write a function 'subsetSum' that is given an array of integers and a target number. It should return true if there is a subset of the array that sums up to the target and returns false otherwise. A subset can be any size and the elements do not have to appear consecutively in the array.
 
Examples:
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
*/

function subsetSum(arr, target) {
  //create subsetSum
  //i: arr (of integers), target
  //o:  return boolean

  //create a var called sum
  let sum = 0;
  //create a for loop to iter thru arr (outer loop)
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    for (let j = 1; j < arr.length; j++) {
      console.log(arr[i], arr[j])
    }
  }
  //creat a nested for loop
  //add sum of combo
  // cond: sum of a combo of el in arr eq target
  //return true
  //otherwise, return false, if no combo sums to target,
}
//total = 16 -3 = 13
//
//32-12= 20
//32-5=27 => numbers lt 27 : 3, 4,5,12,12
//32-4=28=> numbers lt 28: 8,2, 4,12 
//32-3=29 => numbers lt 29: 3,4,12,5,12



console.log(subsetSum([3, 7, 4, 2], 5));//           -> true (3 + 2 = 5)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));// -> true (3 + 12 + 5 + 12 = 32)
console.log(subsetSum([8, 2, 4, 12], 13));//         -> false
console.log(subsetSum([8, -2, 1, -3], 6));//         -> true (8 + 1 + (-3) = 6)






/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: 
If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number 
cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]

Input : Number 
Output : Array

create a func amplify take number 
    declare a result assign to empty
    
      iterate thru nubmer use for loop
        check if index is divided evenly by 4 multiply 10 times that position 
        fill in array form the firs element up to number input use push method
    return result
*/
const amplify = (nums) => {

  const result = [];
  for (let i = 1; i <= nums; i += 1) {

    if (i % 4 === 0) {
      result.push(i * 10)
    } else (
      result.push(i)
    )

  }
  return result;
}
// console.log(amplify(5)) // [1, 2, 3, 40, 5];
// console.log(amplify(8)) // [1, 2, 3, 40, 5, 6 , 7 , 80];
// console.log(amplify(12)) // [1, 2, 3, 40, 5, 6 , 7 , 80, 9, 10, 120];



// Check all values in an array÷
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
// var allAreLessThanSeven = all([1,2,9], function(num){
//  	return num < 7;
//  });
// console.log(allAreLessThanSeven); // false


/* 

In: Array , Callback
Out : Boolean

create a func takes array and callback

    iterate true array 
        check current element passed callback return true
        return false


*/

const all = (arr, callback) => {

  return arr.reduce((acc, curr) => {
    if (!callback(curr)) {
      acc = false;
    } else {
      acc = true;
    }
    return acc;

  }, false)

}
const all1 = (arr, cb) => arr.reduce((acc, curr) => !cb(curr) ? acc = false : acc = true, false);
// var allAreLessThanSeven = all([1,2,9], function(num){
//  	return num < 7;
//  });
// console.log(allAreLessThanSeven); // false



/*
Write a function 'stored' that takes in a function and returns a new function. The new function
will check if it has already computed the result for the given argument. If it hasn't, it will
run the passed-in function on the argument and return the result. If it has, it will return
the stored argument along with its result. If an argument is not a number, the new function
will not store the argument and instead return the error message "Please enter a valid number".


In : callback
Out : closure ==> return function 
     create inner function will 
     Input : take Number or String
     Output : Number ore Sring 
     

crete a fucn take callback
  
  declare a varible cache assign to empty object

  creat inner funct take Number or String
        if input not a nubmer return "Please enter a valid number"
        if cache is not undefind 
            fill the cache with key by callback with passed input 
            ruturn string with input and value from callback
        otherwise 
            reassign cache with callback pass in input
            return value
*/
const stored = (callback) => {

  const cache = {};

  return (input) => {

    if (typeof input !== 'number') return "Please enter a valid number";

    if (cache[input]) {

      cache[input] = callback(input)

      return `${input} : ${cache[input]}`

    }

    cache[input] = callback(input)

    return cache[input];

  }

}


// const cube = (n) => n ** 3;
// const cubeStored = stored(cube);
// console.log(cubeStored(2));// --> 8
// console.log(cubeStored(2));// --> '2: 8'
// console.log(cubeStored(3));// --> 27
// console.log(cubeStored(3));// --> '3: 27'
// console.log(cubeStored('a') );//--> "Please enter a valid number"
// console.log(cubeStored('a'));// --> "Please enter a valid number"
// console.log(cubeStored(2));// --> '2: 8'



/* RECURSION
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
input : Two nubmer
output : Array
console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

*/
const getRangeBetween = (x, y, arr = []) => {
  // base case : 
  // if i <= y - 1 return arr

  if (x === y - 1) return arr;
  // increment i = x +1 ;
  arr.push(x + 1)
  // recursive case : getRangeBetween passed num1 , num2 ,  arr , i + 1;
  return getRangeBetween(x + 1, y, arr);

}
console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]




/*
Challenge :
Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

console.log(cleaned("")) // "";
console.log(cleaned("yyzzza")) // "yza";
console.log(cleaned("aabbcc")) // "abc";
console.log(cleaned("Helloo")) // "helo";

In : String
Out : String without same letter


create a func cleaned take a string
  reassign strin to lowercase
  declare a result variarble assign to empty string 
  declare a index assign to 0

  base case : 
  if string at current is undefined return result;
  if string at current letter is not equal to the next letter 
      reasign result by adding to the result

  recursive case :
  - invoke cleaned function passed in strin, result , i increment by 1

*/

const cleaned = (str, i = 0, result = '') => {

  str = str.toLowerCase();

  if (str[i] === undefined) return result;

  if (str[i] !== str[i + 1]) result += str[i];

  return cleaned(str, i + 1, result);
}

console.log(cleaned("")) // "";
console.log(cleaned("yyzzza")) // "yza";
console.log(cleaned("aabbcc")) // "abc";











