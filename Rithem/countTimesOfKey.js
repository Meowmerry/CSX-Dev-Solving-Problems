

// Write a function called countTimesOfKey which accepts two parameters, an array of objects, and a string. The function should return a number which is the number of times that key appears in the array of objects.

/* ================= SOLUTION 1 =================== */
function countTimesOfKey(array, string) {
    return array.reduce((acc, curr) => {
        Object.keys(curr).forEach((ele) => {
            if (ele === string) acc += 1;
        })
        return acc;
    }, 0)
}

console.log(countTimesOfKey([
    { name: "Sharon" },
    { name: "Manish" },
    { lastName: "Terma" }
], "name")) // 2

console.log(countTimesOfKey([
    { name: "Sharon" },
    { name: "Manish" },
    { lastName: "Terma" }
], "lastName")) // 1

console.log(countTimesOfKey([], "anything")) // 0

/* ================= SOLUTION 2 =================== */
function countTimesOfKey(array, string, i = 0, count = 0) {
    if (!array[i]) return count;
    for (let key in array[i]) {
        if (key === string) count += 1;
    }
    return countTimesOfKey(array, string, i + 1, count)
}

console.log(countTimesOfKey([
    { name: "Sharon" },
    { name: "Manish" },
    { lastName: "Terma" }
], "name")) // 2

console.log(countTimesOfKey([
    { name: "Sharon" },
    { name: "Manish" },
    { lastName: "Terma" }
], "lastName")) // 1

console.log(countTimesOfKey([], "anything")) // 0
