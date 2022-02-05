/*Challenge: droids
Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. 
Update the variable result to "Found Droids!" if the array contains the string "Droids". 
Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result. */
// input : array of string;
// output : string when we find the 'Droids' in array input
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function droids(arr) {
    // ADD CODE HERE
    // iterated an arr by using a for loop;
    // check if each element contains 'Droids', return "Found Droids!",
    // otherwise update the result to "These are not the droids you're lookin for."
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        arr[i] === "Droids" ? result = 'Found Droids!' : result = "These are not the droids you're looking for.";
    }
    return result;
}

// Uncomment these to check your work! 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function droids1(arr) {
    return arr.reduce((acc, curr) => {
        curr === "Droids" ? acc = "Found Droids!" : acc = "These are not the droids you're looking for";
        return acc;
    }, "");
}

// Uncomment these to check your work! 
const starWars1 = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones1 = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids1(starWars1)) // should log: "Found Droids!"
console.log(droids1(thrones1)) // should log: "These are not the droids you're looking for.

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function droids2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Droids") return 'Found Droids'
    }
    return `These are not the droids you're looking for`
}

const starWars2 = ["Luke", "Droids", "Rey", "Kylo", "xxx"]
const thrones2 = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids2(starWars2)) // should log: "Found Droids!"
console.log(droids2(thrones2)) // should log: "These are not the droids you're looking for.

/* ========================== SOLUTION 3  ======================================
================================================================================ */
const droids2 = (arr) => arr.reduce((accumulated, current) => current === 'Droids' ? accumulated = "Found Droids!" : accumulated = `These are not the droids you're looking for.`, '')


const starWars3 = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones3 = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids2(starWars3)) // should log: "Found Droids!"
console.log(droids2(thrones3)) // should log: "These are not the droids you're looking for.






