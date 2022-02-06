// PROBLEM 1 - INTERSECTION
  /* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce! */

// PROBLEM 2 - UNION
  /* Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce! */

// PROBLEM 3 - WORDSEARCH
  /*Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter 
    that we are going to search for). "wordSearchLetterCounter" should use the native method '.reduce' to count the total number of times a letter show up
    in the word search.
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

// PROBLEM 4 - 
/* Return an object where each property is the name of the an ice cream flavor and each value is an integer that is the total count of that flavor.
Store the returned data in a new iceCreamTotals variable. */
const data = [
    { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];
