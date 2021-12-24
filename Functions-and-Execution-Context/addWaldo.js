/*Challenge: addWaldo
Create a function addWaldo that accepts an object with keys being first names and values being last names. For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.*/
// input : object
// output : object with new pair key : value add to input object;
// create a function that take an object 
const findWaldo = (obj) => {
    // declear a variable result = "";
    let result = "";
    // use a for in loop to check if in objInput has 'Waldo' or not
    for (let key in obj) {
        if (key !== 'Waldo') { // if not find 'Waldo'
            result = `Where's Waldo?` // set result = Where's Waldo?
        } else {
            result = obj[key]; // otherwise result = unknown
        }
    }
    return result;
}
// use a for in loop to check if the key "Waldo" is in object.
// if not return a string 'Where's Woldo?', otherwise return value 'unknown'
// Uncomment these to check your work!
const DC = { 'Bruce': 'Wayne', 'Harley': 'Quinn' }
const supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown' }
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'