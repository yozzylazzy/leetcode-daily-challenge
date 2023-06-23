/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
    const n = nums.length
    if (n <= 2) {
        return n
    }

    const dp = Array(n).fill(0).map(() => new Map())
    let longest = 2

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const diff = nums[j] - nums[i];
            if (dp[i].has(diff)) {
                dp[j].set(diff, dp[i].get(diff) + 1);
            } else {
                dp[j].set(diff, 2);
            }
            longest = Math.max(longest, dp[j].get(diff));
        }
    }

    return longest;
};