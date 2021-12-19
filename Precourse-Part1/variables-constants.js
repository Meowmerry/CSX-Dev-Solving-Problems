/* 

Variables & Constants
What is a variable?
Defining and manipulating data is the basis of programming. Without data, programming has no purpose. Data in JavaScript is stored in variables to be reused when needed. We do this by using special JS reserved keywords. For variables that can be changed later, we use var or let, and for constant variables, we use const. let and const declarations come with additional restrictions on how the variable can be used.

Var
JavaScript has many different data types. Some of these types are numbers, strings, and booleans. Variables are used in order to store these values. In the code below, the variable is named favoriteShow and the value that is being stored under the name favoriteShow is currently "Shameless".

var favoriteShow = "Shameless";
As we mentioned above, the word var is a keyword in JavaScript which signifies that we are going to create a variable. This is followed by the variable name, then the assignment operator (=) assigns whatever is to the right of the equals sign to the variable name.

Once you create a variable with the var keyword, you can also update that variable's value. First, we create a variable called tvShow and assign it the value "Black Mirror". Then, without using the var keyword we reassign tvShow to equal "Parks and Recreation".

var tvShow = "Black Mirror";
console.log(tvShow) // => "Black Mirror"
tvShow = "Parks and Recreation";
console.log(tvShow) // => "Parks and Recreation"
Notice the different outputs on lines 2 and 4 each time we call console.log(tvShow). In the first one on line 2, the output is "Black Mirror", but after we change the value of tvShow to "Parks and Recreation" on line 3, we get a different output for our console.log(tvShow). Why are we getting different outputs for the same exact console.log? As you can see on line 3, we reassigned the value of tvShow from "Black Mirror" to "Parks and Recreation." Once we change the value of a variable to a new value, it will remain that value until it is changed again.

Let & Const
let and const were introduced with the release of ECMAScript 2015, or more commonly, ES6. You'll see this term quite a lot while you're learning JavaScrpt, but for now, don't worry too much about it, it's just a version of JavaScript. We'll go more into detail on what that means in a later lesson.

In the example below, you can see that the value of variables declared with the var and let keywords may be reassigned.

let fridge = "empty";
console.log(fridge) // => "empty"
fridge = "full";
console.log(fridge) // => "full"

var house = "dirty";
console.log(house) // => "dirty"
house = "clean";
console.log(house) // => "clean"
At this point you may be asking "what's the difference between let and var?" This is a more advanced topic relating to how let and var (and const) are scoped. You'll learn more about scope in later lessons.

While using the var and let keywords allows us to reassign a variable's value, const operates a bit differently.

The const keyword is used to create a constant. Now, while a const declaration looks mainly the same as let and var variables, the value of a constant cannot be changed throughout the code. Like let, const is also limited to the scope in which it is declared.

Consider the following:

const pet = "cat";

pet = "dog";  // => TypeError: Assignment to constant variable.
This would result in the error "Assignment to constant variable"

Knowing What to Use and When
In JavaScript today, it is considered best practice to avoid using var. You should try and use let and const whenever possible. Just remember to use let when you will be changing the value of the variable and const when you won't be changing the value. Getting in the habit of using let and const properly now in the early stages of your learning will help you keep your code easier to manage.

5 Rules for Naming Variables and Constants
There are a few things to know about naming your variables and constants.

1. Variable names are case-sensitive. This means a and A are two different variables, regardless which keyword (var, let or const) that was used to define them.

let a = "hello";
let A = "goodbye";

console.log(a); // => "hello"
console.log(A); // => "goodbye"
2. Variable names should begin with a lowercase character.

3. Variable names cannot begin with a number.

4. Variable names cannot contain symbols.

// VALID
let user;
let applicant3;
let favoriteCandy;

// INVALID
let 3applicant;
let fav-candy
5. camelCased variable names are best practice. camelCase is a naming convention in which a name is formed by connecting multiple words together as a single word with the first letter of each of the multiple words capitalized so that each word that makes up the name can easily be read. The only word not capitalized is the first.

// YES
let favFood;
let camelCasedVariable;
let userName;

// NO
let favoriterestaurant;
let tobecompleted;
Conclusion
We've covered A LOT of material here! Now we're going to spend the next 3 challenges practicing declaring variables and constants. It may seem overwhelming right now, but don't worry, we'll take it slow, and you'll be a pro in no time.

*/