/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    const newOrder = [];
    const newArray = [];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            newOrder.push([nums1[i], nums2[j]]);
        }
    }

    // newOrder.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    newOrder.sort((a, b) => {
        const sumA = a.reduce((acc, val) => acc + val, 0);
        const sumB = b.reduce((acc, val) => acc + val, 0);
        return sumA - sumB;
    });

    for (let i = 0; i < k && i < newOrder.length; i++) {
        newArray.push(newOrder[i]);
    }
    return newArray;
};