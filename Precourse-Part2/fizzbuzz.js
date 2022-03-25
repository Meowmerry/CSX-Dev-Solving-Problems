/*Challenge: fizzbuzz
Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

Log fb to the console to see the output.

Hint: Check out the remainder/modulo operator: %. */

/* ========================== SOLUTION 1  ======================================
================================================================================ */
const fb = [];

for (let i = 1; i <= 16; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fb.push('fizzbuzz')
    }
    else if (i % 3 === 0) {
        fb.push('fizz')
    } else if (i % 5 === 0) {
        fb.push('buzz')
    } else {
        fb.push(i)
    }
}
console.log(fb)


// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16] 

/* ========================== SOLUTION 2  ======================================
================================================================================ */
let i = 1;
let num = 17;
while (i < num) {
    if (i % 3 === 0 && i % 5 === 0) {
        fb.push('fizzbuzz');
    } else if (i % 3 === 0) {
        fb.push('fizz');
    } else if (i % 5 === 0) {
        fb.push('buzz');
    } else {
        fb.push(i)
    }
    i++;
}

/* ========================== SOLUTION 3  ======================================
================================================================================ */
/*
Fizzbuzz : 
use a lop to iterate through numbers 1 - 21 and push the numbers into the array using the 'Fizzbuzz'
 */

const fizzbuzzList = [];

for (let i = 1; i <= 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzzList.push('fizzbuzz')
    }
    else if (i % 3 === 0) {
        fizzbuzzList.push('fizz')
    } else if (i % 5 === 0) {
        fizzbuzzList.push('buzz')
    } else {
        fizzbuzzList.push(i)
    }
}
console.log(fizzbuzzList)

/* ========================== SOLUTION 4 ======================================
================================================================================ */
const fizzbuzz4 = num => {
    const result = [];
    for (let i = 0; i <= num; i += 1) {
        let str = '';
        if (i % 3 === 0) str += 'fizz';
        if (i % 5 === 0) str += 'buzz';
        result.push(str || i)
    }
    return result;
}
console.log(fizzbuzz4(16))
/*
[
'fizzbuzz', 1,      2,
'fizz',     4,      'buzz',
'fizz',     7,      8,
'fizz',     'buzz', 11,
'fizz',     13,     14,
'fizzbuzz', 16
]
*/

