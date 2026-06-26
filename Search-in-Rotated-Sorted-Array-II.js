1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {boolean}
5 */
6var search = function(nums, target) {
7    for(let i = 0 ; i <= nums.length;i++){
8        if(nums[i]==target){
9            return true
10        }
11    }
12    return false
13};