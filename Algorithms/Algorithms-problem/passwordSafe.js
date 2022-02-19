/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe".
"passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string "You have entered the wrong password". If the passwords do match, return the safe.
 
Example:
const mySafe = passwordSafe('myPassword', 'My Super Secret');
mySafe('wrongPassword') -> "You have entered the wrong password"
mySafe('myPassword') -> "My Super Secret"

Input : Two string
Output : Closure will return inner function
         the inner fucntion take String as input  and output String

create a func takes two string as arguments
    create the inner func take string 
        check if the password doesn't match return "You have entered the wrong password"
        otherwise, return  "My Super Secret"
*/
const passwordSafe = (password, secret) => {
    return (agrs) => {
        if (password !== agrs) return "You have entered the wrong password";
        return secret;
    }
}

const mySafe = passwordSafe('myPassword', 'My Super Secret');
console.log(mySafe('wrongPassword'))// -> "You have entered the wrong password"
console.log(mySafe('myPassword'))// -> "My Super Secret"
