/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge: runInOrder
Write a function called runInOrder that accepts as arguments in this order -

an array of functions
an array of numbers representing times in milliseconds
runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. For example -

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
/* should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') */
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// Add code here
// declare a function call runInOrder takes tow arguments : functionsArray and waitTimesArray
const runInOrder = (functionsArray, waitTimesArray) => {
    // declare a variable to keep track of wait times as we loop
    let time = 0;
    // iterates throught input array(s)
    for (let i = 0; i < functionsArray.length; i += 1) {
        // update out time variable
        time += waitTimesArray[i]
        // invoke out setTimeout function 
        setTimeout(functionsArray[i], time)
    }

}
/* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
    console.log('hi');
}
function sayBye() {
    console.log('bye');
}
function sayHowdy() {
    console.log('howdy');
}
runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/