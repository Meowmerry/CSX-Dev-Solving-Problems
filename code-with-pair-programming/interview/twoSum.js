function twoSum(nums, target){
    const complementCache = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        complementCache[complement] = i;
        if(complementCache[nums[i]] !== undefined){
            return [complementCache[nums[i]], i]
        }
    }
    return[-1]
}
const resultOfTwoSum = twoSum([3,7,4,6], 11); // [1, 2] return the index of 7 and 4 which is add to target 11;
console.log(resultOfTwoSum) 
/* O(n) of space time complexity 
it does increase the space complexity to O(n) from O(1), 
but we consider a reduction in time complexity to be more important than a reduction in space complexity. 
The reasoning is that we can always buy more memory, but we cannot buy more time.
*/