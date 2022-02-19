# Algorithm Challenges

# Challenge 1

# Mode

Given an array, return its mode (the number that appears most often)

If there is a tie, return the greater number of tied modes.

ex. mode([1,1,1,2,2,3]) -> returns 1

ex. mode([1,3,1,3,1,3]) -> returns 3

# Challenge 2

# Median

Given an array, return its median (the element whose value falls in the middle of all other values in the array)

Ex: median([1, 2, 3, 4, 5]), median is 3

# Challenge 3

# Is Prime

Modify the function so that it return whether a number is prime

Extension: solve this in 0(logn) time

Ex: isPrime(3) -> true

Ex: isPrime(4) -> false

# Challenge 4

# Ransom Note

Given two strings, write a function that determines if you can build the second string with the characters of the first. If you have more than one of a certain character in the second string, you must have at least as many of those characters in the first Imagine a ransom note (second string) constructed from cut-out letters from a magazine (first string). Except you also need to cut out spaces for some reason. Capitalization matters!

# Challenge 5

# Delete Duplicates

Write a function that takes in an array and returns a new array with duplicates removed

Ex: deleteDups(['a','a','a']) -> ['a']

Ex: deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> ['a', 'b', 'c', 'd']

# Challenge 6

# Find Unique

Write a function that takes in an array in which every number appears exactly twice, except for one number which appears exactly once. The function should return the number that appears exactly once.

Ex. uniqueNumber([1,1,4,2,3,2,3]) should return the number 4 since it is the number that appears exactly once in the array

# Challenge 7

# Palindrome

Modify the function so that it returns true if string is a palindrome (the string is the same forward and backwards). Otherwise, should return false. The parameters entered may have punctuations and symbols, but they should not affect whether the string is a palindrome. Ignore capitalization.

Hint: look up how to use regex in JS - specifically how to rip away all characters that aren't letters

# Challenge 8

# Sort

Implement your own function to sort an array.
What is its time complexity?

Extension: Try implementing merge or quick sort

# Challenge 9

# Shuffle

Implement your own function to randomize an array - each element should have an equal chance of landing in any spot

What is its time complexity?

# Challenge 10

# Find Missing

You are given an array of length n containing every number from 0 to n except for one missing number. Find that number!

Challenge: give this function 0(n) time complexity, 0(1) space complexity
