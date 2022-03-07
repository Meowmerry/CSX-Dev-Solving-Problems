/* Challenge: Objects - Examining Properties
Objects are data structures used to store related data represented with keys and associated values. Keys are also referred to as properties. Keys give us an easy way to reference the values, so they are almost always descriptive strings. Values can be any valid data type: a number, string, array, even other objects that contain even more objects!

We can iterate through an object's properties in much the same way we iterate through the elements of an array, though the implementation is a bit different. Research for... in and Object.keys before continuing with these challenges.

Challenge
You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1.*/

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (let key in checkObj) {
    if (key === 'foundNum') {
        found = 1;
    }
}
console.log(found)

const checkObj1 = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

const objToArray = [];
// ADD CODE HERE
for (let key in checkObj1) {
    if (checkObj1[key] >= 2) {
        objToArray.push(checkObj1[key])
    }
}
console.log(objToArray)

/* 
Challenge: Objects - Iterating with a for loop
This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.*/
const checkObj2 = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};
const objToArray1 = Object.values(checkObj2)
console.log(objToArray1)

let divBy6 = false;
for (let index = 0; index < objToArray1.length; index++) {
    if (objToArray1[index] !== 0) {
        divBy6 = true
    }

}
// ADD CODE HERE
console.log(divBy6)