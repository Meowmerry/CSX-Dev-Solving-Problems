/*Challenge: droids
Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result. */
// input : array of string;
// output : string when we find the 'Droids' in array input

function droids(arr) {
    // ADD CODE HERE
    // iterated an arr by using a for loop;
    // check if each element contains 'Droids', return "Found Droids!",
    // otherwise update the result to "These are not the droids you're lookin for."

    let result = '';
    for (let i = 0; i < arr.length; i++) {
        arr[i] === "Droids" ? result = 'Found Droids!' : result = "These are not the droids you're looking for.";
        // if (arr[i] === "Droids") {
        //     result = 'Found Droids!'
        // } else {
        //     result = "These are not the droids you're looking for.";
        // }
    }
    return result;
}

// Uncomment these to check your work! 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."