// Create a function that returns only strings with unique characters.
// Examples
/* ========================== SOLUTION 1  ===========================
============================================================================================= */
function filterUnique(arr) {
    return arr.filter(val => {
        return new Set(val).size === val.length;
    })
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])) //➞ ["abc"]
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) //➞ ["ABCDE", "BED", "BAC"]

/* ========================== SOLUTION 2  ===========================
============================================================================================= */
function filterUnique(arr) {
    return arr.filter(el => {
        const cache = {};
        for (const letter of el) {
            if (cache[letter] === undefined) {
                cache[letter] = 1;
            } else {
                cache[letter]++
            }
        }
        return Object.values(cache).every(num => num === 1)
        //return Object.keys(cache).length === el.length;
    });
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])) //➞ ["abc"]
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) //➞ ["ABCDE", "BED", "BAC"]

/* ========================== SOLUTION 3  ===========================
============================================================================================= */
function filterUnique(arr) {
    return arr.filter(el => {
        const cache = {};
        for (const letter of el) {
            if (cache[letter] === undefined) {
                cache[letter] = 1;
            } else {
                cache[letter]++
            }
        }
        for (const key in cache) {
            if (cache[key] > 1) return false;
        }
        return true;
    });
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])) //➞ ["abc"]
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) //➞ ["ABCDE", "BED", "BAC"]

/* ========================== SOLUTION 4  ===========================
============================================================================================= */
/*
Create a function that returns only strings with unique characters.
iterate thru arr on each ele using filter
    declare a variable unique assign to new Set(ele)
        check if size of unique is equal to len of ele
    return uninque

*/
function filterUnique4(arr) {
    return arr.filter(ele => {
        return new Set(ele).size === ele.length;
    });
}
console.log(filterUnique4(["abb", "abc",])) //➞ ["abc"]
console.log(filterUnique4(["abb", "abc", "abcdb", "aea", "bbb"])) //➞ ["abc"]
console.log(filterUnique4(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) //➞ ["ABCDE", "BED", "BAC"]

/* ========================== SOLUTION 5  ===========================
============================================================================================= */
/*
Create a function that returns only strings with unique characters.
iterate thru arr on each ele using filter,  ele will string of  current element 
    declare a cache object assign to empty object
    use for of to check ele, 
    if cache undefined assign key to cache, value = 1;
    else increment cache value by 1
    check if cache is undefined 
        ele cache key 
    use a for in cache, if cache has key value more than 1, return false
    return true;
*/
function filterUnique5(arr) {
    return arr.filter(ele => {
        const cache = {}
        for (let letter of ele) {
            if (cache[letter] === undefined) {
                cache[letter] = 1;
            } else {
                cache[letter]++
            }
        }
        for (let key in cache) {
            if (cache[key] > 1) return false;
        }
        return true;
    })
}
console.log(filterUnique5(["abb", "abc", "abcdb", "aea", "bbb"])) //➞ ["abc"]
console.log(filterUnique5(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) //➞ ["ABCDE", "BED", "BAC"]

/* ========================== SOLUTION 5  ===========================
============================================================================================= 
Create a function that returns only strings with unique characters.
Input : Array of string
Ouput : Array of string

iterate thru array using some method of Js, maybe for loop , filter , or reduce
    check if each element is unique
    return result


*/
const filterUnique5 = (array) => {
    return array.filter(ele => {
        return new Set(ele).size === ele.length;
    })
}

console.log(filterUnique5(["abb", "abc", "abcdb", "aea", "bbb"])) //➞ ["abc"]
console.log(filterUnique5(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) //➞ ["ABCDE", "BED", "BAC"]