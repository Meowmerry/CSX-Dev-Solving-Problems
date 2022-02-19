/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally passed to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30

OUTER FUNC
Input : Number
Output : return func with number

INNER FUNC 


crete a func take number
        return func will take number
   
*/
const add = (nums) => {
    return (input) => {
        return nums + input;
    }
}
const addBy10 = add(10)
// console.log(addBy10(20))// -> 30
// console.log(addBy10(30))// -> 40



// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

// Input : String
// Output : Number
const getLength = (string, i = 0) => {
    //console.log(i)

    // base case : if string at index is undefined
    if (string[i] === undefined) return i;

    // recursive case; invoke getLength with passed string, count increment by 1
    return getLength(string, i += 1)


}

// console.log(getLength('')) // 0
// console.log(getLength('a')) // 1
// console.log(getLength('hello')) // 5


/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.

const favoriteAuthors = [
{ name: 'Earnest Hemingway', age: 50 },
{ name: 'Agatha Christie', age: 57 },
{ name: 'J.K. Rowling', age: 26 },
{ name: 'Steven King', age: 85 },
];



/*
Input : Array of Obj
Output : closure return func	==> rerurn String || Number

create a func take Array of Obje

        declare a variable index as to 0 
      
  create a function with no argument
          
      check string === 'name ' return name Value of Object
      check string ===  'age'  return age Value of Object
      
*/


const favoriteAuthors = [
    { name: 'Earnest Hemingway', age: 50, genre: 'Classics' },
    { name: 'Agatha Christie', age: 57, genre: 'Romance' },
    { name: 'J.K. Rowling', age: 26, genre: 'Fantasy' },
    { name: 'Steven King', age: 85, genre: 'Horrors' },
];


const itemRetriever = (arrObj, string) => {
    let index = 0;
    return () => arrObj[index++][string]
}
//Example 1
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
console.log(nextAuthor()) //-> 'Earnest Hemingway'
console.log(nextAuthor()) //-> 'Agatha Christie'


// //Example 2
// const nextAuthorsAge = itemRetriever(favoriteAuthors, 'age');
// console.log(nextAuthorsAge()) //-> 50
// console.log(nextAuthorsAge())//-> 57

const nextAuthorsGenre = itemRetriever(favoriteAuthors, 'genre');
// nextAuthorsGenre() ////-> // Classics
// nextAuthorsGenre() //-> // Romance



/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:

Input : ARray of sub Array
Output : New Array with two sub Array

crete a func take array
 declare a result assign to empty

   iterate thru array star at first index
        declare a subarray assign to empty array
        iterate thre array 
            fillthe subAarry ousing push
          
     reasign result by pushing subarray     
     

return result

*/
const transpose = (array) => {
    const result = [];
    for (let i = 0; i < array[0].length; i += 1) {
        const subArr = [];
        for (let j = 0; j < array.length; j += 1) {
            subArr.push(array[j][i]);
        }
        result.push(subArr);
    }
    return result;
}

const twoDimArray = [['fred', 'barney'], [30, 40], [true, false]]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]




























