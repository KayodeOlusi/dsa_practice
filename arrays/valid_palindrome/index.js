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
