/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let remaining = candies;
  let dist = Array(num_people).fill(0);
  let i = 0;
  let count = 1;
  while(remaining>=0){
      dist[i % num_people] += Math.min(count, remaining);
      remaining -= count;
      count++;
      i++;
  }
  return dist;
};

'use-strict'