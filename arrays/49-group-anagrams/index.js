var groupAnagrams = function (strs) {
  let result = new Map();

  for (const str of strs) {
    let currentStrArr = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      currentStrArr[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }

    let strKey = JSON.stringify(currentStrArr);

    if (result.has(strKey)) {
      result.set(strKey, [...result.get(strKey), str]);
    } else {
      result.set(strKey, [str]);
    }
  }

  return [...result.values()];
};
