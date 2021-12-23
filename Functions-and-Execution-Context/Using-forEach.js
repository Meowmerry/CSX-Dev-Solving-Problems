// input : arr of string;
// output : string 

function droids(arr) {
    let result = '';
    // iterates an array by using a forEach;
    // check if element found "Droids" -> "Found Droids!" : "These are not the droids you're looking for."
    arr.forEach(ele => {
        ele === "Droids" ? result = "Found Droids!" : result = "These are not the droids you're looking for.";
    })

    return result;
}

// Uncomment these to check your work! 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) //should log: "These are not the droids you're looking for."