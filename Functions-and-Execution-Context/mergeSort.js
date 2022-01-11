function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);

    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));

    return sort(leftArr, rightArr);
}

function sort(left, right) {
    const mergeArr = [];
    let leftPoint = 0;
    let rightPoint = 0;

    while (left[leftPoint] !== undefined || right[rightPoint] !== undefined) {
        if (left[leftPoint] < right[rightPoint]) {
            mergeArr.push(left[leftPoint++]);
        } else if (right[rightPoint] <= left[leftPoint]) {
            mergeArr.push(right[rightPoint++]);
        } else {
            mergeArr.push(left[leftPoint++] || right[rightPoint++]);
        }
    }
    return mergeArr;
}


const randArr = [1, 7, 2, 6, 1, 8, 9, 18, 29, 151, 1616, 276, 1, 146, 363, 74, 72, 1, 5, 6]
console.log(mergeSort(randArr)) //:D:D:D:D

  //i dont' understasnd the logic but i just memorized it
  /// WOWWWWWW
