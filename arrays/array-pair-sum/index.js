const pairSum = (array, target) => {
  let seen = new Set();
  let result = new Set();

  if (array.length < 2) return;

  for (const num of array) {
    let difference = target - num;
    console.log(difference);

    if (!seen.has(difference)) {
      seen.add(difference);
    } else {
      result.add((num, difference));
    }
  }

  return result;
};

console.log(pairSum([1, 9, 2, 8, 3, 7, 4, 6, 5, 5, 13, 14, 11, 13, -1], 10));
console.log(pairSum([1, 2, 3, 1], 3));
console.log(pairSum([1, 3, 2, 2], 4));
