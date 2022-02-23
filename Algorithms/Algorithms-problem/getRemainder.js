/*
Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

Input : Two Number
Output : remainder of  dividing the larger number by the smaller one

*/
const getRemainder = (num1, num2) => {
    if (num1 > num2) {
        return num1 % num2;
    }
    return num2 % num1;
}

console.log(getRemainder(1, 3)) // 0
console.log(getRemainder(3, 10)) //  1
console.log(getRemainder(12, 10)) //  2