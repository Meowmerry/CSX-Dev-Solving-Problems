# Recursion

Recursion is incredibly common everyday life. Most often our brains use recursion to navigate basic tasks without us having to think about it. My favorite example is chewing food - do you chew your food an explicit number of times or do you keep chewing until your brain senses it has been chewed enough to swallow? Because we don't think about recursion explicitly very often it can be difficult to wrap our heads around it.

What is it?
In programming, a function is considered recursive if it calls itself during execution.

What does recursion need?
A base case to be met; something that will end the execution. The calling of itself.

Why is recursion helpful?
Often recursive function are more expressive; they closer resemble how someone would describe a solution in English.

# Challenges:

# Challenge 1

Repeater

Modify the function so that it returns a string containing the input character repeated 5 times. Use recursion!

# Challenge 2

Is Even

Modify the function so that it returns true if a number is even (and false if it's not). Assume input will be a positive integer. Use recursion!

# Challenge 3#

Factorial

Modify the function so that it returns the factorial of an input number. Use recursion!

The factorial of n is the product of all numbers between 1 and n

Ex: 5! = 5 _ 4 _ 3 _ 2 _ 1

# Challenge 4

Get Length

Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!

Hint: What does JavaScript return when you attempt to access an index that is greater than array.length - 1?

# Challenge 5

POW

Modify the function so that it returns base to the power of exponent. Use recursion!

Ex: pow(5, 3) = 5 _ 5 _ 5

# Challenge 6

Flow

Modify the function so that it returns the result of running the input number through each function in funcArray, in order. Use recursion!

First do it recursively, if you have time at the end try using a reduce function

# Challenge 7

Fibonacci

Modify the function so that it returns the nth Fibonacci number. Try not to look back at the slides!

Fibonacci reference: 1, 1, 2, 3, 5, 8, 13, ...

# Challenge 8

Heads or Tails

Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays

# Challenge 9

Combos of Any length

Modify this function so that it returns all combinations of the elements of arr as an array of arrays. Use Recursion!
