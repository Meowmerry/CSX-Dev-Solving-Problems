////////////////////////////
//     Challenge 1
////////////////////////////
//input char num
//output is the char repeat num of times
//base case n = 0 return char
//char
//repeater(char n - 1)

function repeater(char, n = 5) {
    if (n === 1) return char;
    return char + repeater(char, n - 1);

    // if (n === 1) return char;
    // return repeater(char[0] + char, n - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'

////////////////////////////
//     Challenge 2
////////////////////////////

function isEven(n) {
    if (n === 0) return true;
    if (n % 2 !== 0) return false;
    return isEven(n - 2);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true

////////////////////////////
//     Challenge 3
////////////////////////////

//input number that want the factorial
//ouput number which is the factorial of num passed as argument
//base case num === 1 return
//num * factorcial(num - 1)
function factorial(num, product = 1) {
    // if(num === 0){
    // return 1;
    // }
    // if(num === 1) {
    // return num;
    // }
    // return num * factorial(num - 1);

    if (num === 0 || num === 1) return product;
    return factorial(num - 1, product * num);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

////////////////////////////
//     Challenge 4
////////////////////////////

// In  : Array
// Output : Number

// create a fucntion take array as arguemtn
// base case : if array is undefined  return i
// recuresive case : invoke getLength passed in array , i icrement by 1
function getLength(array, i = 0) {
    // if(array[i] === undefined) return i;
    if (!array.hasOwnProperty([i])) return i;
    return getLength(array, i + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 'ss', 3, 4, 5])); // -> 5

////////////////////////////
//     Challenge 5
////////////////////////////

//input num base number for exponent sum to keep track of evaluation
//output a number
//base case: if exponent = 0
//recursive case: invoke function pow with arguments base exponent - 1 sum * base
function pow(base, exponent, sum = 1) {
    if (exponent === 0) {
        return sum;
    }
    return pow(base, exponent - 1, sum * base);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////
// In : Number , Array of func;
// Out : Number
// base case : if funcArray is undefined return input
// recursive case : call flow func and passed , input, fuceArray at current func passed in input , i by incrent i by 1

function flow(input, funcArray, i = 0) {
    if (!funcArray[i]) return input;
    return flow(funcArray[i](input), funcArray, i + 1);

    // return funcArray.reduce((acc, currFun) =>{
    // acc = currFun(acc)
    // return acc;
    // },input)
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) {
    return num * 2;
} // 4
function add7(num) {
    return num + 7;
} // 4 + 7 = 11
function modulo4(num) {
    return num % 4;
} // 11 / 4 = 3
function subtract10(num) {
    return num - 10;
} // 3 -10  = -7
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

////////////////////////////
//     Challenge 7
////////////////////////////

function fib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}

// To check if you've completed the challenge, uncomment this code!
console.log(fib(1)); // -> 1
console.log(fib(2)); // -> 1
console.log(fib(7)); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////

// Input : Number
// Output : Array with subArray
// creat a func take number
// declare buffer assign to empty array
// declare ans assing to empty array
// base case : if buffer.length === n
//  fill ans array using push and push buffer to ans
// return ans;
// recursive case :
//  call headsOrTails function and passed (n, buffer with 'heads', ans )
//  call headsOrTails function and passed (n, buffer with 'tails', ans )

function headsOrTails(n, buffer = [], ans = []) {
    if (buffer.length === n) {
        ans.push(buffer);
        return ans;
    }

    headsOrTails(n, [...buffer, "heads"], ans);
    headsOrTails(n, [...buffer, "tails"], ans);

    return ans;
}

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'], //1 1 1
//   ['heads', 'heads', 'tails'], //1 1 0
//   ['heads', 'tails', 'heads'], //1 0 1
//   ['heads', 'tails', 'tails'], //1 0 0
//   ['tails', 'heads', 'heads'], //0 1 1
//   ['tails', 'heads', 'tails'], //0 1 0
//   ['tails', 'tails', 'heads'], //0 0 1
//   ['tails', 'tails', 'tails'], // 0 0 0
// ]

////////////////////////////
//     Challenge 9
////////////////////////////

function getAllCombos(arr, buffer = [], ans = [], index = 0) {
    if (index === arr.length) {
        ans.push(buffer);
        return ans;
    }

    getAllCombos(arr, [...buffer, arr[index]], ans, index + 1);
    getAllCombos(arr, [...buffer], ans, index + 1);

    return ans;
}
// To check if you've completed the challenge, uncomment this code!
console.log(getAllCombos(["a", "b"])); // -> [['a','b'], ['a'], ['b'], []]
console.log(getAllCombos(["a", "b", "c"]));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]

/* Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative. 

console.log(strCopies("catcowcat", "cat", 2) )//=> true
console.log(strCopies("catcowcat", "cow", 2)) //=> false
console.log(strCopies("catcowcat", "cow", 1)) //=> true

In : string 
Out : boolean

create a func take string, string , number 
        declare a count default assign to 0;
    base case :
    - if string is empty return false
    - if stri start by str2 count increment by 1
    - if count is equal to number return true;
    recursive case : 
    invoke strCompies with passed in str1.slice(1) , str2, count

*/
const strCopies = (str1, str2, target, count = 0) => {
    if (str1.length === 0) return false;
    if (str1.startsWith(str2)) count += 1;
    if (count === target) return true;

    return strCopies(str1.slice(1), str2, target, count);
};

// console.log(strCopies("catcowcat", "cat", 2) )//=> true
// console.log(strCopies("catcowcat", "cow", 2)) //=> false
// console.log(strCopies("catcowcat", "cow", 1)) //=> true
