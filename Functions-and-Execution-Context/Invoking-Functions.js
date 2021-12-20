/*Challenge: Invoking Functions
Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry. */
let calls = "";

function jerry(str) {
    // concat str with 'Jerry'
    str += 'Jerry'
    // return the invocation of kramer
    return kramer(str)
}

function george(str) {
    // concat str with 'George'
    str += 'George'
    // return the invocation of elaine
    return elaine(str)
}

function elaine(str) {
    // concat str with 'Elaine'
    str += 'Elaine';
    // return str;
    return str;

}

function kramer(str) {
    // concat str with 'Kramer'
    str += 'Kramer'
    // return the invocation of george
    return george(str)
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'