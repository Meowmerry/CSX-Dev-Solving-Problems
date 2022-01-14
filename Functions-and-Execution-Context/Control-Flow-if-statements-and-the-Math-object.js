/* Challenge: Control Flow - if statements and the Math object
Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

Note: Due to the output being based off of a random factor, the tests provided below cannot determine if you have solved the prompt exactly. The test cases for this challenge check for the correct data types only. */
function closestToTheMark(player1, player2) {
    debugger;
    const theMark = Math.floor(Math.random() * 100)
    console.log(`If theMark is ${theMark}...`);
    // check to compare both, using a Math.abs if player1 is greater then theMark 
    // and subtract with plyer2 is greater then theMark; if so, return `Player is closest;`
    // otherwise, return `Player2 is closest`
    if (Math.abs(player1 - theMark) > Math.abs(player2 - theMark)) {
        return `Player 2 is closest`;
    }
    return `Player 1 is closest`;
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));




