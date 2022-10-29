const sentenceReversal = (str) => {
  let result = "";
  let result_array = str.trim().replace(/\s+/g, " ").split(" ");

  for (let i = result_array.length - 1; i >= 0; i--) {
    result += result_array[i] + " ";
  }
  return result;
};

const sentenceReversal2 = (str) => {
  let index = 0;
  let words = [];
  let spaces = [" "];
  let result = "";
  let str_length = str.length;

  while (index < str_length) {
    if (!spaces.includes(str[index])) {
      let start_of_word = index;

      while (index < str_length && spaces.includes(str[index])) {
        index += 1;
      }
      // TODO: Fix bug here
      words.push(str.split(start_of_word, index));
    }

    index += 1;
  }

  return words;
};

console.log(sentenceReversal2("This is the best"));
console.log(sentenceReversal2("      space between"));
console.log(sentenceReversal2("space after       "));
console.log(sentenceReversal2("Hello John    how are you     "));
