const continuosSum = (array) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

const continuosSum2 = (array) => {
  if (array.length === 0) return 0;

  let maxSum = 0;
  let currentSum = 0;

  for (const num of array) {
    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(continuosSum2([1, 2, -1, 3, 4, -1]));
console.log(continuosSum2([1, 2, -1, 3, 4, 10, 10, -10, -1]));
console.log(continuosSum2([-1, 1]));
