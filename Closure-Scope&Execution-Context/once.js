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
    console.log(cachedResult)
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
    // return (...args) => called.once ? called.once : called.once = cb(...args, called.once);
    return (...args) => {
        if (called.once) {
            called.once;
        } else {
            called.once = cb(...args, called.once);
            //console.log(called)
        }
        return called.once;
    }
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
    return returnedFunc = (...arg) => {
        if (counter.length === 0) {
            // console.log(callback(...arg))
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