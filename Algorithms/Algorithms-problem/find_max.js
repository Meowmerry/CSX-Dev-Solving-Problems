function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            num = max_num
            max_num += 1
        }
    }
    return max_num;
}
console.log(find_max([3, 4, 5]))