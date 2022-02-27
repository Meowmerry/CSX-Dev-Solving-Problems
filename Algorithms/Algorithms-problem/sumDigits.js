/*
Given a non-negative int n, return the sum of its digits recursively (no loops).

sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3
*/

/* ================= SOLUTION 1 ====================== */
const sumDigits = (num, i = 0, sum = 0) => {
    if (String(num)[i] === undefined) return sum;
    sum += Number(String(num)[i]);
    return sumDigits(String(num), i + 1, sum);
};

console.log(sumDigits(126)); // → 9
console.log(sumDigits(49)); // → 13
console.log(sumDigits(12)); // → 3

/* ================= Ranald SOLUTION 1  ====================== */
function sumDigits(num) {
    if (num === "") return 0;
    return +String(num).slice(0, 1) + sumDigits(String(num).slice(1));
}

/* ================= Ranald SOLUTION 2  ====================== */
function sumDigits(num, i = 0) {
    if (i === String(num).length) return 0;
    return +String(num)[i] + sumDigits(num, i + 1);
}

/* ================= Ranald SOLUTION 3  ====================== */
function sumDigits(num) {
    if (num === 0) return 0;
    return (num % 10) + sumDigits(Math.floor(num / 10));
}
