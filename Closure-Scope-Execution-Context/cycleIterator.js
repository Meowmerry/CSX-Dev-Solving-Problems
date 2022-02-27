/* ============================== INSTRUCTIONS ==============================
 ================================================================================ 

Challenge: cycleIterator
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */

// create a function cycleIterator that accepts an array
// input : array
// output : return function
const cycleIterator = (array) => {
    // declear a variable checkIndex and assign started at 0;
    let checkIndex = 0;
    // create a return function that accept zero arguments.
    return function () {
        // declear a result variable return each element of the array in sequence when invoked
        // Grap the value on each element in array using the checkIndex;
        // Update the checkIndex by incrementing by 1++; and set to result
        const result = array[checkIndex++];
        // check if checkIndex is greater than or equal to array.length, if so we will set checkIndex = 0;
        if (checkIndex === array.length) checkIndex = 0;
        // return the resutl value
        return result;
    };
};
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const cycleIterator1 = (array) => {
    let index = 0;
    return () => {
        const result = array[index++];
        if (index >= array.length) index = 0;
        return result;
    };
};
const threeDayWeekend1 = ["Fri", "Sat", "Sun"];
const getDay1 = cycleIterator1(threeDayWeekend1);
console.log(getDay1()); // should log: 'Fri'
console.log(getDay1()); // should log: 'Sat'
console.log(getDay1()); // should log: 'Sun'
console.log(getDay1()); // should log: 'Fri'

/* ========================== SOLUTION 3  ======================================
================================================================================ */
const cycleIterator3 = (array) => {
    let index = -1;
    return () => {
        return array[++index % array.length];
    };
};
const threeDayWeekend3 = ["Fri", "Sat", "Sun"];
const getDay3 = cycleIterator3(threeDayWeekend3);
console.log(getDay3()); // should log: 'Fri'
console.log(getDay3()); // should log: 'Sat'
console.log(getDay3()); // should log: 'Sun'
console.log(getDay3()); // should log: 'Fri'

/* ========================== SOLUTION 4  ======================================
================================================================================ */
const cycleIterator4 = (array) => {
    let index = 0;
    return () => {
        return array[index++ % array.length];
    };
};
const threeDayWeekend4 = ["Fri", "Sat", "Sun"];
const getDay4 = cycleIterator4(threeDayWeekend4);
console.log(getDay4()); // should log: 'Fri'
console.log(getDay4()); // should log: 'Sat'
console.log(getDay4()); // should log: 'Sun'
console.log(getDay4()); // should log: 'Fri'

/* ========================== SOLUTION 5  ======================================
================================================================================ */
const cycleIterator5 = (arr) => {
    let pedal = [...arr];
    return () => {
        if (pedal.length === 0 || pedal[0] === undefined) {
            pedal = [...arr];
        }
        while (pedal.length !== 0) {
            return pedal.shift();
        }
    };
};
const threeDayWeekend5 = ["Fri", "Sat", "Sun"];
const getDay5 = cycleIterator5(threeDayWeekend5);
console.log(getDay5()); // should log: 'Fri'
console.log(getDay5()); // should log: 'Sat'
console.log(getDay5()); // should log: 'Sun'
console.log(getDay5()); // should log: 'Fri'

/* ========================== SOLUTION 6  ======================================
================================================================================ */
const cycleIterator6 = (array) => {
    let index = 0;
    return () => {
        if (index >= array.length) index = 0;
        index++;
        return array[index - 1];
    };
};
const threeDayWeekend6 = ["Fri", "Sat", "Sun"];
const getDay6 = cycleIterator6(threeDayWeekend6);
console.log(getDay6()); // should log: 'Fri'
console.log(getDay6()); // should log: 'Sat'
console.log(getDay6()); // should log: 'Sun'
console.log(getDay6()); // should log: 'Fri'

/* ========================== SOLUTION 7  ======================================
================================================================================ */

const cycleIterator7 = (arr) => {
    let index = 0;
    return () => {
        // if (index === arr.length) index = 0;
        // return arr[index++];
        return arr[(index++) % arr.length];
    };
};
const threeDayWeekend7 = ["Fri", "Sat", "Sun"];
const getDay7 = cycleIterator7(threeDayWeekend7);
console.log(getDay7()); // Fri
console.log(getDay7()); // Sat
console.log(getDay7()); // Sun
console.log(getDay7()); // Fri
console.log(getDay7()); // Sat
console.log(getDay7()); // Sun
