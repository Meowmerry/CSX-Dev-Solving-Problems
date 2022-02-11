/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 6
Write a recursive function flattenRecursively that flattens a nested array. 
Your function should be able to handle varying levels of nesting.


/* ========================== SOLUTION 1  ======================================
================================================================================ */

function flattenRecursively(arr) {
    let result = [];
    if(!Array.isArray(arr)){
      return arr;
    }
    arr.forEach(item=> {
      result = result.concat(flattenRecursively(item));
      
    })
    return result;
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]