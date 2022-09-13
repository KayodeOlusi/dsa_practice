const uniqueCharacters = (str) => {
  let hash = {};

  for (const c of str) {
    if (hash[c]) {
      return false;
    } else {
      hash[c] = c;
    }
  }

  return true;
};

console.log(uniqueCharacters("abcde"));
console.log(uniqueCharacters("goo"));
console.log(uniqueCharacters("abcdefg"));
console.log(uniqueCharacters(""));
