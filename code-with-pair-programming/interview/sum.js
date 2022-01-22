const sum1 = (...arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
};
let arr1 = [3, 5, 3, 2, 1];
console.log(sum1(...arr1)); // 14
console.log(sum1(3, 5, 4, 1)); // 13