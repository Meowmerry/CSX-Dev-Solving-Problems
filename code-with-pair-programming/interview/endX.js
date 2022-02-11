/*
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.

Input : String 
Output : String with end x

create a func endX that take string input
	base case : string is empty return result 
  recursive case : 
*/
/* ================= SOLUTION 1 =====================*/
const endX = (string) => {
  let withoutX = '';
  let cacheX = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "x") {
       cacheX += string[i];
    } else if (string[i] !== "x") {
      withoutX += string[i];
    }
  }
  const result = withoutX+cacheX;
  return result
};
console.log(endX("")); //→ ""
console.log(endX("abc")); //→ "abc"
console.log(endX("Myexesloveme")); //→ "Myeeslovemex"
console.log(endX("xxre")); //→ "rexx"
console.log(endX("xxhixx")) //→ "hixxxx"
console.log(endX("xhixhix")) //→ "hihixxx"
/* ================= SOLUTION 2  =====================*/
const endXRecursive = (str , allX = "" , result = '', i = 0  ) =>{
  if(str.length === i ) return result + allX;
  if(str[i] === 'x') allX += str[i];
  else result += str[i];
  return  endXRecursive(str, allX, result, i + 1)
}

// console.log(endXRecursive("")); //→ ""
// console.log(endXRecursive("abc")); //→ "abc"
console.log(endXRecursive("Myexesloveme")); //→ "Myeeslovemex"
console.log(endXRecursive("xxre")); //→ "rexx"
// console.log(endXRecursive("xxhixx")) //→ "hixxxx"
// console.log(endXRecursive("xhixhix")) //→ "hihixxx"