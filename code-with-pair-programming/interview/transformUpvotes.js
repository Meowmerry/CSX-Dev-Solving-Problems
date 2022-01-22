// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
    /* Input: string of upvotes
      Output: an array of vote numbers
  
      Plan: Split it into an array
  
      Initialize votesarray to empty array
  
      Iterate i through that array
        if last char of elem is a k, then push 1000* parseFloat(elem without the last char)
        Else
          push parseInt(elem)
      
      Return votesarray
  
    */

    return str.split(' ').map((num) => {
        if (num.endsWith('k')) return parseFloat(num) * 1000;
        return Number(num)
    })

    // const strArray = str.split(" ");
    // const votesArray = [];

    // for (let elem of strArray) {
    //     if (elem[elem.length - 1] === "k") {
    //         votesArray.push(1000 * parseFloat(elem.slice(0, elem.length - 1)));
    //     } else {
    //         votesArray.push(parseFloat(elem));
    //     }
    // }

    // return votesArray;
}

// Examples
console.log(transformUpvotes("6.8k 13.5k")) //➞ [6800, 13500]

console.log(transformUpvotes("5.5k 8.9k 32")) //➞ [5500, 8900, 32]

console.log(transformUpvotes("20.3k 3.8k 7.7k 992")) //➞ [20300, 3800, 7700, 992]
  // Notes
  // Return the upvotes as an array.