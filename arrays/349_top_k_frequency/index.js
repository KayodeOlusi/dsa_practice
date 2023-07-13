var topKFrequent = function (nums, k) {
  let store = {};
  let result = [];

  for (const num of nums) {
    if (num in store) {
      store[num] += 1;
    } else {
      store[num] = 1;
    }
  }

  let sortedStore = Object.entries(store).sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < k; i++) {
    result.push(sortedStore[i][0]);
  }

  return result;
};
