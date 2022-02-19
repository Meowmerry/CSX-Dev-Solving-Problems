/*
Create a function saveOutput that accepts a function (that will accept one argument), 
and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function,
 except for when the password string is passed in as an argument. When this happens,
 the returned function will return an object with all previously passed-in arguments as keys, 
 and the corresponding outputs as values.

 Input : callback and string or number as arguments 
 Output : closure return function with number or object;

create a function  saveOutput take callback and string
    declare a cache assign to empty object
    return function with take number or string as argument
        if arge === magicWord 
            return cache
        return  assign cache with KEY : arge and VALUE
*/ 
const saveOutput = (cb, str) =>{
    const cache = {};
    return (args)=>{
        if(args === str ) return cache;
        cache[args] = cb(args);
        return cache[args];
    }
}


const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

