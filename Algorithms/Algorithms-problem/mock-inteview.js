/* Declare a variable ‘names’ and set it to an array with the values ‘Chris’, ‘Samantha’, ‘Richard’, and ‘Kyle’ in it. */

/*
Create a function that takes in a string and returns that string in alternating cases starting with Upper Case
for example:
dog -> DoG
chair -> ChAiR
elephant -> ElEpHaNt 
*/
// In : String
// Out : String with Uppercase alternating
// create a func alternating that accept string
// declare result assign to empty string
// interate thru string use a for loop
// check if i is even reassign string to Uppercase
// otherwish i result lowercase

// return string
const alteratingStr = (str) => {
  return [...str].reduce((output, curr, i) => {
    if (i % 2 !== 0) output += curr.toLowerCase();
    else output += curr.toUpperCase();
    return output;
  }, "");
};
// console.log(alteratingStr('dog')) // DoG
// console.log(alteratingStr('chair')) // ChAiR
// console.log(alteratingStr('elephant')) // ElEpHaNt

/*
create a function that takes in that name string and outputs a string with all the vowels removed
for example: "David" -> "Dvd"
*/
const removeVowel = (str) => {
  return str.replace(/[aeiou]/g, "");
};
console.log(removeVowel("David")); // "Dvd"

/*Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples
sumOfCubes([1, 5, 9]) //➞ 855
sumOfCubes([3, 4, 5]) //➞ 216
sumOfCubes([2]) //➞ 8
sumOfCubes([]) //➞ 0 */

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
/* ============= SOLUTION 1 Loop  ============================= */
const addNumbers = (nums) => {
  let sum = 0;
  for (let i = 0; i <= nums; i += 1) {
    sum += i;
  }
  return sum;
};
//console.log(addNumbers(4))
/* ============= SOLUTION 1 Recursive  ============================= */
const addNumbersRecursive = (nums, sum = 0) => {
  if (nums === 0) return sum;
  return addNumbersRecursive(nums - 1, sum + nums);
};
//console.log(addNumbersRecursive(4))
/*
Create a function "between40And400" that takes a number as an argument.
"between40And400" should return a true if the number passed to it is between 40 and 400 exclusive.
For example, if the input is 35 then your function should return false and if the input is 372 it should return true.
*/

const between40And400 = (nums) => {
  if (nums > 40 && nums <= 400) return true;
  else return false;
};
// console.log(between40And400(35)) // false
// console.log(between40And400(372)) // true
// console.log(between40And400(200)) // true

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 130 then your function should return false and if the input is 500 it should return true.
*/
const divBy100 = (nums) => {
  if (nums % 100 === 0) return true;
  else return false;
};
console.log(divBy100(130)); // false
console.log(divBy100(500)); // true
console.log(divBy100(300)); // true

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

/*
Use your "passAllTests" function to test if the number 300 is greater than the number 40 and less than the number 400,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

/* Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property. */

/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.
const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/

/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: 
If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number 
cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/

// Input : Number
// Output : ARray
// create a fucn take Number as argument
// declare an array assign to empty array
// iterate thru number
// check if the nubmer whice divided by 4 and times 10 and push to array
// other number pust to array
// return array

const amplify = (nums) => {
  const newArr = [];
  for (let i = 1; i <= nums; i++) {
    if (i % 4 === 0) {
      newArr.push(i * 10);
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};
// console.log(amplify(5)) // [1, 2, 3, 40, 5]
// console.log(amplify(10)) // [1, 2, 3, 40, 5 , 6 , 7 , 80 , 9 , 10]
// console.log(amplify(12)) // [1, 2, 3, 40, 5 , 6 , 7 , 80 , 9 , 10, 11 , 120]
/* 
Check all values in an array÷
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
var allAreLessThanSeven = all([1,2,9], function(num){
      return num < 7;
 });
console.log(allAreLessThanSeven); // false
*/
const all = (arr, callback) =>
  arr.reduce(
    (acc, curr) => (callback(curr) ? (acc = true) : (acc = false), acc),
    false
  );
var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven); // false

/*

Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.


const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'
*/

/* 
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

*/

/*
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.


const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

*/

/* 
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
*/

/* 
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
*/

/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2

*/

/* RECURSION
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
input : Two nubmer
output : Array
console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

*/
/*
Input : Two Number  (x, y)
Output : Array 
create a funciton take two number
declare a newArr assign to newArr
base case : x === y - 1  return newArr
fil the array of x + 1 each time function call
recursive case : invoke getRangeBetween and passed x increment by1, y, newArr
*/
const getRangeBetween = (x, y, newArr = []) => {
  if (x === y - 1) return newArr;
  newArr.push(x + 1);
  return getRangeBetween(x + 1, y, newArr);
};
// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

/*
Challenge :
Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

console.log(cleaned("")) // "";
console.log(cleaned("yyzzza")) // "yza";
console.log(cleaned("aabbcc")) // "abc";
console.log(cleaned("Helloo")) // "helo";
*/

/* 
Input : String 
Output : Strin with out repeat

create a func take string as aguments
  declare a variable result assign to empty string
  declare a i assign to 0
  base case : string is empty return result
  if(string[i] === string[i + 1]) reassign result at to current element
  recursive case : invoke cleaned func passed string, result , i increment by 1

*/
const cleaned = (str, result = "", i = 0) => {
  if (str[i] === undefined) return result;
  if (str[i] !== str[i + 1]) result += str[i];
  return cleaned(str, result, i + 1);
};

// console.log(cleaned("")) // "";
// console.log(cleaned("yyzzza")) // "yza";
// console.log(cleaned("aabbcc")) // "abc";
// console.log(cleaned("Helloo")) // "helo";

/* Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative. 

console.log(strCopies("catcowcat", "cat", 2) )//=> true
console.log(strCopies("catcowcat", "cow", 2)) //=> false
console.log(strCopies("catcowcat", "cow", 1)) //=> true
*/

const strCopies = (string, word, target, count = 0) => {
  if (string === "") return false;
  if (count === target) return true;
  if (string.startsWith(word)) count += 1;
  return strCopies(string.slice(1), word, target, count);
};
console.log(strCopies("catcowcat", "cat", 2)); //=> true
console.log(strCopies("catcowcat", "cow", 2)); //=> false
console.log(strCopies("catcowcat", "cow", 1)); //=> true

function strCopies(string, subString, num, numOfTimes = 0) {
  if (string === "") return false;
  if (num === numOfTimes) return true;
  let subString2 = string.slice(0, 3);
  if (subString2 === subString) numOfTimes += 1;
  return strCopies(string.slice(1), subString, num, numOfTimes);
}

console.log(strCopies("catcowcat", "cat", 2)); //=> true
console.log(strCopies("catcowcat", "cow", 2)); //=> false
console.log(strCopies("catcowcat", "cow", 1)); //=> true



// ==== MOCK Interview with first interview =====
// #1
/* Declare a variable 'myString' and set it equal to the string 'I love programming'  */

// #2
/* Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"
*/

// #3
/* Create a function disemvowel that takes in a string and returns a string with all vowels removed.
  console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'
*/

// #4
/*
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
*/

// #5
/* Create a function cycleIterator that accepts an array, and returns a function.
The returned function will accept zero arguments.
When first invoked, the returned function will return the first element of the array.
When invoked a second time, the returned function will return the second element of the array, and so forth.
After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const getDay = cycleIterator(['Fri', 'Sat', 'Sun'])
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
*/

// #6
/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

// #7
/*
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

const addByTwoOnce = once(function(num) {
  return num + 2;
});
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
*/




function Sup() {
  this.supply = function () {
    return this;
  }
}
var supp1 = new Sup();
var sub1 = supp1.supply()
console.log(supp1 === sub1)
console.log('metaprogramming'.substr(4, 7))

function Animal() {
  this.sound = 'animal sound';
}
Animal.prototype.makeSoud = function () {
  console.log(this.sound)
}
function Dog() {
  this.sound = 'woff word'
}
Dog.prototype = new Animal()
let dog = new Dog()
console.log(dog.makeSoud())

function iterate(...data) {
  console.log(data)
}
iterate(1, 2, 3)



// MOCK FOR YOO JIN Change

// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.
let programmingLanguages = ['C++', 'Java', 'Python', 'Javascript', 'Swift']
// console.log(programmingLanguages)
/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/
//check whether the string contains the letter j or J and return that
function containsJ(string) {
  return string.includes('J') || string.includes('j')
}
// console.log(containsJ('Cat'))
// console.log(containsJ('Jaguar'))
/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/
// Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function
//apply the callback function to the array and filter out the values that are true
// how do i reuse screen iwth other callbacks?
function screen(array, callback) {
  const output = array.filter(n => callback(n))
  return output
}
console.log(screen(programmingLanguages, containsJ))


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
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/



/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/
//closure
//return a function that pushes new values into the existing array with protected values
function memoryMaker() {
  const output = []
  return (arg) => {
    output.push(arg)
    return output
  }
}
const iRemember = memoryMaker();
// console.log(iRemember('hello')); //-> ['hello']
// console.log(iRemember(1)); // -> ['hello', 1]
// console.log(iRemember('world')); //-> ['hello', 1, 'world']
// console.log(iRemember(true)) //; -> ['hello', 1, 'world', true]
/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/
//base case if element becomes undefined
//recursive case is adding on the last element to the current element
function sumAllElements(array, init, index = 0) {
  // console.log(array)
  if (index === array.length) return init
  return sumAllElements(array, init + array[index], index + 1)
}

/*Declare a variable 'myRandomString' and set it to the value 'Codesmith' */

/*
Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.
For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo WWoorrlldd!!'

Check that your 'doubleChar' function is working correctly by passing the value of 'myRandomString' to it
*/


/*
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback. 

const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
*/

/* Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
console.log(rollCaller()) // => should log 'Victoria'
console.log(rollCaller())  // => should log 'Juan'
console.log(rollCaller())  // => should log 'Ruth'
console.log(rollCaller())  // => should log 'Everyone accounted for'
*/

/*
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);  // { yoga: 2, baking: 0, piano: 0 }
updateHobbies('baking', 3); // { yoga: 2, baking: 3, piano: 0 }
updateHobbies();  // 'tracker has been reset!'
*/


/* 
Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, 
or the length property. 
*/


/*
Count recursively the total number of "abc" and "aba" substrings that appear in the given string.
countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2

*/