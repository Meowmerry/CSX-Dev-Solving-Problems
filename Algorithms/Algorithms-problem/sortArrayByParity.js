/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]


*/
/* ================== Solution 1 ========================== */
var sortArrayByParity = function (nums) {
    const newArr = [];
    for (let i = 0; i < nums.length; i++)
        if (nums[i] % 2 === 0) newArr.push(nums[i]);
    for (let i = 0; i < nums.length; i++)
        if (nums[i] % 2 !== 0) newArr.push(nums[i]);
    return newArr;
};
console.log(sortArrayByParity([3, 1, 2, 4]));

/* ================== Solution 2 ========================== */
var sortArrayByParity = function (nums) {
    const result = new Array(nums.length)
    console.log(result)
    let even = 0;
    let odd = nums.length - 1;
    for (const num of nums) {
        if (num & 1) {
            result[odd] = num;
            odd--
        } else {
            result[even] = num;
            even++
        }
    }
    return result;
}
console.log(sortArrayByParity([3, 1, 2, 4]));

/* ================== Solution 3 ========================== */
var sortArrayByParity = function (nums) {
   for(let i = 0 , j = 0 ; j < nums.length  ; j ++ ){
    if(nums[j] % 2 === 0) {
        let temp = nums[i];
        nums[i++] = nums[j];
        nums[j] = temp
    }
   }
   return nums;
}
console.log(sortArrayByParity([3, 1, 2, 4]));

/* ================== Solution 4 ========================== */
var sortArrayByParity = function (nums) {
  
}
console.log(sortArrayByParity([3, 1, 2, 4]));