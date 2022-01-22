/* Creat a function 'addEvenNumbers' that takes a nubmer as an argbuemnt. 
'addEvenNubers' should add up all the even nubers for 2 to the number you passed to the function .
For example, if the input is 8 then your function should return 20 beasue 2+4+6+8 =  20
 */
/* 
Input : number
Output : number

Create a function that takes number 
    declear a sum variable to store result of sum
        iterate thre num input use a for loop 
            check if num is even 
                reassign sum 
     return sum
*/
const addEvenNumbers = (nums) => {
    let sum = 0;
    for (let i = 1; i <= nums; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(addEvenNumbers(8)) // 20
console.log(addEvenNumbers(4)) // 6
console.log(addEvenNumbers(10)) // 30
