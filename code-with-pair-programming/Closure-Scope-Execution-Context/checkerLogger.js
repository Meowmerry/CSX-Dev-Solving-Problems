/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following 
behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

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
