/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* 
Challenge: limitedInterval
Write a function called limitedInterval that accepts as arguments in this order -
callback function
wait time in milliseconds
limit time in milliseconds.
limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
// Add code here
function limitedInterval(callback, wait, limit) {
    const waitInterval = wait;

    while (wait < limit) {
        setTimeout(callback, waitInterval);
        wait += waitInterval;
        // console.log(wait)
    }
}
/* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
/* ========================== SOLUTION 2  ======================================
================================================================================ */
function limitedInterval(callback, wait, limit) {
    setTimeout(clearInterval, limit, setInterval(callback, wait))
}
/* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function limitedInterval(callback, wait, limit) {
    const startInterval = setInterval(callback, wait);
    setTimeout(clearInterval, limit, startInterval);
}
/* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.