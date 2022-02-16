/*
Create a function noseFinder that accepts an array of objects as an argument, and returns an array with the name of only the reindeer
with a red nose as a first value, and the name of the color of that reindeers nose as a second value.
Ex:

*/
// I : Array of Object
// O : Array with name as first value and nose red as second
const noseFinder = (array) => {
    // init acc ressign to empty array
    // iterate thru array input using reduce
    return array.reduce((acc, curr) => {
        // check if curr.nose is equal to red , and reassign curr by using push method
        if (curr.nose === "red") {
            acc.push(curr.name, curr.nose)
        }
        return acc;
    }, []);
}
const santasReindeer = [{ name: "Dasher", nose: "blue" }, { name: "Dancer", nose: "green" }, { name: "Prancer", nose: "yellow" }, { name: "Vixen", nose: "reds" },
{ name: "Comet", nose: "grey" }, { name: "Cupid", nose: "pink" }, { name: "Donner", nose: "brown" }, { name: "Blitzen", nose: "limegreen" },
{ name: "Rudolph", nose: "red" }]

// console.log(noseFinder(santasReindeer))// ["Rudolph", "red"]

// function noseFinder(array) {
// input: array of objects
// output: array
// declare an empty output array
//     const output = [];
//     write if statement checking if nose color is red, push into array
//     array.forEach((reindeer) => {
//         if (reindeer.nose === "red") {
//             output.push(reindeer.name, reindeer.nose);
//         }
//         return output;
//     })
// }
// .find then you can return Object.values
