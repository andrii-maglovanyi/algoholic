const isLetter = (char: string) => char && char.match(/[a-z]/i);

const isSpecial = (char: string) => "-'".indexOf(char) !== -1;

// O(n) time
// O(n) space
const solution = (text: string) => {
  const words = new Map();
  let wordChars = [];

  for (let i = 0; i <= text.length; i++) {
    const char = text[i];

    if (isLetter(char)) {
      wordChars.push(char);
    } else if (isSpecial(char) && isLetter(text[i - 1])) {
      wordChars.push(char);
    } else if (wordChars.length) {
      const originalWord = wordChars.join("");

      const lowerCaseWord = originalWord.toLowerCase();
      const upperCaseWord = [wordChars[0].toUpperCase()]
        .concat(wordChars.slice(1))
        .join("");

      if (words.has(upperCaseWord)) {
        if (originalWord === upperCaseWord) {
          words.set(upperCaseWord, words.get(upperCaseWord) + 1);
        } else {
          words.set(lowerCaseWord, words.get(upperCaseWord) + 1);
          words.delete(upperCaseWord);
        }
      } else if (words.has(lowerCaseWord)) {
        words.set(lowerCaseWord, words.get(lowerCaseWord) + 1);
      } else {
        words.set(originalWord, 1);
      }

      wordChars = [];
    }
  }

  return [...words];
};

export const solutions = {
  Solution: solution,
};
