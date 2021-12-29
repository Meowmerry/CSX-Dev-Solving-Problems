/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 
Challenge: dateStamp
Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */

// Create a function dateStamp that accepts a function and returns a function
const dateStamp = (func) => {
    // return function will accept whatever arguments same the dateStamp passed-in
    return (...args) => {
        // declare an empty object set to {};
        const object = {};
        // updated object with a date as key , value is today's date; 
        object.date = new Date().toString().slice(0, 15);
        // and output key that contains the result from invoking the passed-in function.
        object.output = func(...args);
        // return the object;
        return object;
    };
};

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

/* ========================== SOLUTION 1  ======================================
================================================================================ */

// declare a function, dateStanom that has 1 parameter : a function;
const dateStamp1 = (func) => {
    // return a function that accepts any arguments that the passed-in function accepts;
    return (...args) => {
        // creat an object;
        const object = {}
        // creat a property with the key 'date' and the value of today's date (ont including the time)
        object.date = new Date().toDateString();
        // create a property with the key'output' and the value of the output of the passed-in function and its arguments
        object.output = func(...args);
        // return the object;
        return object;
    };
};

const stampedMultBy21 = dateStamp1(n => n * 2);
console.log(stampedMultBy21(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy21(6)); // should log: { date: (today's date), output: 12 }



/* =============================================================================
================================================================================ */
const newFun = (...args) => {
    return args.forEach((ele) => {
        console.log(ele)
    })
}
console.log(newFun(1, 2, 3))



function sum(...theArgs) {
    console.log(...theArgs)
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

function sum(nums) {
    //console.log(nums)
    const x = nums.map(x => x + 2)
    return x;
    //return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(numbers));