// Type JavaScript here and click "Run Code" or press Ctrl + s

// Challenge 1
const addTwo = (num) => num + 2;

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
const addS = (str) => str + "s";
// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(callback(array[i]));
  }
  return result;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  const result = [];

  forEach(array, function (element) {
    result.push(callback(element));
  });

  return result;
}

// Challenge 6
function reduce(array, callback, initialValue) {
  let accumultor;

  if (initialValue === undefined) {
    accumultor = array[0];
    array = array.slice(1);
  } else {
    accumultor = initialValue;
  }

  for (let i = 0; i < array.length; i += 1) {
    accumultor += array[i];
  }

  return accumultor;
}

// Challenge 7
function intersection(arrays) {
  return arrays.reduce(function (acc, curr) {
    const result = [];
    acc.filter(function (element) {
      if (curr.includes(element)) {
        result.push(element);
      }
    });
    return result;
  });
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  // let newArr = arrays.flat()
  // let result = []
  // for(let i = 0; i < newArr.length; i++){
  // if(!result.includes(newArr[i])){
  // result.push(newArr[i])
  // }
  // }
  // return result

  return [...new Set(arrays.flat())];
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  return array1.reduce((acc, curr, i) => {
    if (callback(curr) === array2[i]) {
      acc[curr] = array2[i];
    }

    return acc;
  }, {});
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let obj = {};
  for (let i = 0; i < arrVals.length; i++) {
    let currentValue = arrVals[i];
    let newArr = [];

    for (let j = 0; j < arrCallbacks.length; j++) {
      let eachCallBack = arrCallbacks[j];
      newArr.push(eachCallBack(currentValue));
    }
    obj[currentValue] = newArr;
  }
  return obj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// const multiMap3 = (array, arrOfCallback) => {
//     return array.reduce((accumulator, currentValue) => {
//         const callbackInner = arrOfCallback.map(func => {
//             return func(currentValue)
//         })
//         accumulator[currentValue] = callbackInner;
//         return accumulator;
//     }, {})
// }

// const multiMap2 = (array, arrOfCallback) => array.reduce((accumulator, currentvalue) => ({
//     ...accumulator, [currentvalue]: arrOfCallback.map((callback) => callback(currentvalue))
// }), {}
// );

// Challenge 11
function objectFilter(obj, callback) {
  return Object.keys(obj).reduce((acc, key) => {
    if (callback(key) === obj[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};

// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;

  array.forEach(function (element) {
    if (callback(element)) {
      trueCount++;
    } else {
      falseCount++;
    }
  });
  if (trueCount === falseCount) {
    return false;
  }
  return true;
}

// /*** Uncomment these to check your work! ***/
const isOddX = function (num) {
  return num % 2 === 1;
};
// console.log(majority([1, 2, 3, 4, 5], isOddX)); // should log: true
// console.log(majority([2, 3, 4, 5], isOddX)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const arr1 = array.filter((ele) => callback(ele));
  const arr2 = array.filter((ele) => !callback(ele));
  return [...arr1, ...arr2];
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {
  // iterate through the array
  return array.reduce(function (acc, ele) {
    if (acc[callback(ele)]) {
      acc[callback(ele)]++;
    } else {
      acc[callback(ele)] = 1;
    }
    return acc;
  }, {});
  // perform callback on each element
  // each return value from callback will be saved as a key on the object
  // the value will be the number of times that particular return value was returned
  // returnas an obj
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  //   const obj = {};
  //   array.forEach((ele) =>{

  //     	if(!obj[callback(ele)]) {

  //           obj[callback(ele)] = [ele]
  // 			}else{
  //          obj[callback(ele)].push(ele)
  //       }

  // 	})
  //    return obj

  return array.reduce(function (acc, curr) {
    if (!acc[callback(curr)]) {
      acc[callback(curr)] = [curr];
    } else {
      acc[callback(curr)].push(curr);
    }
    return acc;
  }, {});
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  // accepts an obj and callback
  //   const newArr = []

  //   for(let key in obj){
  //     if(callback(obj[key])){
  //       newArr.push(key)
  //     }
  //   }
  //   return newArr
  // callback will return true or false
  // goodkeys will iterate through the object and perform callback on each value
  // it will return an array consisiting of keys whose values returned true from the callback

  return Object.keys(obj).reduce((acc, key) => {
    if (callback(obj[key])) {
      acc.push(key);
    }
    return acc;
  }, []);
}

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
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
/* 
In : Two callback, Number
Out : Boolean



*/
function commutative(func1, func2, value) {
  let result1 = func1(value);
  let result2 = func2(result1);

  let output1 = func2(value);
  let output2 = func1(output1);

  if (result2 === output2) return true;
  else return false;
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3; // 33/4
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  const output = {};

  for (let key in obj) {
    if (callback(key) === obj[key]) {
      output[key] = obj[key];
    }
  }
  return output;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
// console.log(startingObj) //{ 2: 1, 6: 3, 12: 4 }
const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let trueCount = 0;
  // inputs an array of function and a value
  arrOfFuncs.forEach(function (element) {
    if (element(value)) {
      trueCount++;
    }
  });
  return (trueCount / arrOfFuncs.length) * 100;
  // all functions will return true or false
  // return the percentage of functions that return true when value is passed in as input
}

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, curr) => {
    value = curr(value);
    acc = value;
    return acc;
  }, value);

  //   for(let i = 0 ; i < arrOfFuncs.length ; i += 1){

  //        value = arrOfFuncs[i](value)
  //       console.log(value)

  // 	}
  //   return value
}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();// CAT + cat + CAT + cat
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  const arr = [];

  return Object.keys(objOfFuncs).reduce((acc, keyFunc) => {
    arr.push(objOfFuncs[keyFunc](subject));

    const max = Math.max(...arr);
    if (max === objOfFuncs[keyFunc](subject)) {
      acc = keyFunc;
    }

    return acc;
  }, "");
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce(function (acc, curr) {
    acc = curr(acc);
    return acc;
  }, startVal);
}

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
// console.log(combineOperations(0, [divByFive, multiplyByThree, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  return array.reduce((acc, curr, i) => {
    if (callback(curr)) {
      acc = i;
    }
    return acc;
  }, -1);
}

const numbers = [2, 2, 6, 64, 11, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  return array.reduce(function (acc, curr) {
    acc = callback(curr);
    return acc;
  }, 0);
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6
