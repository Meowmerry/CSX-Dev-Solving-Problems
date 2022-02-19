
/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge 10
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.

/* ========================== SOLUTION 1 While Loop  ===========================
============================================================================================= */
function getRangeBetween(x, y, result = []) {
  let i = x + 1;
  while (i <= y - 1) {
    result.push(i)
    i++
  }
  return result;

}

console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

/* ========================== SOLUTION 2 for Loop  ===========================
============================================================================================= */
function getRangeBetween(x, y, result = []) {
  for (let i = x + 1; i <= y - 1; i++) {
    result.push(i)
  }
  return result;
}

console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

/* ========================== SOLUTION 2 for Loop  ===========================
============================================================================================= */