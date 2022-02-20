// Create a function which accepts a string and return the number of characters and the whitespaces shouldnt be accounted for

// Input : String 
// Output : Number
/* =============== SOLUTON 1 ===================== */
const countCharWithOutSpace = (str) => {
    str = str.replace(/\W/g, '');
    return str.length;
}
console.log(countCharWithOutSpace('hello world')) // 10
console.log(countCharWithOutSpace('a b c')) // 3
console.log(countCharWithOutSpace('he llo ')) // 5
/* =============== SOLUTON 2 ===================== */
const countCharWithOutSpace1 = (str) => {
    return [...str].reduce((count, curr) => {
        if (curr !== ' ') {
            count += 1;
        }
        return count;
    }, 0)
}
console.log(countCharWithOutSpace1('hello world')) // 10
console.log(countCharWithOutSpace1('a b c')) // 3
console.log(countCharWithOutSpace1('he llo ')) // 5

/* =============== SOLUTON 3 ===================== */
const countCharWithOutSpace3 = (str, i = 0, count = 0) => {
    if (!str[i]) return count;
    if (str[i++] !== " ") count += 1;
    return countCharWithOutSpace3(str, i, count)
}
console.log(countCharWithOutSpace3('hello world')) // 10
console.log(countCharWithOutSpace3('a b c')) // 3
console.log(countCharWithOutSpace3('he llo ')) // 5