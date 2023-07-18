/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  let result_str = "";

  for (let i = 0; i < s.length; i++) {
    if (/^[a-zA-Z0-9]+$/.test(s[i])) {
      result_str += s[i].toLowerCase();
    }
  }

  for (let i = 0; i < Math.floor(result_str.length / 2); i++) {
    if (result_str[i] !== result_str[result_str.length - i - 1]) {
      return false;
    }
  }

  return true;
};

// Time complexity: O(n)
// Space complexity: O(1)
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/^[a-zA-Z0-9]+$/.test(s[left])) {
      left += 1;
    } else if (!/^[a-zA-Z0-9]+$/.test(s[right])) {
      right -= 1;
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }

      left += 1;
      right -= 1;
    }
  }

  return true;
};
