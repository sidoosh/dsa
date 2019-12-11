/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
 */


 //Solution

 /**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length + 1;

    // (len/2)(2first_num + (len-1)diff)
    let expectedSum = (len/2)*(len - 1);
    let sum = 0;

    for(let i = 0, l = nums.length; i < l; i++) {
        sum += nums[i];
    }

    return expectedSum - sum

};
