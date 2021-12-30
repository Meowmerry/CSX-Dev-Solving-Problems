/** #1 SUM ALL */
function sumAll(arr) {
    // check if high or low value come first and sort arr
    //let sortedArr = arr.sort((a,b) => a-b );
    let min = arr[0] < arr[1] ? arr[0] : arr[1];
    let max = arr[0] > arr[1] ? arr[0] : arr[1];
    let sum = 0;
    //iterate tru low to high value and add to sum
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

//console.log(sumAll([4,1]))
// ----------------------------------------------

/** #3 SEEK and DESTROY  **/
// NOTE: caveat on access arguments object with arrow function will NOT work
function destroyer(arr) {

    // get all - except the first arg, arguments and store in argArray
    const argArray = [...arguments].slice(1);
    // iterate tru arr, check if the current elem of arr includes in argArray
    // keep the elem that is NOT includes and store in resultArray
    const resultArray = arr.filter(el => !argArray.includes(el));
    // return resultArray
    return resultArray;
}
// console.log(destroyer([1,2,3,1,2,3], 2,3))
//---------------------------
/** #4 WHERE ART THOU  **/
function whatIsInAName(collcetion, source) {
    // create a resultArray to build up the results, init to empty array
    const resultArray = [];
    // get array of all keys from the source
    const sourceKeys = Object.keys(source);
    // iterate thru each obj in the collection 
    for (const obj of collection) {
        // keeptrack of each loop if keys-value is match or not
        // assume the current obj's keys-value ismatch is true for now
        let hasAllKeyValueMatch = true;
        // iterate thru sourceKeys
        for (const key of sourceKeys) {
            // check if the key is NOT exist and also have the same value, then set ismatch to false, and terminate the loop
            /** What if the key exists but the value is actually undefined? **/
            if (!obj.hasOwnProperty(key) && obj[key] !== source[key]) {
                hasAllKeyValueMatch = false;
                break;
            }
        }
        // after the loop, if ismatch is still ture, then push that obj to resultArray
        if (hasAllKeyValueMatch) {
            resultArray.push(obj)
        }
    }
    // return a resultArray
    return resultArray;
}
// REFACTOR ------ uisng filter
function whatIsInAName2(collcetion, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => {
        let hasAllKeyValueMatch = true;
        for (const key of sourceKeys) {
            if (obj[key] !== source[key]) {
                hasAllKeyValueMatch = false;
                break;
            }
        }
        // keep only obj that have hasAllKeyValueMatch === true in the filter result
        return hasAllKeyValueMatch
    })
}

// const testObj = { key1: undefined, key2: undefined}
// const sourceObj = { key1: undefined}
// console.log("TEST OBJ Key1", testObj['key1'] !== sourceObj['key1'] ) // false
// // be aware that key2 is not exist in sourceObj *****
// console.log("TEST OBJ Key1", testObj['key2'] !== sourceObj['key2'] ) // true
// console.log("TEST OBJ Key2", sourceObj['key2'] ) // undefined
// console.log("TEST OBJ Key2", testObj['key2'] !== undefined ) // false 
// -----------------------------
/** #5  SPINAL TAP CASE  */
// rules
// 1. all lower case
// 2. _ and ' '(spaces) determines a new word become hyphens (-)
// 3. capital case always determins the start of a new word, but now all words start with a capital case. Spectially, the first word in the string does not have to be capitalized

function spinalCase(str) {
    const wordArray = [];
    let tempString = '';

    // itrate over str
    // every time that we want to start a new tempString
    // if tempstring is not empty -> push tempStr to wordArray
    for (const char of str) {
        if (char === '_' || char === ' ') {
            if (tempString.length) wordArray.push(tempString);
            tempString = '';
        } else if (char === char.toUpperCase()) {
            if (tempString.length) wordArray.push(tempString);
            tempString = char.toUpperCase();
        } else {
            tempString += char;
        }
    }

    // push the last tempString at the end of loop
    if (tempString.length) wordArray.push(tempString);

    // return newString
    return wordArray.join('-');
}

// -------------------
/** #6 PIG LATIN **/
const translatePigLatin = (str) => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // at the very first, if the first char is VOWELS
    if (VOWELS.includes(str[0])) return str + 'way';

    let consonantCluster = '';
    let vowelIndex = 0;
    for (let i = 0; i < str.length; i++) {
        if (VOWELS.includes(str[i])) {
            vowelIndex = i;
            break;
        }
        consonatCluster += str[i];
    }

    return str.subString(vowelIndex) + consonantCluster + 'ay';
}
// -------------------
/** #7 SEARCH AND REPLACE **/


//-----------------------------
//---#12 sumFib
function sumFib(num) {
    // let a = 1;
    // let b = 1;
    let [a, b] = [1, 1];
    let sum = a;

    while (b <= num) {
        if (b % 2 !== 0) {
            sum += b;
        }
        // let temp = a+b;
        // a = b;
        // b = temp;
        [a, b] = [b, a + b];
    }

    return sum;
}

//console.log(sumFib(4));

//-----#13 Sum All Prime
// function sumPrime (num){
//   // if (num < 2){
//   //   return 0;
//   // }

//   const primeNumber = [2];
//   for (let i=3; i<=num; i++){
//     for (const p of primeNumber){
//       console.log(i,p,i % p,i % p !== 0  );

//       if(i % p !== 0 && i% 2 !== 0){
//         primeNumber.push(i);
//         break; //---otherwise it loop and push same number
//       }
//     } 

//   }
//   console.log(primeNumber);
// }

// sumPrime(7);

//-------#15 Drop it
function dropElement(arr, func) {
    // let trueIndex = -1;
    // for (let i=0; i<arr.length; i++){
    //   if (func(arr[i])){
    //     trueIndex = i;
    //     break;
    //   }
    // }
    let trueIndex = arr.findIndex(func);

    return trueIndex === -1 ? [] : arr.slice(trueIndex);
}

// const result = dropElement([1,2,3], function(n) {return n === 2;});
// console.log(result);

//----#15 Drop it--solution 2

function dropElem(arr, func) {
    for (let i = 0; i <= arr.length; i++) {
        // first check if i is already at arr.lenght index which means we alreay looo pass the last index wich have never met condition

        if (i === arr.length) {
            return [];
        } else {
            if (func(arr[i])) {
                return arr.slice(i)
            }
        }
    }
}
const result = dropElem([1, 2, 3], function (n) { return n === 5; });
//console.log(result);

// merge two sorted arrays
function mergeSorted(arr1, arr2) {
    //create an arr var to be return
    const resultArr = [];
    //loop tru arr1 and arr2
    //check which val is smaller
    //if arr1[i] is smaller
    //push arr1[i] to new arr
    //check if arr[i] is the last el in arr
    //if ture, push the rest of arr2 to new arr
    // else,   


    //return new arr
}

//---- Udemy JS algorithm #27 frequency counter------
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let ob1 = {};
    let ob2 = {};

    for (let el of arr1) {
        ob1[el] = ob1[el] + 1 || 1;
    }

    for (let el of arr2) {
        ob2[el] = ob2[el] + 1 || 1;
    }
    console.log(ob1);
    console.log(ob2);
    for (let k in ob1) {
        if (ob2[k ** 2] !== ob1[k]) {
            return false;
        }
    }
    return true;
}

let a = [1, 2, 3, 2];
let b = [9, 1, 4, 4];
console.log(same(a, b));