// O(n) time
// O(n) space

// The ASCII character set has just 128 different characters (standard english letters and punctuation),
// while Unicode has 110,000 (supporting several languages and some icons/symbols).
// We might want to treat our number of possible characters in our character set as another variable k
// and say our space complexity is O(k).
// Or we might want to just treat it as a constant, and say our space complexity is O(1).
const checkWithSet = (input: string) => {
  const chars = new Set();

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (chars.has(char)) {
      chars.delete(char);
    } else {
      chars.add(char);
    }
  }

  if (chars.size > 1) {
    return false;
  }

  return true;
};

// O(n) time
// O(n) space
const checkWithMap = (input: string) => {
  const chars = new Map();
  let odds = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const count = chars.get(char);
    if (count) {
      odds += count % 2 ? -1 : 1;
      chars.set(char, count + 1);
    } else {
      chars.set(char, 1);
      odds += 1;
    }
  }

  if (odds > 1) {
    return false;
  }

  return true;
};

export const solutions = {
  "With Set": checkWithSet,
  "With Map": checkWithMap,
};
