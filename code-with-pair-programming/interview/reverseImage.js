// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

function reverseImage(image) {
    const result = [];
    image.forEach(element => {
        const subArr = []
        element.forEach(val => {
            if (val === 1) {
                subArr.push(val - 1)
            } else if (val === 0) {
                subArr.push(val + 1)
            }
        })
        result.push(subArr)
    });
    return result;
}

function reverseImage(image) {
    return image.map(v => v.map(x => +!x))
}

// Examples
console.log(reverseImage([[1, 0, 0], [0, 1, 0], [0, 0, 1]])) //➞ [ [0, 1, 1], [1, 0, 1], 1, 1, 0]]