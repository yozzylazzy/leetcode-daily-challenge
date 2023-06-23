/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const total = s.length
    let maxLength = 0

    for (let i = 0; i <= total; i++) {
        const temp = new Set()
        let length = 0

        for (let j = i; j < total; j++) {
            if (temp.has(s[j])) {
                break
            }
            temp.add(s[j])
            length++
        }
        maxLength = Math.max(maxLength, length)
    }
    return maxLength

};