/*
 Create a function, combineOperations, that takes two parameters: 
 a starting value and an array of functions. 
 combineOperations should pass the starting value into the first function in the array. 
 combineOperations should pass the value returned by the first function into the second function, 
 and so on until every function in the array has been called. 
 combineOperations should return the final value returned by the last function in the array.

 In : value, arrFunc
 Out : number
 Create a function, combineOperations, that takes two parameters: a starting value and an array of functions.

 declare a variable result = 0;
    iterate thru arrayFunc
        invoke each current arrFunc and passed value input
            reassign result
    return result 
*/

function combineOperations(startVal, arrOfFuncs) {
    return arrOfFuncs.reduce((acc, curr) => {
        return curr(acc)
    }, startVal)
}
// const combineOperations = (startVal, arrOfFuncs) => arrOfFuncs.reduce((acc, curr) => acc = curr(acc), startVal)
// ========= Closure ==================
const combineOperations = (start,arrOfFuncs) => arrOfFuncs.reduce((acc,curr) => acc = curr(acc) , start)
function add100(num) {
    return num + 100;
}
function addTen(num) {
    return num + 10;
}
function divByFive(num) {
    return num / 5;
}
function multiplyByThree(num) {
    return num * 3;
}
function multiplyFive(num) {
    return num * 5;
}

console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10
