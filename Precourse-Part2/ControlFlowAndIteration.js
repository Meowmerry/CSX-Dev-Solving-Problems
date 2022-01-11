/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: Control Flow and Iteration
Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
timesTenIfOverFive.map((num, i) => num >= 5 ? timesTenIfOverFive[i] = num * 10 : [])

console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const timesTenIfOverFive1 = [23, 9, 11, 2, 10, 6];
timesTenIfOverFive1.forEach((num, i) => num >= 5 ? timesTenIfOverFive1[i] = num * 10 : [])

console.log(timesTenIfOverFive1); // -> should print [230, 90, 110, 2, 100, 60]

/* ========================== SOLUTION  3  ======================================
================================================================================ */
const timesTenIfOverFive3 = [23, 9, 11, 2, 10, 6];
timesTenIfOverFive3.reduce((acc, curr, i) => curr >= 5 ? timesTenIfOverFive3[i] = curr * 10 : acc, timesTenIfOverFive3)

console.log(timesTenIfOverFive3); // -> should print [230, 90, 110, 2, 100, 60]