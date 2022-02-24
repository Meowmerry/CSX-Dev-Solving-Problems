/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following 
behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 } 

Example:

Input : callback Func

Output : return func with one argument OR without arguments

crete a func checkerLogger 
    declare a cache assign to empty object
    return funcInner that will accept one parameter args 			
            if args retrun true
            else no args return object with key will true and false 
                    value number     
*/
// ================= SOLUTION 1 =========================== */
const checkerLogger = (callback) => {
  const cache = { true: 0, false: 0 };
  return (args) => {
    if (!args) {
      return cache;
    }
    cache[callback(args)] += 1;
    return callback(args);
  };
};

const isOdd = (num) => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()); //->  { true: 0, false: 0 }
console.log(oddCounter(3)); //-> true
console.log(oddCounter(2)); //->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }

// ================= SOLUTION 2 =========================== */
function checkerLogger(cb) {
  //create a fxn called checkerLogger
  //i: cb (ret bool val)
  //o: returns a fxn
  //create a an obj (tracks num of times cb is invk and is true or false)
  const obj = { true: 0, false: 0 };
  //create true key
  //create false key

  return function (arg) {
    //create a returned fxn
    //i: arg (none OR arg)
    //o: boolean (from cb) OR COUNT
    // console.log(arg, cb)
    //cond: if arg is defined, invk cb, update T/F key, return bool
    if (arg) {
      if (cb(arg)) {
        obj[true]++;
        return true;
      } else {
        obj[false]++;
        return false;
      }
    } else {
      //else, if NO arg, return obj
      return obj;
    }
  };
}

// ================= SOLUTION 3 =========================== */
//declare a func taking a func that returns bool
function checkerLogger3(callback) {
  //declare an object literal key/value pair that counts booleans
  const boolObj = { true: 0, false: 0 };
  //declare an inner Func takes an arg
  const argPassed = (arg) => {
    //conditional: if arg is passed then run through passed in func, return result. Increment counter
    if (arg) {
      boolObj[callback(arg)]++;
      return callback(arg);
    }
    //if not , return object
    if (!arg) return boolObj;
  }
  //return inner func
  return argPassed;
}
const isOdd3 = num => num % 2 === 1;
const oddCounter3 = checkerLogger3(isOdd3);
console.log(oddCounter3()); //-> { true: 0, false: 0 }
console.log(oddCounter3(3)); //-> true
console.log(oddCounter3(2)); //-> false
console.log(oddCounter3()); //-> { true: 1, false: 1 }

/* ================= SOLUTION 4 =========================== 
In : callback
Out : Object or Boolean
create a func take callback
  create a cache object with {true : 0 , false : 0}
  create a return func with take no or with args
    check if no args will return cach
    otherwise will fill cache object with KEY : callback passed arge, and VALUE will increment by 1
    return callback passed args
*/
const checkerLogger4 = (callback) => {
  const cache = { true: 0, false: 0 }
  return (args) => {
    if (!args) {
      return cache;
    }
    cache[callback(args)] += 1;
    return callback(args);
  }
}


const isOdd4 = num => num % 2 === 1;
const oddCounter4 = checkerLogger4(isOdd4);
console.log(oddCounter4()); //-> { true: 0, false: 0 }
console.log(oddCounter4(3)); //-> true
console.log(oddCounter4(2)); //-> false
console.log(oddCounter4()); //-> { true: 1, false: 1 }

if (!args) {
  return cache;
}
cache[callback(args)] += 1;
return callback(args);
