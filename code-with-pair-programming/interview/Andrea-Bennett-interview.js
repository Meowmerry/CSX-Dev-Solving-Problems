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
function countChar (str, target, index=0, count = 0) {
  ///create  a fxn called countChar
    //i:  str, target, DEFAULT PARAM: index = 0, count = 0
    //o: count ( num of times target is present in str)
  
  //base case:  when str is undefined, return count
    if ( str[index] === undefined) return count
  
  
  //recursrive case
    //inc index with each recursion
    if (str[index] === target) {
        count++
      // console.log(count)
    }
        //cond: if arr at index is eq target, inc count
  return countChar (str, target, index+1, count)
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
  function passwordSafe (str1, safe) {
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
  
  function subsetSum (arr, target) {
  //create subsetSum
    //i: arr (of integers), target
    //o:  return boolean
  
  //create a var called sum
    let sum = 0;
  //create a for loop to iter thru arr (outer loop)
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i])
      for ( let j = 1; j <arr.length; j++) {
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
  
  
  
  
  
  