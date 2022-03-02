/* 
Write a function called fizzBuzz which accepts a number num and returns a value based on the following rules:

If the number is divisible by 3, return the string "Fizz".
If the number is divisible by 5, return the string "Buzz".
If the number is divisible by both 3 and 5, return the string "FizzBuzz".
Otherwise, return the number input to the function.
Examples:

fizzBuzz(6); // "Fizz"
fizzBuzz(10); // "Buzz"
fizzBuzz(15); // "FizzBuzz"
fizzBuzz(16); // 16

*/
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
}

console.log(fizzBuzz(6)); // "Fizz"
console.log(fizzBuzz(10)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(16)); // 16