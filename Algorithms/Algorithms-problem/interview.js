/*
Assign "*your first name*" to the variable firstName.
log this out to the console
*/
let firstName = "Meow";
// console.log(firstName); //'Meow'
/*
Assign "*your last name*" to the variable lastName.
log this out to the console
*/
let lastName = "Happy";
// console.log(lastName); //=> 'Happy'
/*
log to the console your full name without creating a new variable.
*/
// console.log(`${firstName} ${lastName}`); // 'Meow Happy'
/*
create a function that takes in that name string and outputs a string with all the vowels removed
  for example: "David" -> "Dvd"
*/
// Input : String
// Output : String
const createName = (string) => {
  // declare a vowels assign to array of element a e i o u
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  // declare a variable output assign to empty string
  let output = "";
  // iterate thru input string using for loop
  for (let i = 0; i < string.length; i++) {
    // declare the letter assign to convert the current element to lowercase 
    let letter = string[i].toLowerCase()
    // check if vowel is not includes in vowels
    // if not, reassign output 
    if (!vowels.includes(letter)) {
      output += string[i];
    }
  }
  // return output 
  return output;
};
// console.log(createName("CodeSmith")) // CdSmth

function removeVowel(text) {
  let output = ''
  let textConvert = text.toLowerCase()
  let resault = textConvert.split('')
  let outputArray = resault.filter(x => {
    return x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u'
  })

  for (let i = 0; i < outputArray.length; i++) {

    output += outputArray[i]
  }
  return outp


}
console.log(removeVowel("CodeSmith")) // CdSmth
/*
Create a function that takes in a string and returns that string in alternating cases starting with Upper Case
for example:
dog -> DoG
chair -> ChAiR
elephant -> ElEpHaNt */

// Input : string
// output : string with alternation casees starting iwth upperCase

// const alternatingWord = (str) => {
//     // declar a variable result
//     let result = "";
//     // iterate thru str using a for loop
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             result += str[i].toUpperCase();
//         } else if (i % 2 !== 0) {
//             result += str[i].toLowerCase();
//         }
//     }
//     return result;
// }
// console.log(alternatingWord('dog')) // DoG


/*Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples
sumOfCubes([1, 5, 9]) //➞ 855
sumOfCubes([3, 4, 5]) //➞ 216
3*3*3
4*4*4
5*5*5
sumOfCubes([2]) //➞ 8
sumOfCubes([]) //➞ 0 */
// In : Array  
// Out : Number
// create sum a varible set to 0
// iterate thru arr use a for loop
// 		each element * 3 reassign to su
// return sum

const sumOfCubes = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {

    // sum += array[i] * array[i] *array[i];
    // sum += Math.pow(array[i], 4)
    sum += array[i] ** 3;
  }

  return sum;

}
console.log(sumOfCubes([2])) //➞ 8
console.log(sumOfCubes([])) //➞ 0*/
console.log(sumOfCubes([1, 5, 9])) //➞ 855
// console.log(sumOfCubes([3, 4, 5])) //➞ 216




/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case. Inputting 'a' should return "A", and inputting "A" should return 'a' 
In: string
Out : string as opposite
crete a fucn take string as input
    if string is equal to string a Upppercase return string to lowercase
    else return str to lowercase

*/
const changeCase = (str) => {
  if (str === str.toUpperCase()) return str.toLowerCase();
  else return str.toUpperCase();
}
// console.log(changeCase('a')) // A
// console.log(changeCase('B')) // b
// console.log(changeCase('C')) // c

/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.

In : String and callback
Out : new string
create a func take string and callback
    declare output variable assign to empty
    iterate thru string 
        reasign a output to the callback and passed current element
      return output
*/
const effectString = (str, callback) => {

  return [...str].reduce((output, curr) => {

    output += callback(curr);

    return output;

  }, '')

}

// console.log(effectString('Code Smith', changeCase)) // cODE sMITH
// console.log(effectString('Js' , changeCase)) // jS
// console.log(effectString('LovE',changeCase)) // lOVe



/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.

In : string and char
Out : Nubmer

create a func countChar take string and char
  declare a count assign to 0 
  declare a index assign to 0
  
  base case : 
  if string as index is underfined return count
  if string as index is equal to char then increament count by 1
  recursive case : invoke countChar func and passed string, char , count, index increment by 1
 
*/
const countChar = (str, char, count = 0, i = 0) => {

  if (str[i] === undefined) return count;

  if (str[i] === char) count += 1;

  return countChar(str, char, count, i + 1);

}

// console.log(countChar('hello', 'o')) // 1
// console.log(countChar('hello hello hello', 'l')) // 6
// console.log(countChar('hello how are you', 'h')) // 2


/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

In : array and value as string
Out : Number

create a func countTimes take Array and value
  declare a count assign to 0 
  declare a index assign to 0
  
  base case : 
  if array as index is underfined return count
  if array as index is equal to value then increament count by 1
  recursive case : invoke countChar func and passed array, value , count, index increment by 1

*/
const countTimes = (arr, value, count = 0, i = 0) => {

  if (arr[i] === undefined) return count;

  if (arr[i] === value) count += 1;


  return countTimes(arr, value, count, i + 1);

}

// console.log(countTimes(['a', 'b' , 'c'], 'c')) // 1
// console.log(countTimes(['a', 'b' , 'b', 'c'], 'b')) // 2
// console.log(countTimes(['a', 'b' , 'c','a', 'b' ,'a'], 'a')) // 3



/*
QUESTION 2:
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.

In : Array and letter
Out : Number
*/

const wordSearchLetterCounter = (arr, letter) => {

  return arr.reduce((acc, curr) => {

    curr.forEach(ele => {

      if (ele === letter) {
        acc += countTimes(ele, letter);
      }

    })
    return acc;

  }, 0)


}

// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D")) // ➞ 3 "D" shows up 3 times: twice in first row, once in third row.)




/* RECURSION
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.

console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

input : Two nubmer num1, num2
output : Array
creat a func take number as aguments
  declare a newArr assign to empty arr
  base : 
  if num1 = num2 - 1 then adding number the the array using push 
  return newArr
  
  adding the number to the newArr using push method
  
  recursive case : getRangeBetween passed num1 + 1, num2, newArr

*/
const getRangeBetween = (num1, num2, newArr = []) => {

  if (num1 === num2 - 1) return newArr;

  newArr.push(num1 + 1);

  return getRangeBetween(num1 + 1, num2, newArr)
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
// console.log(getRangeBetween(1, 5)) //-> [2, 3, 4]



/*
Challenge :
Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

console.log(cleaned("")) // "";
console.log(cleaned("yyzzza")) // "yza";
console.log(cleaned("aabbcc")) // "abc";
console.log(cleaned("Helloo")) // "helo";

In : String  
Out : newString
crete a func take string as arguement
  declare the output assign to empty string
  declare a index assign to 0
  reassign string to lowercase
  base case :
  - if string as index is undefined reutrn output 
  - if string as index is NOT eqaule to string as index + 1, reassign the output adding string to output
  
  recuresive case : 
  - invoke cleaned func passed in string and output , increment index by 1
  
*/
const cleaned = (str, output = "", i = 0) => {

  str = str.toLowerCase();

  if (str[i] === undefined) return output;

  if (str[i] !== str[i + 1]) output += str[i]

  return cleaned(str, output, i + 1)

}

// console.log(cleaned("")) // "";
// console.log(cleaned("yyzzza")) // "yza";
// console.log(cleaned("aabbcc")) // "abc";
// console.log(cleaned("Helloo")) // "helo";

/*
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.

console.log(endX("")); //→ ""
console.log(endX("abc")); //→ "abc"
console.log(endX("Myexesloveme")); //→ "Myeeslovemex"
console.log(endX("xxre")); //→ "rexx"
console.log(endX("xxhixx")) //→ "hixxxx"
console.log(endX("xhixhix")) //→ "hihixxx"

In : String
Out : New String

create a func take string as arguments
    declare a allX assign to empty string
    declare a result assign to empty string
    declare a index assign to 0
    
    base case :
    if str at index is undefind return out result concat to allX string
    if str at index is equal to x reassign allX to the string
    
    recursive case : 
    invoke endX func and passed in str, allX, result , increment i by 1
    
*/
const endX = (str, allX = '', result = '', i = 0) => {

  if (str[i] === undefined) return result + allX;
  if (str[i] !== 'x') result += str[i];
  if (str[i] === 'x') allX += str[i];

  return endX(str, allX, result, i + 1)

}

console.log(endX("")); //→ ""
console.log(endX("abc")); //→ "abc"
console.log(endX("Myexesloveme")); //→ "Myeeslovemex"
console.log(endX("xxre")); //→ "rexx"
console.log(endX("xxhixx")) //→ "hixxxx"
console.log(endX("xhixhix")) //→ "hihixxx"
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

In : callback 
out : Boolean or Object
create a func take a callback 
  declare a cache object { true: 0, false: 0 }
  declare inner func with or without args.
      if has no args return cache
      otherwise 
        fill the cache by invoking callback with passed in args , value increment by 1
        reuturn callback with passed arge
*/
const checkerLogger = (callback) => {
  const cache = { true: 0, false: 0 };
  return (args) => {

    if (!args) return cache;

    cache[callback(args)] += 1;

    return callback(args);
  }

}
// const isOdd = num => num % 2 === 1;
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); //-> { true: 0, false: 0 }
// console.log(oddCounter(3)); //-> true
// console.log(oddCounter(2)); //-> false
// console.log(oddCounter()); //-> { true: 1, false: 1 }


/*Create a function "fastCache" that takes one argument (a function) and returns a function. 
When fastCache is invoked it creates an object that tracks calls to the returned function, 
where each input to the returned function is associated with its output. 
Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
//SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object
//MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object

In : callback 
Out : Number
closour 
crete a func take callback as args
  declare a cache object with empty object
  create inner func to return will take two or one arguments
    	
        if has only on arguemnt 
          invoke callback and passe args assign to cache
          cache KEY , the VALUE invokin callback
          return cache as Vaule
        otherwise
        invoke callback and passe args assign to cache
          cache KEY , the VALUE invokin callback
          return cache as Vaule
        
    	
*/
const fastCache = (callback) => {

  const cache = {};

  return (args1, args2) => {

    if (args1 && args2) {

      cache[args1] = callback(args1, args2);
      return cache[args1];
    }
    cache[args1] = callback(args1);
    return cache[args1];

  }

}

//SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
console.log(cachedMultiplyBy2(100)); // -> 200
console.log(cachedMultiplyBy2(150)); // -> 300
console.log(cachedMultiplyBy2(100)); // -> 200 // from the cache object
//MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
console.log(cachedSumMultiplyBy2(5, 10)); // -> 30
console.log(cachedSumMultiplyBy2(1, 2)); // -> 6
console.log(cachedSumMultiplyBy2(5, 10)); // -> 30 // from the cache object


