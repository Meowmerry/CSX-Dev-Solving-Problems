/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge 16
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function average() { 
    let output = [];
    return (args) => {
      let count = 0;
      if(!args) {
        //if array doesnt have length return 0
        if (!output.length) return 0
           //otherwise return average
        
        for (let i=0;i<output.length;i++){
         count += output[i] 
        }
        count += output[index++] 
              return count/output.length
          } else {
      
        output.push(args)
         for (let i=0;i<output.length;i++){
             count += output[i]
         }
        return count/output.length;
      }
  
      }
  } 
  // /*** Uncomment these to check your work! ***/ 
  const avgSoFar = average(); 
  //4+8=12/2=8
  // console.log(avgSoFar()); // => should log 0 
  // console.log(avgSoFar(4)); // => should log 4 
  // console.log(avgSoFar(8)); // => should log 6 
  // console.log(avgSoFar()); // => should log 6 
  // console.log(avgSoFar(12)); // => should log 8
  //12+8+4/arr.length/3
  //average== total/count
  
  // console.log(avgSoFar()); // => should log 8