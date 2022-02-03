/* POD Day 1 - Regular - Reverse String
Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.

For example:

reverseString("I love testing") // should return "gnitset evol I" */
/* ======================== Solution 1 ===============*/
function reverseString(str){
    // instantiate a new str
    let newStr = '';
    // loop backwards over str input
    for(let i = str.length -1 ; i >= 0 ; i--){
        // add the current char to new str 
        let currentChar = str[i];
        newStr += currentChar
    }   
    // return new str
    return newStr;
}

console.log(reverseString('I love testing')) // gnitset evol I

/* ======================== Solution 2 ===============*/
function reverseString2(str){
    const arr = [...str];
    let reverse= "";
    while(arr.length){
      // joining the reversed string
       reverse = reverse + arr.pop();
    } 
    return reverse;
  }
  
  console.log(reverseString2('hi')); // ih
  console.log(reverseString2('I love testing')) // gnitset evol I
  /* ======================== Solution 3 ===============*/

  
/* 
Input : String;
Output : String reverse
Create a function that accepts a string 
  reassign a string using spread and reverse and join methed
*/
/*================== SOLUTION 1 ============================= */
const reverseString = (str)=>{
    return [...str].reverse().join('')
   }
   console.log(reverseString("I love testing")) // should return "gnitset evol I")
   
   /*
   Create a function that accepts a string 
     declare a variable newStr assign to empty string
     use a for loop start for last string to reverse 
       reassign a newAtr 
     return a newStr
   ================== SOLUTION 2 use a for loop  ============================= */
   const reverseString2 = (str)=>{
    let newStr = '';
    for (let i = str.length - 1 ; i >= 0 ; i --){
         newStr += str[i]
    }
     return newStr;
   }
   console.log(reverseString2("I love testing")) // should return "gnitset evol I")
   
   /*
   Create a function that accepts a string 
     declare an arr assign to reassing string Input
     declare a reverse assign to empty string
     use a while loop iterate thru arr
       reassign reverse by joining the reverse and using pop method
     return reverse
   ================== SOLUTION 3 use a  while loop  ============================= */
   const reverseString3 = (str)=>{
     const arr = [...str];
     let reverse = '';
     while(arr.length){
       reverse = reverse + arr.pop()
     }
     return reverse;
   }
   console.log(reverseString3("I love testing")) // should return "gnitset evol I")3