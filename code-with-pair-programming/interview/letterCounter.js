// Create a function that counts the number of times a particular letter shows up in the word search.
function letterCounter(array, letter) {
    // search number of times a letter appears in the array
    // join all sub arrays
    //   let newArray = array.join('');
    //   let count = 0;
    //   for (let i = 0; i < newArray.length; i++) {
    //     if (newArray[i] === letter) {
    //     count++;
    //     }
    //   }
    // // return count number of times the 'letter' appears
    //   return count;
      return array.reduce((acc, curr) => {
        const result = acc + curr.filter(char => {
          return char === letter;
        }).length;
      return result
      }, 0);
    }
    
    // Examples
    
    let test1 = letterCounter([
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"]
    ], "D") //➞ 3
    
    // "D" shows up 3 times: twice in the first row, once in the third row.
    
    let test2 = letterCounter([
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"]
    ], "H") //➞ 2
    
    console.log(test1)
    console.log(test2)
    
    // Notes
    
    // You will always be given an array with five sub-arrays.