const sentenceReversal = (str) => {
  let result_array = str.trim().replace(/\s+/g, " ").split(" ");
  let result = "";

  for (let i = result_array.length - 1; i >= 0; i--) {
    result += result_array[i] + " ";
  }

  return result;
};

console.log(sentenceReversal("This is the best"));
console.log(sentenceReversal("      space between"));
console.log(sentenceReversal("space after       "));
console.log(sentenceReversal("Hello John    how are you     "));
