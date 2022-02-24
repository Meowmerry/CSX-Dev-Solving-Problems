
/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case. Inputting 'a' should return "A", and inputting "A" should return 'a'

Examples:

Input : String 
Output : Sting

create a func that take string 
        if the letter is upperCase return to lowercase
    othewise return Uppercse

*/
const changeCase = (letter) => {
    if (letter === letter.toLowerCase()) return letter.toUpperCase();
    else return letter.toLowerCase()

}
// console.log(changeCase('a')) // A
// console.log(changeCase('A')) // a
// console.log(changeCase('b')) // B
// console.log(changeCase('B')) // b

/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
 
 
Input : String and callback
Output : NewString 
 
create a func take string and callback
    declare a variabel output = '';
  iterate thru string use a for loop
     reassign output by invoking callback and passed in current element
  
  return output
 
*/
const effectString = (str, callback) => {

    let output = '';

    for (let i = 0; i < str.length; i += 1) {

        output += callback(str[i])

    }

    return output;
}

// console.log(effectString('hello', changeCase)) // HELLO
// console.log(effectString('Hello World',changeCase)) // hELLO wORLD
// console.log(effectString('CodeSmith',changeCase)) // cODEsMITH


/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.
 
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
 
Input : Array and number
Output : Number
create a func take Array and Nubmer
    init value = 0;
    iterate thru array 
      check if current element === targetNumber
          reassign initvalue by 1
      
    return initValue
*/

// const countTimes = (arr, target) => {
//     return arr.reduce((acc, curr) => {
//         if (curr === target) {
//             acc += 1;
//         }
//         return acc;
//     }, 0)
// }

const countTimes = (arr, target, i = 0, count = 0) => {
    if (arr[i] === undefined) return count;
    if (arr[i] === target) count += 1;
    return countTimes(arr, target, i + 1, count)

}
// console.log(countTimes([1, 8, 9, 9, 10], 9)) // -> 2
// console.log(countTimes([1, 8, 8, 8, 10], 8)) // -> 3
// console.log(countTimes([1, 8, 9, 9, 10], 10)) // -> 1

/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
 
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
 
Input : String , String targer
Output : Number
 
create a func take string and target String
        declare defalut value, i assign to 0 , count assign to 0
        base case 
     -  if str input is undefined or return count
     - if str with i increment by 1 , current strin === target increment count by 1
  
    recuresive case: invoke countChar func and passed str, target, i ,count
 
*/

const countChar = (str, target, i = 0, count = 0) => {

    if (str[i] === undefined) return count;
    if (str[i] === target) count += 1;

    return countChar(str, target, i + 1, count)
}
// console.log(countChar('', 'j')); //-> 0
// console.log(countChar('hello world', 'o')); //-> 2
// console.log(countChar('javascript', 'j')); //-> 1


/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe". "passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.
console.log(mySafe('wrongPassword') )//-> "You have entered the wrong password"
console.log(mySafe('myPassword')) //-> "My Super Secret"
 
Input  : Two String will passwordOutter and safe
Ouput : closure 
            return function inner 
      inner function will take string as a password
          check if passwordInner is not equal to passwordOutter
        return "You have entered the wrong password"
        otherwise safe
        
*/

const passwordSafe = (passwordOutter, safe) => {

    return (passwordInner) => {

        if (passwordInner !== passwordOutter) return "You have entered the wrong password";

        return safe;

    }

}


const mySafe = passwordSafe('myPassword', 'My Super Secret');
// console.log(mySafe('wrongPassword') )//-> "You have entered the wrong password"
// console.log(mySafe('myPassword')) //-> "My Super Secret"


/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
 
Input : Array of three subArray
Output : Array of two subArray
 
create a func take array as arguement
 
        declare a output variable assign to empty array
    
    iterate thru array outter array
              declare a subArr assign to empty array
            iterate thre secount array 
            fill the subArray with cururent elelement
            
        fill subArr to output
         
 
   return output
*/
const transpose = (array) => {

    const output = [];

    for (let i = 0; i < array[0].length; i += 1) {

        const subArr = [];

        for (let j = 0; j < array.length; j += 1) {

            subArr.push(array[j][i])
        }
        output.push(subArr);

    }

    return output;
}

const twoDimArray = [['fred', 'barney'], [30, 40], [true, false]]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]


/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter how deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                                           // -> false
console.log(copyOfTools[0] === tools[0]);                                                     // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                                       // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);                     // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);           // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/

const deepCopy = (arr) => {

    let output = {};
    for (let i = 0; i < arr.length; i += 1) {

        for (let key in arr[i]) {
            for (let key1 in arr[i][key]) {
                console.log(key1)
            }
        }
    }


}

const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools)
console.log(copyOfTools === tools);                                                           // -> false
// console.log(copyOfTools[0].editor === tools[0].editor);                                       // -> false
//console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);                     // -> false
// console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);           // -> false
// console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true

/*
QUESTION 2:
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

const wordSearchLetterCounter = (array, letter) => {
    return array.reduce((acc, curr) => {
        acc += countTimes(curr, letter);
        return acc;
    }, 0)
}
// console.log(wordSearchLetterCounter([
//     ["D", "E", "Y", "H", "A", "D"],
//     ["C", "B", "Z", "Y", "J", "K"],
//     ["D", "B", "C", "A", "M", "N"],
//     ["F", "G", "G", "R", "S", "R"],
//     ["V", "X", "H", "A", "S", "S"]
// ], "D")) // ➞ 3 "D" shows up 3 times: twice in first row, once in third row.















