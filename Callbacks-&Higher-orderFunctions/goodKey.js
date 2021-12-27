/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: goodKeys
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback. */


/* ========================== SOLUTION 1  ======================================
================================================================================ */
// create a function goodDeys that accepts and object and a callback
// input: object, and callback
// output : array
const goodKeys = (object, callback) => {
    // declare a result variable assign to empty array;
    const result = [];
    // iterate thru object use a for in loop
    for (let key in object) {
        console.log(object[key])
        // in if statement invoke a callback and passed in current element
        if (callback(object[key])) {
            // push each key  to result array;
            result.push(key)
        }
    };
    // return result;
    return result;
}
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// create a function goodDeys that accepts and object and a callback
// input: object, and callback
// output : array
const goodKeys1 = (object, callback) => {
    let result = [];
    for (const key in object) {
        callback(object[key]) ? result.push(key) : []
    }
    return result;
}
const sunny1 = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird1(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys1(sunny1, startsWithBird1)); // should log: ['charlie', 'dee']

/* ========================== SOLUTION 3  ======================================
================================================================================ */
// create a function goodDeys that accepts and object and a callback
// input: object, and callback
// output : array
function goodKeys2(obj, callback) {
    const arr = [];
    for (const ele of Object.entries(obj)) {
        if (callback(ele[1])) {
            arr.push(ele[0])
        }
    }
    return arr;
}
const sunny2 = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird2(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys2(sunny2, startsWithBird2)); // should log: ['charlie', 'dee']


/* ========================== SOLUTION 4  ======================================
================================================================================ */
// create a function goodDeys that accepts and object and a callback
// input: object, and callback
// output : array
const goodKeys4 = (object, callback) => Object.keys(object).filter(key => callback(object[key]));

const sunny4 = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird2(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys4(sunny4, startsWithBird2)); // should log: ['charlie', 'dee']


/* ========================== SOLUTION 5  ======================================
================================================================================ */
// create a function goodDeys that accepts and object and a callback
// input: object, and callback
// output : array
const goodKeys5 = (object, callback) => Object.keys(object).reduce((acc, curr) => {
    callback(object[curr]) ? acc.push(curr) : acc
    return acc;
}, [])

const sunny5 = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird5(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys5(sunny5, startsWithBird5)); // should log: ['charlie', 'dee']