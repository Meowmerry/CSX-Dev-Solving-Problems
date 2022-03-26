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
//============================ SOLUTION 1 ====================================
function drawStairs(n) {
    if (n < 1 || n > 100) throw new Error('Please input a valid number N, between 1 and 100!');
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

//============================ SOLUTION 2 ====================================
const drawStairs = (n) => {
    //declare a variable start assign to *
    let star = '*';
    // declare a variable space assign to empty string
    let space = ' ';
    // declare a variable numOfSpace assign to n - 1
    let numOfSpace = n - 1;
    // declare a variable numOfStar assign to 1
    let numOfStar = 1;
    let i = 0;
    // iterate throug n 
    while (i < n) {
        // print space of numOfSpace and numOfStar each time
        console.log(`${space.repeat(numOfSpace)}${star.repeat(numOfStar)}`);
        numOfSpace -= 1;
        numOfStar += 1;
        i += 1;
    }
    return '';
};
//============================ SOLUTION 3 ====================================
const drawStairs1 = (n) => {
    if (n < 0) console.log("");
    let stairs = "";
    for (let i = 1; i <= n; i++) {
        stairs += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }
    return stairs;
};
console.log(drawStairs1(5))
drawStairs1(10)
//drawStairs(-20)
// drawStairs(300)
//============================ SOLUTION 4 ====================================
const drawStairs2 = (n) => {
    let steps = new Array(n).fill('*');
    let len = steps.length;
    steps = steps.map((val, i) => {
        return new Array(len - i - 1).fill(' ').join('') + val + new Array(i).fill('*').join('');
    });
    return steps.join('\n');
};
console.log(drawStairs2(5))
//============================ SOLUTION 5 ====================================
const drawStairs5 = (n) => {
    let steps = new Array(n).fill(' ');
    while (!steps.indexOf(' ')) {
        steps.shift();
        steps.push("*")
        console.log(steps.join(""))
    }
    return ''
};
console.log(drawStairs5(5))

//============================ SOLUTION FROM CodeSmith ====================================
/*  Time Complexity!! 

*/
let s = 1;
const drawStairs6 = (n) => {
    while (s <= n) {
        console.log(' '.repeat(n - s).concat('*'.repeat(s)))
        s++;
    }
    return ''
};
console.log(drawStairs6(5))