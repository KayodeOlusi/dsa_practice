const twoSum = (array, number) => {
  let result = {};

  for (let i = 0; i < array.length; i++) {
    let difference = number - array[i];

    if (difference in result) return [result[difference], i];

    result[array[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
