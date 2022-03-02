
// Write a function called minutesToSeconds that takes an input(integer) of minutes and returns the minutes converted to seconds(integer).

// If the integer passed to the function is less than 0, return the number 0

function minutesToSeconds(integer, minutes = 0, result = 60) {
    if (integer < 0) return minutes;
    else return integer * result;
}

const minutesToSeconds = (integer, minutes = 60) => integer < 0 ? 0 : integer * minutes;

// console.log(minutesToSeconds(-5)) // 0
// console.log(minutesToSeconds(1)) // 60
// console.log(minutesToSeconds(23)) // 1380
// console.log(minutesToSeconds(525600)) // 31536000s
