// writh a function take give array of number return new array of number, don't change array
// Input : Array
// Outptu : newArray
// create a function take array as arguments
// use new Set to return without duplicate element

const duplicate = (array) => {
    return [...new Set(array)];
}
const array = [1, 2, 4, 1, 3] // [1,2,4,3]
console.log(duplicate(array))


/*
write funciton take messages String () secrete code
    return decode messages String
    the code will start with single digit , digit how manything to skip over
    ex : 2 --> skip 2 char --> skip a b , the next char h will be part of decode message 
    the char after will skip ( skip 0 then will be i ) 
    the next digit will skip after we looking for will skip to the next char

 Input : String
 Output : String
 create a fucntion take message as arguments
    declare a output assign emptye string 
    itereate thru string input
        change the first letter to be Number
          ressign output by assign to current i + firstLetter (number)
   return output
*/
const decodeMessages = (message, i = 0, decode = "") => {
    if (message[i] === undefined) return decode;
    const skipDigit = Number(message[i]);
    decode += message[i + skipDigit + 1];
    i += skipDigit + 1;
    return decodeMessages(message, i + 1, decode)
}
let secrete = '2abh0i17!'; // hi! 
let secrete1 = '4abh0i17!'; // i!
console.log(decodeMessages(secrete))
console.log(decodeMessages(secrete1))


const decodeMessages1 = (message) => {
    message = message.split('')
    let output = "";
    for (let i = 0; i < message.length; i += 1) {
        const skipDigit = Number(message[i])
        output += message[i + skipDigit + 1];
        i += skipDigit + 1;
    }
    return output;
}
let secrete11 = '2abh0i17!'; // hi! 
let secrete12 = '4abh0i17!'; // i!
console.log(decodeMessages1(secrete11))
console.log(decodeMessages1(secrete12))