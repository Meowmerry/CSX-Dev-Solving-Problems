/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/*Challenge: once
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.


*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// crate a function one that accepts a callback as input;
const once = (cb) => {
    // create a variable hasBeenCalled:boolean
    let hasBeenCalled = false;  // indicated whether cb has been invoked
    // create a variable cachedResult
    let cachedResult; // store result of cb invocation
    // create a function, oncifiledCb
    function oncifiledCb(...args) { //accepts array of argruments
        if (!hasBeenCalled) { // if onefiedCb hasn't been called;

            cachedResult = cb(...args)  // invoke cb with args and store result in cachedResult

            hasBeenCalled = true;// set hasBeenCalled to true
        }
        //return cachedResult

        return cachedResult

    }
    // return oncifiledCb
    return oncifiledCb;
}

const addByTwoOnce = once(function (num) {
    return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// crate a function one that accepts a callback as input;
const once1 = (cb) => {
    const called = {};
    return (args) => called.once ? called.once : called.once = cb(args, called.once);
};

const addByTwoOnce1 = once1(function (num) {
    return num + 2;
});


console.log(addByTwoOnce1(5));  //should log 7
console.log(addByTwoOnce1(10));  //should log 7
console.log(addByTwoOnce1(9001));  //should log 7

// ========================== SOLUTION 3 ======================================
// ================================================================================

function once2(callback) {
    const counter = [];
    return (...arg) => {
        if (counter.length === 0) {
            counter.push(callback(...arg));
        }
        return counter[0];
    }
}

const addByTwoOnce2 = once2(function (num) {
    return num + 2;
});

console.log(addByTwoOnce2(5));  //should log 7
console.log(addByTwoOnce2(10));  //should log 7
console.log(addByTwoOnce2(9001));  //should log 7
// ========================== SOLUTION 4 ======================================
// ================================================================================
const once4 = (cb) => {
    const called = {};
    return (args) => {
        if (called.result) {
            return called.result
        } else {
            called.result = cb(args)
            return called.result;
        }
    }
};

const addByTwoOnce4 = once4(function (num) {
    return num + 2;
});

console.log(addByTwoOnce4(5));  //should log 7
console.log(addByTwoOnce4(10));  //should log 7
console.log(addByTwoOnce4(9001));  //should log 7

// ========================== SOLUTION 5 ======================================
// ================================================================================
// create a function that accepts a callback as input 
// input : a callback function
// output : return a function that call a callback and return output with firstime , callback invoking;
const once5 = (cb) => {
    // create a cache assign to empty object, will store the result to check if cb has been call;
    const cache = {};
    return (input) => {
        // check if cache is not undefined, we will return cache;
        if (cache.once) {
            return cache.once;
        } else {
            // otherwise, reassign cache set to evaluate of invoking cb with passed in input
            cache.once = cb(input);
            // return cache with key;
            return cache.once;
        }
    };
}
const addByTwoOnce5 = once5(function (num) {
    return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce5(5));  //should log 7
console.log(addByTwoOnce5(10));  //should log 7
console.log(addByTwoOnce5(9001));  //should log 7


