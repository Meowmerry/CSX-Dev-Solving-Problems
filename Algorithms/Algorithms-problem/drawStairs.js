/*
POD Day 1 - Advanced - Draw Stairs
Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces.

For example:

drawStairs(5) ->
    *
   **
  ***
 ****
*****
 */

// input : number (n)
// output : no returen output, console log spaced and *'s

function drawStairs(n){
    if(n < 1 || n > 100) throw new Error('Please input a valid number N, between 1 and 100!');
    let star = '*';
    let space = ' ';
    let numSpace = n - 1;
    let numStars = 1;

    // iterate thru n use a for loop, upwards to n from 0
    for (let i = 0; i < n; i += 1) {
        // print space numspaces times
        // print star numstars times
        // console.log(star.repeat(numSpaces))
       console.log(`${space.repeat(numSpace)}${star.repeat(numStars)}`);
       // decrement numspaces
       numSpace -= 1;
       // increment numstars
       numStars += 1;      
    }
}
drawStairs(5)
drawStairs(10)
//drawStairs(-20)
// drawStairs(300)