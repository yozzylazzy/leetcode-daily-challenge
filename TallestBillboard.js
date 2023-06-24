/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
    const x = rods.length
    let total = rods.reduce((sum, rod) => sum + rod, 0)
    let temp = 0
    for (let i = 0; i < x; i++) {
        if (total % 2 !== 0 && x > 2 && rods[i] !== rods[i + 1]) {
            total -= rods[i]
        }
    }

    const limiter = total / 2
    for (let i = 0; i < x; i++) {
        temp += rods[i]
        if (temp === limiter) {
            break
        }
    }

    console.log(temp + ' - ' + limiter)
    if (total % 2 !== 0 || temp !== limiter) {
        return 0
    }
    return total / 2

};