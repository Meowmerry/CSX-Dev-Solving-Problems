/*
78. Subsets
Medium
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


Input: nums = [0]
Output: [[],[0]]
create a function takes array
    iterate through array 

*/
const subsets = function(nums) {
    return nums.reduce((acc, curr) =>{
        acc.push(curr);
        console.log('acc' ,acc)
    }, [])
};
console.log(subsets([1,2,3])) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) // [[],[0]]