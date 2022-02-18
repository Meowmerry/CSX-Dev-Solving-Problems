/*
Create a function 'addEvenNumbers' that takes a number as an argument. 'addEvenNumbers' should add up all the even numbers from 2 to the number you passed to the function.
For example, if the input is 8 then your function should return 20 because 2 + 4 + 6 + 8 = 20.

Input : Number
Output : Number

crete a func addEvenNumbers that take number 
     declare a variable sum asgign 0
          iterate thru num 
        if current num use % change to even num
            reassign sum to current
  return sum
*/
const addEvenNumbers = (nums) => {
    let sum = 0;

    for (let i = 0; i <= nums; i += 1) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};
// console.log(addEvenNumbers(8)) // 20
// console.log(addEvenNumbers(4)) // 6

/*
Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".


Input : String
Output : String that repeat and if not exsit return -1

creat a func take string 
     iterate through string use a for loop
        if string the next letter includes current letter 
            return string
        return -1;

*/

const firstRepeat = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i + 1).includes(string[i])) {
            return string[i]
        }
    }
    return -1;
};

console.log(firstRepeat("legolas")); //➞ //"l"
console.log(firstRepeat("Gandalf")); //➞ "a"
console.log(firstRepeat("Balrog")); //➞ "-1"

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")

Input : String 
Output : Boolean

creat a function isPalindrome take a string
       resassing string with use RegEx and remove all space, chang to all lowercase 
   base case : if string is emtpy and string is 1 return true
   base case : if string at first letter and last letter is not equal will reutrn false
   
   recursive case : invoke func passing string with slice by 1 and -1
 
*/

const isPalindrome = (string) => {
    string = string.replace(/\W/g, "").toLowerCase();
    if (string === "" || string.length === 1) return true;
    return (
        string[0] === string[string.length - 1] && isPalindrome(string.slice(1, -1))
    );
};

console.log(isPalindrome("a")) // true
console.log(isPalindrome("LEVEL")) // true
console.log(isPalindrome("RACECAR")) // true
console.log(isPalindrome("helloslslsllsls")) // false
console.log(isPalindrome("%ksifij12jj2j2")) // false

/* Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative. 

Input : String, sub string , nubmer
Output : Boolean

create function strCopies take three aguments      
       base case : 
     - string is empty return false
     - if string starsWith substirng increment coutn by 1;
     - count is equal to value return true
     
     recursive case : invoke strCopies passed in stirng use slice 
*/
const strCopies = (string, subStr, value, count = 0) => {
    if (string === "") return false;

    if (string.startsWith(subStr)) count += 1;

    if (count === value) return true;

    return strCopies(string.slice(1), subStr, value, count);
};

// console.log(strCopies("catcowcat", "cat", 2) )//=> true
// console.log(strCopies("catcowcat", "cow", 2)) //=> false
// console.log(strCopies("catcowcat", "cow", 1)) //=> true

/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.
console.log(nextAuthor()) //-> 'Earnest Hemingway'
console.log(nextAuthor()) //-> 'Agatha Christie'
console.log(nextAuthor()) //-> 'J.K. Rowling'
console.log(nextAuthor()) //-> 'Steven King'
*/

/*
Input : Arr of Obj
Output : return function 
Innner func ==> return String
create func itemRetriever take arr of obje   
     declare a varible index assign to 0   
        creat a inner func take no argument               
        return arr with increment index                
*/

const itemRetriever = (arrObj, key) => {
    let index = 0;
    return () => {
        if (index === arrObj.length) index = 0;
        return arrObj[index++][key];
    };
};

const favoriteAuthors = [
    { name: "Earnest Hemingway" },
    { name: "Agatha Christie" },
    { name: "J.K. Rowling" },
    { name: "Steven King" },
];

const nextAuthor = itemRetriever(favoriteAuthors, "name");
console.log(nextAuthor()) //-> 'Earnest Hemingway'
console.log(nextAuthor()) //-> 'Agatha Christie'
console.log(nextAuthor()) //-> 'J.K. Rowling'
console.log(nextAuthor()) //-> 'Steven King'
console.log(nextAuthor()) //-> 'Earnest Hemingway'


/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
    If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
    Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
console.log(usePotions("3A78B51"))// ➞ "47751")
console.log(usePotions("9999B")) // ➞ "9998"
console.log(usePotions("9A12A3")) // ➞ "10123"
console.log(usePotions("567")) // ➞ "567"
*/
const addOne = (num) => num + 1;
const subtractOne = (num) => num - 1;

const usePotions = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === 'A') result += addOne(+str[i - 1]);
        else if (str[i] === 'B') result += subtractOne(+str[i - 1]);
        else if (str[i + 1] !== 'A' && str[i + 1] !== 'B') result += str[i]
    }
    return result;
}

console.log(usePotions("3A78B51"))// ➞ "47751")
console.log(usePotions("9999B")) // ➞ "9998"
console.log(usePotions("9A12A3")) // ➞ "10133"
console.log(usePotions("567")) // ➞ "567"
/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following
behavior:
If the function is invoked with an argument, the callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/
const checkerLogger = (cb) => {
    const cache = { true: 0, false: 0 }
    return (agrs) => {
        if (!agrs) return cache;
        else cache[cb(agrs)] += 1;
        return cb(agrs);
    }
}
const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); //-> { true: 0, false: 0 }
// console.log(oddCounter(3)); //-> true
// console.log(oddCounter(2)); //-> false
// console.log(oddCounter()); //-> { true: 1, false: 1 }
// console.log(oddCounter(2)); //-> false
// console.log(oddCounter()); //-> { true: 1, false: 1 }

/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/
const anagrams = (str) => {
    const output = [];
    for (let i = 0; i < str.length; i += 1) {
        output.push(str[i])
    }
    return output
}
console.log(anagrams('aabc'));
// -> ['aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa']



/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/


/*
Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic. Make your solution work for all types of brackets: () [] {}

Examples:
balancedBrackets(" { }    n");                           // -> true
balancedBrackets("hi][  ");                              // -> false
balancedBrackets("[{random words and such}]");           // -> true
balancedBrackets("[The]Rains(In){Spain}");               // -> true
balancedBrackets("[({}Call me Ishmael)]");               // -> true
balancedBrackets("[(]{)}");                              // -> false
balancedBrackets(" gibberish { howdy: partner() }");     // -> true
balancedBrackets(" isThisAFunction?() { notReally();");  // -> false
*/

/*
There's no such thing as private properties on a JavaScript object! But, 
maybe there are? Implement a function createSecretHolder(secret) 
which accepts any value as secret and returns an object with ONLY two methods. 
getSecret() which returns the secret setSecret() which sets the secret



/*
Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]*/
