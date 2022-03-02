
/*
Write a function called countEvenWords which accepts an array of objects. Each of these objects will have a key of firstName with a value that is a string.

Return the number of firstName values that have a length that is even.

countEvenWords([{firstName: "Mark"}, {firstName: "Sia"}]) // 1
countEvenWords([{firstName: "Devon"}, {firstName: "Amanda"}]) // 1
countEvenWords([{firstName: "Sara"}, {firstName: "Yu"}]) // 2
countEvenWords([{firstName: "Malik"}, {firstName: "Natasha"}]) // 0 */

function countEvenWords(array) {
    return array.reduce((acc, curr) => {
        Object.keys(curr).forEach(key => {
            if (curr[key].length % 2 === 0) {
                acc += 1
            }
        })
        return acc;
    }, 0)
}

console.log(countEvenWords([{ firstName: "Mark" }, { firstName: "Sia" }])) // 1
console.log(countEvenWords([{ firstName: "Devon" }, { firstName: "Amanda" }])) // 1
console.log(countEvenWords([{ firstName: "Sara" }, { firstName: "Yu" }])) // 2
console.log(countEvenWords([{ firstName: "Malik" }, { firstName: "Natasha" }])) // 0