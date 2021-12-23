/* Challenge: While Loops - Counters
Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.*/


function imAboutToExplodeWithExcitement(n) {
    // ADD CODE HERE
    let result = "";
    let i = n;
    while (i >= 0) {
        if (i === 5) {
            result += "Oh wow, I can't hadle with anticipation!";
        } else if (i === 3) {
            result += `I'm about to explode with excitement!`;
        } else if (i === 0) {
            result += `That was kind of a let down`
        } else {
            result += ` ${i} `
        }
        i--
    }
    return result;
}

// Uncomment the line below to check your work!
console.log(imAboutToExplodeWithExcitement(10)); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

// input : number
// output : number and string by concatenation
// create a function imAboutToExplodeWithExcitement that takes number as argument
function imAboutToExplodeWithExcitement(n) {
    // declare a variable result = ""
    let result = "";
    // declare a variable count = n input;
    let count = n;
    // iterate thru n using a while loop
    while (count >= 0) {
        if (count === 5) {// detemine if count is equal to 5, will reassign result to 'Oh wow, I can't handle the anticipation!'
            result = + `Oh wow, I can't handle the anticipation!`;
        } else if (count === 3) {// else if count is equal to 3, reassign result to I'm about to explode with excitement!'
            result = + `I'm about to explode with excitement!`;
        } else if (count === 0) {// else if count is equal to 0, reassign result to 'That was kind of a let down'
            result += `That was kind of a let down`;
        } else {// otherwise reassigh result to count;
            result += ` ${count}, `
        }
        count--;// decressment count by 1
    }
    // return result;
    return result;
}

  // Uncomment the line below to check your work!
  // imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'