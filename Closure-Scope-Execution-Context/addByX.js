/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: addByX
Now we are going to create a function addByX that returns a function that will add an input by x.

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
const addByX = (num) => (input) => num + input;
const addByTwo = addByX(2);
// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));

const addByThree = addByX(3);
console.log(addByThree(1));
console.log(addByThree(2));

const addByFour = addByX(4);
console.log(addByFour(1));
console.log(addByFour(2));

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const addByXX = (num) => {
    return (input) => {
        return num + input;
    }
}
const addByTwo1 = addByXX(2);
// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo1(1));
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo1(2));

const addByThree1 = addByXX(3);
console.log(addByThree1(1));
console.log(addByThree1(2));

const addByFour1 = addByXX(4);
console.log(addByFour1(1));
console.log(addByFour1(2));

