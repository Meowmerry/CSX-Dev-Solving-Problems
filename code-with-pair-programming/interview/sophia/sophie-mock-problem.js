// PROBLEM 1: LEVEL 1 - CREATE A FUNCTION
// create a function caseSensitive, this function will check if the input letter is capitalized, if its capitalized return the letter lower cased, if its lower cased, return the letter uppercased.

// declare a function caseSensitive that accepts a letter as input
// function caseSensitive(letter){
//   // throw error if input is not a string and of length 1
//   if (typeof letter !== 'string' && letter.length === 1) throw new Error ('Please input a letter as argument')
//   // declare a variable upper and lower assigned to the letter manipulated to the upper and lower cases of the argument, respectively
//   let upper = letter.toUpperCase();
//   let lower = letter.toLowerCase();
//   // using condition statements, return the opposite case of the input argument
//   if (letter === lower) return upper
//   if (letter === upper) return lower
// }

// TEST CASES:
// console.log(caseSensitive('a')) // -> 'A'
// console.log(caseSensitive('A')) // -> 'a'
// console.log(caseSensitive(1)) // -> Error

// PROBLEM 2: LEVEL 3 - CLOSURE
/*
  Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following 
  behavior:
  If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
  If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and 
  evaluated true or false.

  Example:
  const isOdd = num => num % 2 === 1
  const oddCounter = checkerLogger(isOdd);
  oddCounter(); ->  { true: 0, false: 0 }
  oddCounter(3); -> true
  oddCounter(2); ->  false
  oddCounter(); -> { true: 1, false: 1 }
  */

// declare a function checkLogger that accepts a cb as argument
function checkerLoggerS(cb) {
  // declare a cache that has true and false as keys and initialize the values as 0
  const cache = { true: 0, false: 0 };
  // declare a function embedded that accepts an argument
  function embedded(arg) {
    // create a condition if arg is undefined return cache
    if (arg === undefined) {
      return cache;
    }
    if (!cache.hasOwnProperty(cb(arg))) {
      cache[cb(arg)] = 1;
    } else {
      cache[cb(arg)]++;
    }
    return cb(arg);
  }
  return embedded;
}

// const isOddS = num => num % 2 === 1
// const oddCounterS = checkerLoggerS(isOddS);
// console.log(oddCounterS()); //->  { true: 0, false: 0 }
// console.log(oddCounterS(3)); //-> true
// console.log(oddCounterS(2)); //->  false
// console.log(oddCounterS()); //-> { true: 1, false: 1 }

//GIO'S SOLUTION -------------------------//
function checkerLogger(func) {
  let obj = {
    true: 0,
    false: 0,
  };
  return function (arg) {
    if (arg) {
      obj[func(arg)]++;
      return func(arg);
    } else {
      return obj;
    }
  };
}
// const isOdd = num => num % 2 === 1
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); //->  { true: 0, false: 0 }
// console.log(oddCounter(3));// -> true
// console.log(oddCounter(2));// ->  false
// console.log(oddCounter());// -> { true: 1, false: 1 }
// console.log(oddCounter(2));// ->  false
// console.log(oddCounter());// -> { true: 1, false: 2 }

// PROBLEM 3: LEVEL 1 - DECLARE A FUNCTION
/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
  
    Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world');     // elloHay orldway
    */

// declare a function pigIt that accepts a string
function pigIt(str) {
  // declare a const array that converts the string into an array
  const strArr = str.split(" ");
  // declare a const result that is initialized to an empty array
  const result = [];
  // declare a regEx variable with all the punctuations
  const regEx = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  // loop through the array and the first letter moved to the end and add 'ay
  strArr.forEach((element) => {
    if (element.match(regEx)) {
      result.push(element);
    } else {
      result.push(element.replace(element[0], "") + element[0] + "ay");
    }
  });
  return result.join(" ");
}

// console.log(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world !'));     // elloHay orldway

//GIO'S SOLUTION -------------------------//
//     function  pigIt(string){
//     let str = string.split(' ')
//     for(let i = 0; i < str.length; i++) {
//       // console.log(str[i][0])
//       let firstChar = str[i][0]
//       str[i] = str[i].substring(1, str[i].length) + firstChar + 'ay'
//     }
//    return str.join(' ')
//   }

// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world'));     // elloHay orldway

// PROBLEM 4: LEVEL 3 - RECURSION
/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
  
    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered
    Input strings s1 and s2 are null terminated.
    Examples
    scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False */

// SOLUTION USING OBJECTS --- BIG O NOTATION: O(n) - Linear
// declare a function scramble that accepts a string of random chars and a string that's a word
// function scramble (str1, str2) {
//   const cacheStr1 = {};
//   const cacheStr2 = {};
//   let bool = [];

//   for (let j = 0; j < str1.length; j++) {
//     if (cacheStr1[str1[j]]) {
//       cacheStr1[str1[j]]++
//     } else {
//       cacheStr1[str1[j]] = 1
//     }
//   }
//   for (let i = 0; i < str2.length; i++) {
//     if (cacheStr2[str2[i]]) {
//       cacheStr2[str2[i]]++
//     } else {
//       cacheStr2[str2[i]] = 1
//     }
//   }
//   for (let keys in cacheStr2) {
//     if (cacheStr2[keys] <= cacheStr1[keys]) {
//       bool.push(true);
//     } else {
//       bool.push(false);
//     }
//   }
//   return !bool.includes(false)
// }

// console.log(scramble('rkqodlw', 'world')) // ==> True
// console.log(scramble('cedewaraaossoqqyt', 'codewars')) // ==> True
// console.log(scramble('katas', 'steak')) // ==> False */

// SOLUTION USING RECURSION --- BIG O NOTATION: O(log n) - Logarithmic
// function scramble (str1, str2, boolean = false){
//  let index = 0;
// 	// base case:
//   if (str2.length === 0) return boolean;
//   if (str1.includes(str2[0])){
//      boolean = true;
//      index = str1.indexOf(str2[0])
//     }
//     if (!str1.includes(str2[0])){
//      boolean = false;
//     }
//   return scramble(str1.substring(0, index)+str1.substring(index+1, str1.length), str2.substring(1,str2.length), boolean)
// }
// console.log(scramble('rkqodlw', 'world'))// ==> True
// console.log(scramble('cedewaraaossoqqyt', 'codewars'))// ==> True
// console.log(scramble('katas', 'steak'))// ==> False
// console.log(scramble('tsettsettse', 'test'))// ==> True

//SOLUTION USING FOR LOOP (GIO'S SOLUTION) --- BIG O NOTATION: O(n) - Linear
function scramble(str1, str2) {
  let length = str2.length;
  let result = "";
  //  console.log(length)
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      if (!result.includes(str1[i])) {
        result += str1[i];
      }
    }
  }
  return result.length === str2.length;
}

console.log(scramble("rkqodlw", "world")); //==> True
console.log(scramble("cedewaraaossoqqyt", "codewars")); // ==> True
console.log(scramble("katas", "steak")); // ==> False */
console.log(scramble("doeegd", "dogg")); // ==> False */
