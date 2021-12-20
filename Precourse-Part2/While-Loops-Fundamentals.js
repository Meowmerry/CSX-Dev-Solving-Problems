/*Challenge: While Loops - Fundamentals
A while loop is an alternative iteration statement. JavaScript's thread of execution will repeatedly process the code block until the while loop's conditional expression evaluates to false. **Be careful to avoid an infinite loop!**

Challenge
Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8. */

let count = 2;
// ADD CODE HERE
let i = 0;
while (i < 3) {
    count += 2;
    i++
}

// Uncomment these to check your work!
console.log(count);

/*
Challenge: phonebook
You are given an array of names along with an array of phone numbers. 
Using a loop, populate the existing phoneBook object to build a proper phonebook with the keys being people's names and the values being their respective phone numbers. */

// If you're having trouble, use lines 12-14 for expected inputs and outputs
const phoneBook = {};
const names = ['Mira', 'Royce', 'Kathie'];
const numbers = ['3234958675', '9164059384', '4154958675']

// Write your code below this line
for (let i = 0; i < numbers.length; i++) {
    phoneBook[names[i]] = numbers[i]
}


//Uncomment the lines below to test your code

console.log(phoneBook["Mira"]); //=> 3234958675
console.log(phoneBook["Royce"]); //=> 9164059384
console.log(phoneBook["Kathie"]); //=> 4154958675