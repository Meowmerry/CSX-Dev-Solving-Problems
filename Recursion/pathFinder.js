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
const pathFinder = (obj, arr, i = 0) => {
    if (!arr[i]) return obj;
    return pathFinder(obj[arr[i]], arr, i + 1)
}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"


/* ========================== SOLUTION 2  ======================================
================================================================================ */

const pathFinder2 = (obj, arr, index = 0) => {
    if (index === arr.length) return obj
    return pathFinder2(obj[arr[index]], arr, index + 1);
}
const obj1 = {
    first: { second: { third: "finish" } },
    second: { third: "wrong" }
};
const arr1 = ["first", "second", "third"];
console.log(pathFinder2(obj1, arr1));   //-> "finish"