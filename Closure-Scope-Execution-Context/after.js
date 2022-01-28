/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: after
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// input : number and callback function;
// output : undefine before call and string
// create a function that takes a numberOfCall and callbackas argument
const after = (numOfcall, callback) => {
    // establish our count variable assign to 0;
    let count = 0;
    // closure requires us to return  a function, the function accept args.. string
    return (...string) => {
        // each time  our  returned function is  called we need to increment out count
        count++
        // check if count is greater or equal to the numOfCalls that was passed in
        if (count >= numOfcall) {
            // return callback function with passed args.. string.
            return callback(...string);
        };
    };
};

const called = function (string) { return ('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// input : number and callback function;
// output : undefine before call and string
// create a function that takes a numberOfCall and callbackas argument
const after1 = (numOfcall, callback) => {
    // declare a count set equal to string to find length;
    const count = [];
    // closure need to return function , which accept string as arguments.
    return (...string) => {
        // each time call, need to check if length of count is great or equal to numOfcall
        if (count.length >= numOfcall) {
            //then return a callback with passed arguments of string.
            return callback(...string);
        };
    };
};


const called1 = function (string) { return ('hello ' + string); };
const afterCalled1 = after1(3, called1);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled1('world')); // -> undefined is printed
console.log(afterCalled1('world')); // -> undefined is printed
console.log(afterCalled1('world')); // -> 'hello world' is printed
console.log(afterCalled1('world')); // -> 'hello world' is printed
console.log(afterCalled1('world')); // -> 'hello world' is printed

/* ========================== SOLUTION 3  ======================================
================================================================================ */
//input : numberOfTimes, callback
//output : return a function that wait for a second time and return string
const after3 = (numOfCall, cb) => {
    // declare a count to store number assign to 0
    let count = 0;
    return (string) => {
        // each time of the return function, will increment count by 1;
        count++;
        // check if count is greater or equal than numOfCall
        if (count >= numOfCall) {
            // return invoking  cb with passed in string input
            return cb(string)
        }
    }
}

const called3 = function (string) { return ('hello ' + string); };
const afterCalled3 = after3(3, called3);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled3('world')); // -> undefined is printed
console.log(afterCalled3('world')); // -> undefined is printed
console.log(afterCalled3('world')); // -> 'hello world' is printed