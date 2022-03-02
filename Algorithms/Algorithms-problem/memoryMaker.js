/*
QUESTION 7d
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/
const memoryMaker = () => {
    let result = [];
    return (args) => {
        result.push(args)
        return result;
    }
}

const iRemember = memoryMaker();
console.log(iRemember('hello')); //-> ['hello']
console.log(iRemember(1)); //-> ['hello', 1]
console.log(iRemember('world')); //-> ['hello', 1, 'world']
console.log(iRemember(true));// -> ['hello', 1, 'world', true]