/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
usePotions("9999B") //➞ "9998"
usePotions("9A123") //➞ "10123"
usePotions("567") //➞ "567" */

/*==================== SOLUTION 1 ====================== */
const usePotions = (string) => {

    let output = "";

    for (let i = 0; i < string.length; i++) {

        if (string[i] === "A") output += addOne(+string[i - 1]);

        else if (string[i] === "B") output += subtractOne(+string[i - 1]);

        else if (string[i + 1] !== "A" && string[i + 1] !== "B") output += string[i];

    }

    return output;
}

console.log(usePotions("3A78B51")) //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
console.log(usePotions("9999B")) //➞ "9998"
console.log(usePotions("9A123")) //➞ "10123"
console.log(usePotions("567")) //➞ "567"
/*==================== SOLUTION 2 ====================== */
const usePotions1 = (string)=>{
    let output = "";
    for(let i = 0 ;i<string.length ;i++){
        if(string[i+1] === 'A') {
            output += addOne(Number(string[i]))
        }else if(string[i+1] === 'B'){
            output += subtractOne(Number(string[i]))
        }else if(string[i] === 'A' || string[i] === 'B'){
            output = output;
        }else{
            output += string[i]
        }
    }
    return output;
}
console.log(usePotions1("3A78B51")) //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
console.log(usePotions1("9999B")) //➞ "9998"
console.log(usePotions1("9A123")) //➞ "10123"
console.log(usePotions1("567")) //➞ "567"
console.log(usePotions1("A5B9A123")) //➞ "410123"


/*==================== SOLUTION 3 ====================== */
function usePotions3(str) {
    const modChar = str.split("");
    for (let i = 0; i < modChar.length; i++) {
      if (modChar[i] === "A") {
        modChar[i - 1] = addOne(Number(modChar[i - 1]));
      } else if (modChar[i] === "B") {
        modChar[i - 1] = subtractOne(Number(modChar[i - 1]));
      }
    }
    return modChar.join("").replace("A", "").replace("B", "");
  }
console.log(usePotions3("3A78B51")) //➞ "47751"--> 3 grows to 4, 8 shrinks to 7
console.log(usePotions3("9999B")) //➞ "9998"
console.log(usePotions3("9A123")) //➞ "10123"
console.log(usePotions3("567")) //➞ "567"
console.log(usePotions3("A5B9A123")) //➞ "410123"
