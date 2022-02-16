/*
Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".


Input : String
Output : String that repeat and if not exsit return -1

creat a func take string 
        declare a variable count = '';
    iterate thru string use a for loop
        if current ele if we find same reasign count by 
      
     if not find return - 1  

*/
const firstRepeat = (string) => {
    for (let i = 0; i < string.length; i += 1) {
        if (string.slice(i + 1).includes(string[i])) {
            return string[i];
        }
    }
    return -1;

    // l "egolas" --> includes l in "egolas"
    // e "golas" --> includes e in "golas"
};

console.log(firstRepeat("legolas")); //➞ //"l"

console.log(firstRepeat("Gandalf")); //➞ "a"

console.log(firstRepeat("Balrog")); //➞ "-1"
