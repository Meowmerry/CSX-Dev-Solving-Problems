/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 5
Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
const arr = ["first","second","third"];
pathFinder(obj,arr);   //-> "finish"

/* ========================== SOLUTION 1  ======================================
================================================================================ */
//Challenge 5

const pathFinder = (obj, arr, index = 0) => {
    if (index === arr.length) return obj
    return pathFinder(obj[arr[index]], arr, index + 1);
}
const obj = {
    first: { second: { third: "finish" } },
    second: { third: "wrong" }
};
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"