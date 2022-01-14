/* ========== *
* Challenge 1 *

Challenge 1
Replace the blank underscores inside the console logs with the data type (i.e. 'string') you think each value will be. (Leave the quotes)
Ex.
var myStr = "hello"
  console.log(typeof myStr === "string") //=> true
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === 'number')
// console.log(typeof 22 === 'number')
// console.log(typeof true === 'boolean')

// var myVar;
// console.log(typeof myVar === undefined)

// myVar = "Meow"
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished

/* ============================================================================================================== *
* Challenge 2 *
Create a functon buildSentence that takes three words (strings) and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation.
* =========== */


function buildSentence(word1, word2, word3) {
  console.log(`${word1} ${word2} ${word3}`)

}

buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
buildSentence("we're", "number", "1") //=> "We're number 1."


/* ============================================================================================================== *
* Challenge 3 *
Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []
* =========== */


function lastLetter(word) {
  console.log(word[word.length - 1])
}

//Uncomment the lines below to test your code
lastLetter("hello") //=> "o"
lastLetter("goodbye!") //=> "!"
lastLetter("ZeltoiD") //=> "D"



/* ======================================================================================================================== *
* Challenge 4 *
Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:
If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!
* =========== */


// function buildGreeting(time, name) {
//    if(time === 0 || time <= 11 ){
//      console.log(`Good Moring, ${name}`);
// 	 }else if(time === 12 || time <= 16 ){
//      console.log(`Good Afternoon, ${name}`);
//    }else if(time === 17 || time <= 23 ){
//      console.log(`Good Evening, ${name}`);
//    }else{
//       console.log(`That's not a real time, ${name}. Maybe you need some sleep!`);
//    }
// }

function buildGreeting(time, name) {
  switch (true){
    case time === 0 || time <= 11 :
    console.log(`Good Morning, ${name}`);
    break;
    case time === 12 && time <= 16 :
    console.log(`Good Afternoon, ${name}`);
    break;
    case time === 17 || time <= 23 :
    console.log(`Good Evening, ${name}`);
    break;
    default:
    console.log(`Maybe you need some sleep!`);
    break;
	}
}


// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ======================================================================================================================== *
* Challenge 5 *
indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
Enter the index position you think indexOf will return for each below.
* =========== 
Challenge 15
Create a function leastCommonMultiple that takes two numbers (integers) as input and returns the lowest number which is a multiple of both inputs. */


// console.log("CodeSmith".indexOf("o") === 1)
// console.log("hello".indexOf("ll")=== 2)
// console.log("zebra".indexOf("z") === 0 )
// console.log("banana".indexOf("B") === -1 )

// console.log( "odeSmith".indexOf("o"))
// console.log( "hello".indexOf("ll"))
// console.log( "zebra".indexOf("z"))
// console.log( "banana".indexOf("B"))



/* ========================================================================================== *
* Challenge 6 *
Create a function letterExists that takes a word (string) and a character (string), and console.logs whether that letter can be found inside that word.
* =========== */


// function letterExists(word, letter, check = false) {
//   for(let i = 0; i < word.length ; i++){
//     if(letter.includes(word[i])){
//         check = true
//      }
//   }
//   console.log(check);
// }

function letterExists(word, letter, check = false) {
  console.log(word.includes(letter))
}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* ===================================================================================================== *
* Challenge 7 *
Create a function isPrime that console.logs a boolean indicating if `number` is prime or not.
* ============ */

// function isPrime(number) {
//     if (isNaN(number) || !isFinite(number) || number % 1 || number < 2) console.log(false);
//     var m = Math.sqrt(number); //returns the square root of the passed value
//     for (var i = 2; i <= m; i++)
//         if (number % i == 0) return console.log(false);
//     return console.log(true);
// }

// function isPrime(num) {
//   for(let i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num > 1;
// }

function isPrime(number) {
  // iterate thru number using a for loop
  		// declare the first i = 2 , i < num , i++
  			// if number % i equal to 0 return false
  		// return num > 1;
  for(let i = 2 ; i < number ; i++){
    if(number % i === 0) 
      return false;
	}
  return number > 1;
}


isPrime(-7); // => false
isPrime(1); // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false


/* ==================================================================================================== *
* Challenge 8 *
Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.
* =========== */


function range(start, end) {
  if(start < end){
    for(let i = start; i <= end ; i++){
      console.log(i)
		}
	}else if(start > end){
    for(let i = start ; i >= end ; i-- )
      console.log(i)
     }

function range(start, end) {
for (let i = start; i <= end; i++){
  console.log(i)
}
}
//Uncomment the lines below to test your code
range(1,4) //=> 1, 2, 3, 4
range(4,2) //=> 4, 3, 2


/* ===================================================================================================== *
* Challenge 9 *
Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist.
Assume the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!
* ============ */


// function myIndexOf(array, ele){
//   for(let i = 0; i < array.length ;i++){
//     if(array[i] === ele){
//       return i
//     }
//   }
//   return -1;
// }
  


// console.log(myIndexOf([1, 2, 3, 4, 5], 5)) //=> 4
// console.log(myIndexOf(["a", "b", "c"], "a")) //=> 0
// console.log(myIndexOf(["a", "b", "c"], "d")) //=> -1


/* ===================================================================================================== *
* Challenge 10 *
Create a function unique that console.logs an array where all the duplicates of the input array have been removed; 
in other words, every element remaining is unique.
* ============ */

// function unique(arr) {
//   //let uniqueOnly = [...new Set(arr)];
//   let uniqueOnly = arr.filter((value, index, arr)=> arr.indexOf(value) === index);
//   console.log(uniqueOnly);
// };
// unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"])// => ["a", "c", "aa", "b"]

  function unique(array) {
  console.log([...new Set(array)])
  // console.log(array.filter((ele, index, arr)=> arr.indexOf(ele) === index))
}

unique([1, 1, 2, 3, 3]) //=> [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"])// => ["a", "c", "aa", "b"]
/* ===================================================================================================== *
* Challenge 11 *
Create a function longestWord that that retuns the longest word of a sentence.
If there are ties, the function should return the later word.
* ============ */

function longestWord(sentence) {
    let words = sentence.split(' ')
    let result =''
    for (let i = 0; i < words.length ;i++){
      if(Math.max(words[i].length)){
        result = words[i]
      }
    }
    return result;
  }
  
  //Uncomment the lines below to test your function:
  
  console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
  console.log(longestWord('hate having hungry hippos')); // => 'hippos'
  console.log(longestWord('JavaScript')); // => 'JavaScript'
  console.log(longestWord('')); // => ''
  
  
  /* ===================================================================================================== *
  * Challenge 12 *
Create a function disemvowel that takes in a string and returns a string with all vowels removed.
  * ============ */
  
  function disemvowel(string) {
    // your code here...
    
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  // console.log(disemvowel('BANANA')); // => 'BNN'
  // console.log(disemvowel('hello world')); // => 'hll wrld'
  
  
  /* ===================================================================================================== *
  * Challenge 13 *
 Create a function divisibleByFivePairSum that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

  * ============ */
  
  function divisibleByFivePairSum(array){
    // your code here...
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
  // console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
  
  
  /* =============================================================================================================== *
  * Challenge 14 *
 Create a function highestScore that takes in an array of student objects as a parameter.

It should return a string that corresponds to the student with the highest score.

The string should contain that student's initials concatenated with their id.

Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties).
  * ============ */
  
  function highestScore(students) {
    // your code here...
  
  
  }
  
  //Uncomment the lines below to test your function:
  
  // var students = [
  // {name: 'Will Sentance', id: 128, score: -42},
  // {name: 'Jamie Bradshaw', id: 32, score: 57},
  // {name: 'Lisa Simpson', id: 2, score: 99},
  // {name: 'Luke Skywalker', id: 256, score: 94}
  // ];
  
  // console.log(highestScore(students)); //=> 'LS2'
  
  
  /* ========================================================================================================================= *
  * Challenge 15 *
 Create a function leastCommonMultiple that takes two numbers (integers) as input and returns the lowest number which is a multiple of both inputs.
  * ============ */
  
  const leastCommonMultiple = (num1, num2) => {
    let low, high;
    num1 > num2 ? ((high = num1), (low = num2)) : ((high = num2), (low = num1));
    for (let least = high; least <= high * low; least += high) {
      if (least % low === 0) {
        return least;
      }
    }
  };
  
  function leastCommonMultiple(num1, num2, d = Math.max(num1, num2)) {
    if (d % num1 === 0 && d % num2 === 0) return d;
    return leastCommonMultiple(num1, num2, d + Math.max(num1, num2));
  }
  
  
  //Uncomment the lines below to test your function:
  
console.log(leastCommonMultiple(2, 3)); //=> 6
console.log(leastCommonMultiple(2, 4)); //=> 4
console.log(leastCommonMultiple(2, 5)); //=> 10
console.log(leastCommonMultiple(8, 12)); //=> 24
console.log(leastCommonMultiple(6, 10)); //=> 30
console.log(leastCommonMultiple(24, 26)); //=> 312
  
  
  /* ======================================================================================================================== *
  * Extension 1 *
 Create a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
  * =========== */
  
  function arrayBuilder(count) {
    // your code here...
  
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
  // console.log(arrayBuilder({})); //=> []
  
  
  /* ======================================================================================================================== *
  * Extension 2 *
 Create a function objectBuilder that takes in a number and returns an object whose keys are 0 up to number and the values are that same number multipled by 5.
  * =========== */
  
  function objectBuilder(count) {
    // your code here...
  
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(objectBuilder(4)); //=> {
    // 0: 0,
    // 1: 5,
    // 2: 10,
    // 3: 15,
    // 4: 20,
  // }
  // console.log(objectBuilder(0)); //=> { 0: 0 }
  
  
  /* ======================================================================================================================== *
  * Extension 3 *
 Create a function secretCipher that takes in an string(sentence) and an object(cipher). Return a string where every character is replaced with its cooresponding value in the cipher. If the character doesn't exist in the cipher, use the original character.
  * =========== */
  
  function secretCipher(sentence, cipher){
    // your code here...
  
  }
  
  
  //Uncomment the lines below to test your function:
  
  // console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
  // console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
  // console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"
  
  
  /* ========================================================================================================================  *
  * Extension 4 *
Create a function passingStudents that accepts an array of student objects.
It should iterate through the list of students and return an array of the names of all the students who have an average grade of at least 70.
  * =========== */
  
  function passingStudents(students) {
    // your code here...
  
  }
  
  
  //Uncomment the lines below to test your function:
  
  // var students = [
  //   {
  //     "name": "Marco",
  //     "id": 12345,
  //     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  //   },
  //   {
  //     "name": "Donna",
  //     "id": 55555,
  //     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  //   },
  //   {
  //     "name": "Jukay",
  //     "id": 94110,
  //     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  //   }
  // ];
  
  // console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]