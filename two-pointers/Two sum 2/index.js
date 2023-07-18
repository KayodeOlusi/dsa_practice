/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      return [
        numbers.indexOf(numbers[left]) + 1, // Can also use left + 1 for constant time
        numbers.indexOf(numbers[right], left + 1) + 1, // Can also use right + 1 for constant time
      ];
    }
  }
};
