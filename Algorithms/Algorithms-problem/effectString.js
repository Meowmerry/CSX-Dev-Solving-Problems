/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.

In : string, callback
Out : New string
	
create a function take string and callback
   declear the result assign to empty sttring
   iterate thru stting each element 
                   invoke callback and passed each element to the function 
            add each letter to the result
        reutrn result
	
*/
const effectString = (str, cb) => {

    return [...str].reduce((result, curr) => {

        result += cb(curr);

        return result;
    }, '')


}

// console.log(effectString('hello WORLD', changeCase)) //-> 'HELLO world'
// console.log(effectString('B',changeCase)) //-> 'b'
// console.log(effectString('codeSmith' , changeCase)) //-> 'CODEsMITH'
