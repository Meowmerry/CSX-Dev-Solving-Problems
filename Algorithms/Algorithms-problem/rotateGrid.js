/* Question 10a
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the 
same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [[7, 4, 1],
                                           [8, 5, 2],
                                           [9, 6, 3] ]  */

/* ==================== SOLUTION 2 ======================= */

const rotateGrid = (array) => {
    return array[0].map((val, index) => array.map(row => row[index]).reverse())
}
const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateGrid(sampleGrid)); // -> [[7, 4, 1], [8, 5, 2], [9, 6, 3] ]

/* ==================== SOLUTION 2 ======================= */

const rotateGrid2 = (array) => {
    return array.map((row, i) => {
        return row.map((col, j) => {
            return array[row.length - 1 - j][i];
        });
    });
}
const sampleGrid1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateGrid(sampleGrid1)); // -> [[7, 4, 1], [8, 5, 2], [9, 6, 3] ]