1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var numberGame = function(nums) {
6    let num = nums.sort((a,b)=>a-b)
7        let result = []
8    while(num.length > 0){
9        let alice = num.shift()
10        let bob = num.shift()
11        result.push(bob,alice)
12    }
13    return result;
14
15};