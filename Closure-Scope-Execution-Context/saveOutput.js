/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: saveOutput
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */

// create a funciton that accepts a function  and string ;
// input : a function that accept one arguments ,  string will act as a password;
// output : if input is a number, will return number, otherwish if accept string will return an object;

const saveOutput = (callback, password) => {
    // declare a output assign to empty object {} 
    const object = {};
    // creat return function that closure need to be return out to outter function.
    return (args) => {
        // check if the args is a equal to password, then reassign object with all previously passed-in arguments as keys 
        // and corresponding outputs as a value;
        if (args === password) {
            return object;
        }
        // reassign object and assign to invoke a callback function and accept args,
        // return value of object;
        return object[args] = callback(args);
    };
};

const multiplyBy2 = function (num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

/* ========================== SOLUTION 2  ======================================
================================================================================ */

const saveOutput1 = (cb, pass) => {
    const object = {};
    return (args) => {
        if (args === pass) {
            return object
        };
        object[args] = cb(args);
        return object[args];
    };
};
const multiplyBy22 = function (num) { return num * 2; };
const multBy2AndLog2 = saveOutput1(multiplyBy22, 'boo');
console.log(multBy2AndLog2(2)); // should log: 4
console.log(multBy2AndLog2(9)); // should log: 18
console.log(multBy2AndLog2('boo')); // should log: { 2: 4, 9: 18 }


/* ========================== SOLUTION 3  ======================================
================================================================================ */
// declear a funciton saveOutput  that takes two arguments : a funciton and a string
const saveOutput2 = (func, password) => {
    // declear an object 'cache' that will store the  previose arguments and corresponding
    const cache = {}
    // declear a return function inner that take one argument
    return (args) => {
        // if the argument passed is the password
        if (args === password) {
            // return the cache object
            return cache;
        } // otherwise if arg  !==  password
        else {
            // create a new entry in our cache object for our  current argument 
            // the  value associated with this  object key will be the result of invoking  
            // func with the argument
            cache[args] = func(args)
            // return the value associated with the argument  in our cache object
            return cache[args]
        }
    }
}

const multiplyBy21 = function (num) { return num * 2; };
const multBy2AndLog1 = saveOutput2(multiplyBy21, 'boo');
console.log(multBy2AndLog1(2)); // should log: 4
console.log(multBy2AndLog1(9)); // should log: 18
console.log(multBy2AndLog1('boo')); // should log: { 2: 4, 9: 18 }

/* ========================== SOLUTION 4  ======================================
================================================================================ */
const saveOutput3 = (callback, password) => {
    // declare a variable empty object;
    let object = {};
    // saveOutput will then return a function that behaves exactly like the passed-in function
    // exept for when the password string is passed in as argument, will return an object 
    return (input) => {
        // check if input args === password than return an object with all previously passed-in arguments as keys, and the corresponding outputs as values
        if (input === password) {
            return object;
        } else {
            return object[input] = callback(input)
        }
    }
}

// Uncomment these to check your work!
const multiplyBy3 = function (num) { return num * 2; };
const multBy3AndLog = saveOutput3(multiplyBy3, 'boo');
console.log(multBy3AndLog(2)); // should log: 4
console.log(multBy3AndLog(9)); // should log: 18
console.log(multBy3AndLog('boo')); // should log: { 2: 4, 9: 18 }


/* ========================== SOLUTION 4  ======================================
================================================================================ */
//Input : function that will take one argument, String will act as a password;
//Ouput : function that return and behaves like a passed-in function, and return Number and Object
function saveOutput4(func, magicWord) {
    // declare an object to store key value 
    const object = {}
    // return function that behaves like func, accept one parameter
    return (input) => {
        // check if input is equal to magicWord, return object
        if (input === magicWord) {
            return object;
        } // otherwise, reassign object : key will be input and value will be invoking func passed in input
        // return object with key;
        return object[input] = func(input);
    }
}
// /*** Uncomment these to check your work! ***/
const multiplyBy4 = function (num) { return num * 2; };
const multBy4AndLog = saveOutput4(multiplyBy4, 'boo');
console.log(multBy4AndLog(2)); // => should log 4
console.log(multBy4AndLog(9)); // => should log 18
console.log(multBy4AndLog('boo')); // => should log { 2: 4, 9: 18 }

/* ========================== SOLUTION 4  ======================================
================================================================================ */
//Input : function that will take one argument, String will act as a password;
//Ouput : function that return and behaves like a passed-in function, and return Number and Object
function saveOutput5(func, magicWord) {

}

const multiplyBy5 = function (num) { return num * 2; };
const multBy5AndLog = saveOutput5(multiplyBy5, 'boo');
console.log(multBy5AndLog(2)); // => should log 4
console.log(multBy5AndLog(9)); // => should log 18
console.log(multBy5AndLog('boo')); // => should log { 2: 4, 9: 18 }
