/* Challenge: findWaldo
Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?' */

/* ========================== SOLUTION 1  ======================================
================================================================================ */
function findWaldo(obj) {
    if (obj['Waldo']) return obj["Waldo"]
    return `Where's Waldo?`
}

// Uncomment these to check your work!
const DC = { 'Bruce': 'Wayne', 'Harley': 'Quinn' }
const supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown' }
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'