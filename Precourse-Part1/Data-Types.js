/* 
Data Types
Now that you know how to declare variables, it would probably be useful to learn what kinds of data you can store within your variables, no?

JavaScript includes data types similar to other programming languages like Java or C#. Data type indicates characteristics of data. It tells the compiler whether the data value is numeric, alphabetic, etc., so that it can perform the appropriate operation.

JavaScript includes primitive and composite data types.

Primitive Data Types
String: a series of characters (letters, numbers, spaces, symbols, etc.) wrapped in quotes
Number: integers, floats, etc
Boolean: true or false
Null: intentionaly having no value
Undefined: a declared variable that hasn't been assigned a value yet
Symbol: a unique value that's not equal to any other value. Note, this is an ES6 feature that never really took off, so don't worry about it for now.
Composite Data Types
Object: Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. Objects are standalone entities, with properties stored in key/value pairs. Compare it with a person, for example. A person is an object, with properties. A person has a race, a date of birth, a weight, a height, an eye color, etc. The same way, JavaScript objects can have properties, which define their characteristics.
Array: Used to store multiple values in a single variable. Similar to a list. Technically, arrays are objects in JavaScript, but we'll dive into that more in second half of the pre-course.
Here are some examples of all the above pertinent data types:

#String
const name = "Kyle"; // <= quotes tell us this is a string

#Number
const favNum = 17;

#Boolean
const iLoveCoding = true; // <= no quotes
const iLoveBeets = false;

# Null
const blackHole = null;

# Undefined
let address; // here we declared the variable, 
             // but never gave it a value, so 
             // it is Undefined

# Object
const person = {
  name: "Bart Simpson",
  dob: "02/23/88", 
  weight: 65,
  hairColor: "blonde" 
}

# Array
const fruits = ["apples", "oranges", "pears", "bananas"];
const myArray = [21, "pear", [3, 7, 22], { objectsToo: true }];
Take note of the fact that Arrays & Objects can contain an assortment of different data types all stored inside one variable! This is what makes them Composite data types by definition.

Conclusion
We'll dive deeper into each of these data types individually over the course of the pre-course, so don't worry if this is all a bit confusing at this point. For now, just take note of each's existence and general syntax.
*/ 