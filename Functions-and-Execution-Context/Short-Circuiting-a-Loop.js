// input : array of string;
// output : string 
// function holidays(arr) {
//     // Do not use a variable to store your result 
//     // ADD CODE HERE
//     // iterates through arr, use a reduce
//     // if the element in array contains "October" -> return "Happy Halloween"
//     // else return " Have agreat day!"
//     // return arr.reduce((acc, curr) => {
//     //     if (curr === "October") {
//     //         acc = "Happy Halloween";
//     //     } else {
//     //         acc = "Have a great day!"
//     //     }
//     //     return acc;
//     // }, '')
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "October") return "Happy Halloween";
//     }
//     return "Have a great day!";


// }

// // Uncomment these to check your work!
// const months = ["April", "May", "June", "October"];
// const animals = ["Cats", "Dogs", "Pigs"];
// console.log(holidays(months)); // should return: "Happy Halloween"
// console.log(holidays(animals)); // should return: "Have a great day!"


// declear a function holidays that accepts an arary of strings
function holidays(arrOfString) {
    // use a for loop to iterate thru the input array
    for (let i = 0; i < arrOfString.length; i++) {
        // use a conditional to check each element of the array for the string 'October'
        // if the current element is "October", return 'Happy Halloween'
        if (arrOfString[i] === "October") return "Happy Halloween";
    }
    // return 'Have a great day!';
    return "Have a great day!";

}


const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"

