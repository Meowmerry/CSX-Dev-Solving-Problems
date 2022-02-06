// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.
const randomNums = [1, 14, 7, 21, -6];
// console.log(randomNums); //=> [1, 14, 7, 21, -6]

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

//input: array of nums
//output: array (min, max)

//decalare a function minAndMax, 1 input, array
//create a min variable set it to first item in the array
//create a max variable set to first item in array
//iterate through input array starting from index 1
//check if current element is less than min 
//min to current element
//check if current element is greater than max
//max to current element

//return [min, max]

const minAndMax = arr => {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return [min, max];
};


// console.log(minAndMax(randomNums)); // [-6, 21]


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//input: str
//output: boolean

//declare a function isPalindrome that takes one input a string
//sanitize the string removing punctions and weird characters
//convert string to array
//use the reverse method on this array
//join that array back to a string
//will compare original string with reversed string (return the comparison)

const isPalindrome = str => {
    str = str.replace(/\W/g, '').toLowerCase();
    // console.log('str', str);
    const reverseStr = [...str].reverse().join('');
    // console.log('reverseStr', reverseStr);
    return str === reverseStr;
};

console.log(isPalindrome('LeVeL')); //=> true
console.log(isPalindrome('cheeSe')); //=> false
console.log(isPalindrome('RACECAR')); //=> true

/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

//closure (persistant memory)
//input: number
//output: function

//declare a function add, that takes in 1 argument a number (x)
//return a function will also take in 1 argument a number (y)
//return x + y;

const add = x => {
    return y => {
        return x + y;
    };
};

const addBy10 = add(10);
// console.log(addBy10(20)); // 30


/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.

const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];

const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/

//declare a function itemRetreiver, it will accept 2 arguments array, str
//create an index variable set it to 0
//return a function will accept no arguments
//check if index is greater than array.length
//reasign index = 0

//return the current item witht he value at the name proeprty in the array at the index and then use post incrementation operator 

//closure (persistent memory)
//input: array of objects, name(string)
//output: function

const itemRetriever = (favoriteAuthors, author) => {
    let index = 0;
    return () => {
        if (index >= favoriteAuthors.length) index = 0;
        return favoriteAuthors[index++][author];
    };
};

const favoriteAuthors = [
    { name: 'Earnest Hemingway' },
    { name: 'Agatha Christie' },
    { name: 'J.K. Rowling' },
    { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
console.log(nextAuthor()); // Earnest Hemingway
console.log(nextAuthor()); // Agatha Christie
console.log(nextAuthor()); // 'J.K. Rowling'
console.log(nextAuthor()); // 'Steven King'
console.log(nextAuthor()); // Earnest Hemingway



/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

//input: multi dimentional array
//output: array of arrays

//declare a function transpose that accepts 1 input a 2 d array
//create a results set as empty array []
//loop through input array (2) [[] []] array[0].length
//create a sub array set to another [] 
//inner loop [1, 2, 3,]

const transpose = array => {
    const results = [];
    for (let i = 0; i < array[0].length; i++) {
        const subArr = [];
        for (let j = 0; j < array.length; j++) {
            subArr.push(array[j][i]);
        }
        results.push(subArr);
    }
    return results;
};

const twoDimArray = [['fred', 'barney'], [30, 40], [true, false]]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]

