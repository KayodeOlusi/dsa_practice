const missingElement = (array1, array2) => {
  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return array1[i];
  }

  return array1[-1];
};

console.log(missingElement([1, 2, 3, 4, 5, 6, 7], [3, 7, 2, 1, 4, 6]));
console.log(missingElement([5, 5, 7, 7], [5, 7, 7]));
console.log(
  missingElement([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 7, 5, 4, 3, 2, 1])
);
