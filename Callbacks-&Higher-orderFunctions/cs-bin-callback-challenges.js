// Type JavaScript here and click "Run Code" or press Ctrl + s

// Challenge 1
const addTwo = (num) => num + 2;
// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3)); // 5
// console.log(addTwo(10)); // 12

// Challenge 2
// function addS(word) {
// 	return `${word} s`
// }
const addS = (word) => word + "s";
// uncomment these to check your work
// console.log(addS('pizza')); // pizza
// console.log(addS('bagel')); // bagels

// Challenge 3
const map = (arr, cb) => arr.map((n) => cb(n));
//console.log(map([1, 2, 3], addTwo)); // [3, 4, 5]

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) callback(array[i]);
}

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  const newArr = [];
  forEach(array, (ele) => {
    newArr.push(callback(ele));
  });
  return newArr;
}
// console.log(typeof forEach); // should log: 'function'
// forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]

// Challenge 6
function reduce(array, callback, initialValue) {}

// Challenge 7
function intersection(arrays) {}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
function union(arrays) {}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
/*
Input : Array
Output : Object with sub array


*/
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc, curr) => {
        
  },{})
}

console.log(multiMap(['catfood', 'glue', 'beer'], 
[function(str) { return str.toUpperCase(); }, 
function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, 
function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
/*
Input : Object and callback
Output : Array with Key
create a func take object and callback
	declare a rusult variable assign to empty array
  	iterate thru object use a for in loop
    	check if invoke callback passed current object value 
      			if true adding to result
            
  return result
*/
const goodKeys = (obj, callback) =>
  Object.keys(obj).filter((key) => callback(obj[key]));

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
//console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
/* 
Input : objectOfFunc and Nubmer
Output : Key of Object

create a func take object and number	
*/
// function highestFunc(objOfFuncs, subject) {
// 	 let arr = [];
//    let result = '';
//    Object.keys(objOfFuncs).map(key => {
//      arr.push(objOfFuncs[key](subject))
// 	 });

//    const max = Math.max(...arr);

//     Object.keys(objOfFuncs).map(key => {
//      if(objOfFuncs[key](subject) === max){
//        result = key
// 		 }
// 	 });
//    return result;
// }

const highestFunc = (objOfFuncs, subject) => {
  let newArr = [];
  return Object.keys(objOfFuncs).reduce((acc, key) => {
    newArr.push(objOfFuncs[key](subject));
    const max = Math.max(...newArr);
    if (objOfFuncs[key](subject) === max) acc = key;
    return acc;
  }, "");
};

const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
const combineOperations = (startVal, arrOfFuncs) =>
  arrOfFuncs.reduce((acc, curr) => (acc = curr(acc)), startVal);

function add100(num) {
  return num + 100;
}
function addTen(num) {
  return num + 10;
}
function divByFive(num) {
  return num / 5;
}
function multiplyByThree(num) {
  return num * 3;
}
function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
// function myFunc(array, callback) {
//    for(let i = 0 ; i < array.length ; i++){
//      if(callback(array[i])){
//        return i;
// 			}
// 	}
//   return -1;
// }
// const myFunc = (arr, callback) => arr.reduce((acc, curr , idx) => {
//   if(callback(curr)) acc = idx;
//   return acc;
// },-1)
const myFunc = (arr, callback) =>
  arr.reduce((acc, curr, idx) => (callback(curr) ? (acc = idx) : acc), -1);
const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const nums = [1, 2, 3];
myForEach(nums, addToSum);
// console.log(sum); // Should output 6
