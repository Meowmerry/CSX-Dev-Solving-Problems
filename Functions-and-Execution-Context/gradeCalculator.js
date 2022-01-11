

/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: gradeCalculator
Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

grades 90 and above should return "A"

grades 80 to 89 should return "B"

grades 70 to 79 should return "C"

grades 60 to 69 should return "D"

59 and below should return "F"

*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */// input : number


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

/* ========================== SOLUTION 2  ======================================
================================================================================ */// input : number

function gradeCalculator(grade) {
    const newGrade = grade;
    switch (true) {
        // If score is 90 or greater
        case newGrade >= 90:
            return "A";
        // If score is 80 or greater
        case newGrade >= 80:
            return "B";
        // If score is 70 or greater
        case newGrade >= 70:
            return "C";
        // If score is 60 or greater
        case newGrade >= 60:
            return "D";
        // Anything 59 or below is failing
        default:
            return "F";
    }
}

console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"
