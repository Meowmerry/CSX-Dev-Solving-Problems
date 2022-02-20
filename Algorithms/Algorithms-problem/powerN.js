/*
Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

powerN(3, 1) → 3
powerN(3, 2) → 9
powerN(3, 3) → 27
*/
const powerN = (base, exponent, product = 1) => {
    // base case : if exponent === 0 return product;
    if (exponent === 0) return product;
    // recursive case : invoke powerN and passed in base, exponent - 1 , product * base;
    return powerN(base, exponent - 1, product * base);
}

console.log(powerN(3, 1)) //→ 3
console.log(powerN(3, 2)) //→ 9
console.log(powerN(3, 3)) //→ 27