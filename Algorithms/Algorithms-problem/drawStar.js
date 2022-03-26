
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/
//============================ SOLUTION 1 ====================================
const drawStar = n => {
    let star = "";
    const center = Math.ceil(n / 2);
    const centerChar = "+";
    if (n % 2 === 0 || n < 0) return "n must be an odd positive number";

    for (let i = 1; i <= n; i++) {
        if (i === center) {
            star += "-".repeat(i - 1) + centerChar + "-".repeat(i - 1) + "\n";
        } else if (i < center) {
            star +=
                " ".repeat(i - 1) +
                "\\" +
                " ".repeat(center - i - 1) +
                "|" +
                " ".repeat(center - i - 1) +
                "/" +
                " ".repeat(i - 1) +
                "\n";
        } else {
            star +=
                " ".repeat(n - i) +
                "/" +
                " ".repeat(i - center - 1) +
                "|" +
                " ".repeat(i - center - 1) +
                "\\" +
                " ".repeat(n - i) +
                "\n";
        }
    }
    return star;



};
console.log(drawStar(3))

//============================ SOLUTION form CodeSmith ====================================
const drawStar1 = n => {
    const L = (n - 1) / 2;
    // for each row
    for (y = L; y >= -L; y--) {
        let string = "";

    }
};
console.log(drawStar1(5))