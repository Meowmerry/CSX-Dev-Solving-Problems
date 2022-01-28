// Write a function called divisibleByTwo which accepts an array of numbers.

// The function should return a count of how many numbers are cleanly divided by 2.

// Examples

// divisibleByTwo([3, 6, 9]) // 1
// divisibleByTwo([1, 12, 14]) // 2
// divisibleByTwo([]) // 0
// [execution time limit] 4 seconds (js)

function divisibleByTwo(arr) {
    let result = 0;
    arr.forEach(ele => ele % 2 === 0 ? result += 1 : result)
    return result;
}
// console.log(divisibleByTwo([3, 6, 9])) // 1
// console.log(divisibleByTwo([1, 12, 14])) // 2
// console.log(divisibleByTwo([])) // 0


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


// Write a function called checkForLetter that takes in two arguments, a string and a letter. If the string contains the letter, return true, otherwise, return false. The string and the letter will only contain lowercase characters and neither will be empty strings.

// example:
// checkForLetter('potato', 'o') // true
// checkForLetter('taco', 'z') // false
// checkForLetter('brontosaurus', 'b') // true


function checkForLetter(string, letter) {
    if (string.includes(letter)) return true;
    else return false;
}
// console.log(checkForLetter('potato', 'o')) // true
// console.log(checkForLetter('taco', 'z')) // false
// console.log(checkForLetter('brontosaurus', 'b')) // true



class Container {
    constructor() {
    }

    /**
     * Adds the specified value to the container
     */
    add(value) {
        // TODO: implement this method

    }

    /**
     * Attempts to delete one item of the specified value from the container
     *
     * @return {boolean} true, if the value has been deleted, or
     *                   false, otherwise.
     */
    delete(value) {
        // TODO: implement this method
        return false;
    }

    /**
     * Finds the container's median integer value, which is
     * the middle integer when the all integers are sorted in order.
     * If the sorted array has an even length,
     * the leftmost integer between the two middle
     * integers should be considered as the median.
     *
     * @return {number} the median if the array is not empty, or
     * @throws {Error} a runtime exception, otherwise.
     */
    getMedian() {
        // TODO: implement this method
        return 0;
    }
}


// Write a function called letterCounts which accepts a string and a letter.

// The function should return the number of times that the letter appears in the string.

// Both the string and the letter will always be lower cased.

// Examples

letterCount("hello", "h") // 1
letterCount("hello", "z") // 0
letterCount("goodbye", "o") // 2