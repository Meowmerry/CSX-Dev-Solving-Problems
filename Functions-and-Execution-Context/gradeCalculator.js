// input : number
// output : grade (string)
// equal and greater than 90 -> "A"
// equal and greater than 80 and equal and less 89 -> B
// equal and greater than 70 and equal and less 79 -> C
// equal and greater than 60 and equal and less 69 -> D
// equal and less than 59 -> F

function gradeCalculator(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80 && grade <= 89) {
        return "B";
    } else if (grade >= 70 && grade <= 79) {
        return "C";
    } else if (grade >= 60 && grade <= 69) {
        return "D";
    }
    return "F";

}

// Uncomment the lines below to test your code
console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"
