/**
 * Problem Statement
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * Solution
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    //Solution 1:

    // let result = []
    // outerLoop:
    // for(let i = 0, len = nums.length; i < len; i++) {
    //     for(let j = 0; j < len; j++) {
    //         if(nums[i] + nums[j] === target) {
    //             result.push(i,j);
    //             break outerLoop;
    //         }
    //     }
    // }
    // return result;

    let map = new Map();
    let res = []
    for (let i = 0, len = nums.length; i < len; i++) {
        let temp = target - nums[i];
        if (map.has(temp)) {
            res.push(map.get(temp), i)
        }
        map.set(nums[i], i)
    }
    return res;
};
