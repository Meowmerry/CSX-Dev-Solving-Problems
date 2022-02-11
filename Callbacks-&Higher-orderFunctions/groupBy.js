/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: checkerLogger
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback. */


/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : array, callback
// output : object with array element
// create a function groupBy that accepts an array and a callback as agruments;
const groupBy = (arr, callback) => {
    // declare an empty object {} to store result;
    const object = {};
    // iterate thru array input, use a filter
    arr.filter(ele => {
        // invoke a callback function passed in current element and ressign object with key
        // object[callback(ele)] === undefined ? object[callback(ele)] = [ele] : object[callback(ele)].push(ele)
        // determined if object[callback(ele)] === undefined, ressign object[callback(ele)] = [ele]
        if (object[callback(ele)] === undefined) {
            object[callback(ele)] = [ele]
        } else {
            object[callback(ele)].push(ele)
        }
    });

    // return object;
    return object;
}
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
/* ========================== SOLUTION 2  ======================================
================================================================================ */
const groupBy1 = (arr, callback) => (
    arr.reduce((objOutput, current) => {
        !objOutput[callback(current)] ? objOutput[callback(current)] = [current] : objOutput[callback(current)].push(current)
        return objOutput;
    }, {}))

const decimals1 = [1.3, 2.1, 2.4];
const floored1 = function (num) { return Math.floor(num); };
console.log(groupBy1(decimals1, floored1));

/* ========================== SOLUTION 3  ======================================
================================================================================ */
// input : array, callback
// output : object with array element
// create a function groupBy that accepts an array and a callback as agruments;
const groupBy2 = (arr, callback) => {
    // declare an empty object {} to store result;
    const object = {};
    // iterate thru array input, use a forEach
    arr.forEach(ele => {
        // determined with callback passed in current element, if === undefined;
        // invoke a callback function passed in current element and ressign object with key
        if (object[callback(ele)] === undefined) {
            // reassign object with key is callback pass current element, equal to [ele]
            object[callback(ele)] = [ele]
        } else {
            // otherwish, push ele to it;
            object[callback(ele)].push(ele)
        }
    });
    // return object;
    return object;
}

// Uncomment these to check your work!
const decimals2 = [1.3, 2.1, 2.4];
const floored2 = function (num) { return Math.floor(num); };
console.log(groupBy2(decimals2, floored2)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/* ========================== SOLUTION 4  ======================================
================================================================================ */
// create a function a group by
// input : array , callback
// output : object
const groupBy3 = (arr, callback) => {
    // declare the object assign empty {}
    const object = {};
    // iterate thru arr
    for (let i = 0; i < arr.length; i++) {
        // add key value pair into our object;
        let current = arr[i];
        let callbackResult = callback(current);

        // key: each result of passing in the element into the callback
        // value: an array of all the elemtent that resulted in that key
        // if thre property doensn't exist
        if (!object[callbackResult]) {
            // add the key value pairs into the object;
            object[callbackResult] = [current];

        } else {
            // otherwise if the property does exist
            // access the value, add the current element into the existing value array
            object[callbackResult].push(current)
        }
        //console.log(object[callbackResult])
    }
    // return object;
    return object;
}

// Uncomment these to check your work!
const decimals3 = [1.3, 2.1, 2.4];
const floored3 = function (num) { return Math.floor(num); };
console.log(groupBy3(decimals3, floored3)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

