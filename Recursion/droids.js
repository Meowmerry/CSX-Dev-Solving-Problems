/*Challenge: droids
Complete the function droids that accepts an array of strings and iterates through the array using a recursive. 
Update the variable result to "Found Droids!" if the array contains the string "Droids". 
Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result. */

/* ========================== SOLUTION 4  ======================================
================================================================================ */
const droids4 = (arr , index= 0 )=>{
    index++
    if(arr[index] === "Droids")  return "Found Droids!";
    if(!arr[index]) return "These are not the droids you're looking for."
    return droids4(arr, index)
}
const starWars4 = ["Luke", "Droids", "Rey", "Kylo", "Kylo"]
const thrones4 = ["Jon", "Danny", "Luke", "The Mountain", "Cersei"]
console.log(droids4(starWars4)) // should log: "Found Droids!"
console.log(droids4(thrones4)) // should log: "These are not the droids you're looking for.
