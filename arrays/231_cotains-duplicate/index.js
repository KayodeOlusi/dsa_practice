const containsDuplicate = (nums) => {
  let dict = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in dict) return true;

    dict[nums[i]] = nums[i];
  }

  return false;
};

// Language: javascript
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
