/* 
1. Write a function that returns the length of a string. Make your function recursive.

length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0   

2. Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

search([1, 2, 3, 4], 3) ➞ 2

search([2, 4, 6, 8, 10], 8) ➞ 3

search([1, 3, 5, 7, 9], 11) ➞ -1

3. Given a number, return the total sum of that number multiplied by every number between 1 and 10.

multiSum(1) ➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

multiSum(6) ➞ 330
// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

multiSum(10) ➞ 550

multiSum(8) ➞ 440

multiSum(2) ➞ 110

4. Write a function that reverses a string. Make your function recursive.

reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""


5. Write a function that finds the sum of the first n  natural numbers. Make your function recursive. 

sum(5) ➞ 15
// 1 + 2 + 3 + 4 + 5 = 15

sum(1) ➞ 1

sum(12) ➞ 78

6. Write a function that finds the sum of an array. Make your function recursive.

sum([1, 2, 3, 4]) ➞ 10

sum([1, 2]) ➞ 3

sum([1]) ➞ 1

sum([]) ➞ 0

7. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300

8. Create a recursive function that takes two parameters and repeats the string n  number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
String.prototype.repeat() is not allowed

repetition("ab", 3) ➞ "ababab"

repetition("kiwi", 1) ➞ "kiwi"

repetition("cherry", 2) ➞ "cherrycherry"





9. Write a function that calculates the factorial of a number recursively.

factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1

10. Create a function that finds the highest integer in the array using recursion.

findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99

findHighest([0, 12, 4, 87]) ➞ 87

findHighest([6,7,8]) ➞ 8

11. Create a function that takes a number num and returns its double factorial.

doubleFactorial(0) ➞ 1

doubleFactorial(2) ➞ 2

doubleFactorial(9) ➞ 945
// 9*7*5*3*1 = 945

doubleFactorial(14) ➞ 645120

12. Create a function that takes an array and returns the sum of all items in the array.

sumArray([1, 2, 3]) ➞ 6
// 1 + 2 + 3 = 6

sumArray([1, [2, [1]], 3]) ➞ 7
// 1 + 2 + 1 + 3 = 7









13. Write a recursive function isPrime that determines if a number is prime and returns true if it is.

isPrime(1) ➞ false

isPrime(2) ➞ true

isPrime(3) ➞ true
isPrime(4) ➞ false

14. Write a function that returns the greatest common divisor (GCD) of two integers.

gcd(32, 8) ➞ 8

gcd(8, 12) ➞ 4

gcd(17, 13) ➞ 1

15. Write a function that recursively determines if a string is a palindrome.

isPalindrome("abcba") ➞ true

isPalindrome("b") ➞ true

isPalindrome("") ➞ true

isPalindrome("ad") ➞ false

16. Write a function that recursively returns the number of vowels in a string.

countVowels("apple") ➞ 2

countVowels("cheesecake") ➞ 5

countVowels("bbb") ➞ 0

countVowels("") ➞ 0







17. Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1

largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10

largestEven([1, 3, 5, 7]) ➞ -1

largestEven([0, 19, 18973623]) ➞ 0

18. Create a function that takes a multidimensional array and return the total count of numbers in that array.

countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// 17.2 and 5.

countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// 2, 14, 2, 3 and 4.

countNumber([["balkot"]]) ➞ 0

19. Create a function that takes multidimensional array, converts into one dimensional array and returns it using recursion.

flatten([[17.2, 5, "code"]]) ➞ [17.2, 5, "code"]

flatten([[[[[2, 14, "rubber"]]], 2, 3, 4]])) ➞ [2, 14, "rubber", 2, 3, 4]

flatten([["balkot"]]) ➞ ["balkot"]

20. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
[1, [2, 3]]
      // 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
Write a function that returns the total number of non-nested items in a nested array.
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5
21. Create a function that, given a number, returns the corresponding value of that index in the Fibonacci series.
The Fibonacci Sequence is the series of numbers: 
1, 1, 2, 3, 5, 8, 13, 21, 34, ...

fibonacci(3) ➞ 3

fibonacci(7) ➞ 21

fibonacci(12) ➞ 233




*/