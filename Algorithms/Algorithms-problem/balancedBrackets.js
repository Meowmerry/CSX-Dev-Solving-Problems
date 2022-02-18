/*
Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic. Make your solution work for all types of brackets: () [] {}

Examples:
balancedBrackets(" { }    n");                           // -> true
balancedBrackets("hi][  ");                              // -> false
balancedBrackets("[{random words and such}]");           // -> true
balancedBrackets("[The]Rains(In){Spain}");               // -> true
balancedBrackets("[({}Call me Ishmael)]");               // -> true
balancedBrackets("[(]{)}");                              // -> false
balancedBrackets(" gibberish { howdy: partner() }");     // -> true
balancedBrackets(" isThisAFunction?() { notReally();");  // -> false
*/
const balancedBrackets = (str) => {
    //str = str.replace(/[\w\s]/gi, '', "");
    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    };

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;

};
console.log(balancedBrackets(" { }    n")); // -> true
console.log(balancedBrackets("hi][  ")); // -> false
console.log(balancedBrackets("[{random words and such}]")); // -> true
console.log(balancedBrackets("[The]Rains(In){Spain}")); // -> true
console.log(balancedBrackets("[({}Call me Ishmael)]")); // -> true
console.log(balancedBrackets("[(]{)}")); // -> false
console.log(balancedBrackets(" gibberish { howdy: partner() }")); // -> true
console.log(balancedBrackets(" isThisAFunction?() { notReally();")); // -> false

/* ================ SOLUTION 2 ============================= */
const balancedBrackets2 = (str) => {
    str = str.replace(/[\w\s]/gi, '', "");
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) { return false };
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
    if (stack.length !== 0) { return false };

    return true;

};
console.log(balancedBrackets2(" { }    n")); // -> true
console.log(balancedBrackets2("hi][  ")); // -> false
console.log(balancedBrackets2("[{random words and such}]")); // -> true
console.log(balancedBrackets2("[The]Rains(In){Spain}")); // -> true
console.log(balancedBrackets2("[({}Call me Ishmael)]")); // -> true
console.log(balancedBrackets2("[(]{)}")); // -> false
console.log(balancedBrackets2(" gibberish { howdy: partner() }")); // -> true
console.log(balancedBrackets2(" isThisAFunction?() { notReally();")); // -> false
