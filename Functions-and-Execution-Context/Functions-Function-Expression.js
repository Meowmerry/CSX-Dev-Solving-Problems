/* Challenge: Functions - Function Expression
Convert the function named functionDeclaration to an anonymous function expression and assign it to a variable called myFunc. */

// MODIFY THE CODE BELOW 
function functionDeclaration() {
    return "Hi there!";
}
const myFunc = () => {
    return functionDeclaration()
}
console.log(myFunc()) //should log: "Hi there!"