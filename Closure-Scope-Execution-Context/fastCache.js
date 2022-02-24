/*Create a function "fastCache" that takes one argument (a function) and returns a function. 
When fastCache is invoked it creates an object that tracks calls to the returned function, 
where each input to the returned function is associated with its output. 
Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
//SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object
//MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object

In : callback
Out : Closure 
        : Inner func take Number as argument
    : Output : value from object

crete a func take callback as argument
    declare a cache assign to empty object
  
  creat a inner func take Number as arguments
  
                 check if cache with KEY : input Number , is not underfine 
            if checke Value is equal to input Number
              return cache
            
            else 	fill cache KEY : Input number  , VALUE will invoke callback with passed input Number
            return cache VALUE
*/
/* ================== SOLUTION 1  ==================  */
const fastCache = (callback) => {
    const cache = {};
    return (args1, args2) => {
        if (cache["key"] === args1) {
            cache["key"] = callback(args1);
        } else {
            cache["key"] = callback(args1, args2);
        }
        return cache["key"];
    };
};
//example:
//SINGLE ARGUMENT CASE
const multiplyBy2 = (num) => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
console.log(cachedMultiplyBy2(100)); // -> 200
console.log(cachedMultiplyBy2(150)); // -> 300
console.log(cachedMultiplyBy2(100)); // -> 200 // from the cache object
// //MULTIPLE ARGUMENTS CASE

const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
console.log(cachedSumMultiplyBy2(5, 10)); // -> 30
console.log(cachedSumMultiplyBy2(1, 2)); // -> 6
console.log(cachedSumMultiplyBy2(5, 10)); // -> 30 // from the cache object
/* ================== SOLUTION 2  ==================  */
const fastCache2 = (callback) => {
    const cache = {};
    return (args1, args2) => {
        if (cache['key'] !== args1) {
            cache['key'] = callback(args1);
        }
        cache['key'] = callback(args1, args2);
        return cache['key'];
    }
}
//example:
//SINGLE ARGUMENT CASE
const multiplyBy22 = num => num * 2;
const cachedMultiplyBy22 = fastCache2(multiplyBy22);
console.log(cachedMultiplyBy22(100)); // -> 200
console.log(cachedMultiplyBy22(150)); // -> 300
console.log(cachedMultiplyBy22(100)); // -> 200 // from the cache object
// // //MULTIPLE ARGUMENTS CASE

const sumMultiplyBy22 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy22 = fastCache2(sumMultiplyBy22);
console.log(cachedSumMultiplyBy22(5, 10)); // -> 30
console.log(cachedSumMultiplyBy22(1, 2)); // -> 6
console.log(cachedSumMultiplyBy22(5, 10)); // -> 30 // from the cache object
