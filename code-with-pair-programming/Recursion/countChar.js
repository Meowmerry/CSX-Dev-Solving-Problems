
/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.

Input : String 
Output : Number

creat a function that take string , target , i = 0 , count = 0
		increment i by one
		base case :
    - if string at current letter is equal to target, increment count by 1
    - if not have any string left return count
    
    recuresive case : 
    - invoke countChar and passed in string, target, i , count
*/

const countChar = (str, target, i = 0 , count = 0) =>{
        if(str[i++] === target) count += 1;
        if(!str[i]) return count;
        return countChar(str, target , i , count);
}
console.log(countChar('', 'o')); //-> 0
console.log(countChar('hello world', 'o')); //-> 2
console.log(countChar('javascript', 'j')); //-> 1
console.log(countChar('code smith code smith', 's')); //-> 2
