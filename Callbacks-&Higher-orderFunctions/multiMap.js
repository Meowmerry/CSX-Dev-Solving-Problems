/* ============================== INSTRUCTIONS ==============================
 ================================================================================  Challenge: multiMap
Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/


/* ========================== SOLUTION 1  ======================================
================================================================================ */
//input : two arrays, array of value and array of callback;
//output : object
// create a function multiMap, that accepts arrays and callback function


// create a function multiMap accepts array and arrayOfCallback
const multiMap = (array, arrOfCallback) => {
    // declare a variable outterArr and set to arrayInput to iterate thru array to get key using map()
    const outterArr = array.map(key => {
        // declare a variable innerArr and set to arrOfCallbackInput to iterate thru arrOfCallback to get value using map()
        const innterArr = arrOfCallback.map(callValues => {
            // return invoke current callValues and passed in key
            return callValues(key)
        })
        // set to current key with innerArr pair; and return
        return [key, innterArr]
    })
    // use the Object.fromEntries passed outterArr and return
    return Object.fromEntries(outterArr)
}
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


/* ========================== SOLUTION 2  ======================================
================================================================================ */

// create a function multiMap accepts array and arrayOfCallback
const multiMap1 = (array, arrOfCallback) => {
    // declare a variable object = {};
    const object = {};
    // iterate thru array to get key use a forloop
    for (let i = 0; i < array.length; i++) {
        object[array[i]] = [array[i]];
    }
    for (const key in object) {
        for (let i = 0; i < arrOfCallback.length; i++) {
            object[key][i] = arrOfCallback[i](key)

        }
    }
    return object;
}
// Uncomment these to check your work!
function uppercaser1(str) { return str.toUpperCase(); }
function capitalize1(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater1(str) { return str + str; }
const items1 = ['catfood', 'glue', 'beer'];
const functions1 = [uppercaser1, capitalize, repeater1];
console.log(multiMap1(items1, functions1)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/* ========================== SOLUTION 3  ======================================
================================================================================ */
// create a function multiMap accepts array and arrayOfCallback
const multiMap2 = (array, arrOfCallback) => array.reduce((accumulator, currentvalue) => ({
    ...accumulator, [currentvalue]: arrOfCallback.map((callback) => callback(currentvalue))
}), {}
);
// Uncomment these to check your work!
function uppercaser2(str) { return str.toUpperCase(); }
function capitalize2(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater2(str) { return str + str; }
const items2 = ['catfood', 'glue', 'beer'];
const functions2 = [uppercaser2, capitalize2, repeater2];
console.log(multiMap2(items2, functions2)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


/* ========================== SOLUTION 4  ======================================
================================================================================ */
// create a function multiMap accepts array and arrayOfCallback
const multiMap3 = (array, arrOfCallback) => {
    return array.reduce((accumulator, currentValue) => {
        const callbackInner = arrOfCallback.map(func => {
            return func(currentValue)
        })
        accumulator[currentValue] = callbackInner;
        return accumulator;
    }, {})
}

// Uncomment these to check your work!
function uppercaser3(str) { return str.toUpperCase(); }
function capitalize3(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater3(str) { return str + str; }
const items3 = ['catfood', 'glue', 'beer'];
const functions3 = [uppercaser3, capitalize3, repeater3];
console.log(multiMap3(items3, functions3)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


/* ========================== SOLUTION 5  ======================================
================================================================================ */
const getValue4 = (key, callback) => callback.map(call => call(key))
const multiMap4 = (array, arrOfCallback) => {
    return array.reduce((obj, key) => {
        obj[key] = getValue4(key, arrOfCallback)
        return obj;
    }, {})
}

// Uncomment these to check your work!
function uppercaser4(str) { return str.toUpperCase(); }
function capitalize4(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater4(str) { return str + str; }
const items4 = ['catfood', 'glue', 'beer'];
const functions4 = [uppercaser4, capitalize4, repeater4];
console.log(multiMap4(items4, functions4)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }