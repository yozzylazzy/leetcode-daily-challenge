/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const total = nums.length
    const output = {}

    for (let i = 0; i <= total; i++) {
        const sisa = target - nums[i]

        if (sisa in output) {
            return [output[sisa], i]
        }
        output[nums[i]] = i
    }
    return []
};