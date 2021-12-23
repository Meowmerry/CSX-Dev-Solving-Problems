// input : number
// output : string
// less than 12 return 'Good Morning!' 
// greater than 12 and less than 15 return 'Good Afternoon!'
// greater or equal 15 return 'Good Night!'

function greetings(hour) {
    if (hour < 12) return "Good Morning!";
    if (hour < 15) return "Good Afternoon!";
    return "Good Night!";
}

// Uncomment these to check your work!
console.log(greetings(8)); // expected log 'Good Morning!'
console.log(greetings(12)); // expected log 'Good Afternoon!'
console.log(greetings(14)); // expected log 'Good Afternoon!'
console.log(greetings(15)); // expected log 'Good Night!'
console.log(greetings(18)); // expected log 'Good Night!'
