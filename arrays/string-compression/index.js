const stringCompression = (str) => {
  let hash = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (current in hash) {
      hash[current] += 1;
    } else {
      hash[current] = 1;
    }
  }

  Object.entries(hash).forEach(([key, value]) => {
    result += key + value;
  });

  return result;
};

console.log(stringCompression(""));
console.log(stringCompression("AAAaaa"));
console.log(stringCompression("AABBCC"));
console.log(stringCompression("AAABCCDDDDD"));
console.log(stringCompression("AAAABBBBCCCCCDDEEEE"));
