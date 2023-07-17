/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  let store = new Set(nums);
  let longestSequence = 0;

  for (const num of store) {
    if (!store.has(num - 1)) {
      let length = 0;

      while (store.has(num + length)) {
        length += 1;
      }
      longestSequence = Math.max(length, longestSequence);
    }
  }

  return longestSequence;
};
