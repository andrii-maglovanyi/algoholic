// O(n^2) time
// O(n) space
const longestSubstringWithCursorReset = (string: string) => {
  let length = 0;
  let substr = "";
  let subStart = 0;

  for (let i = 0; i < string.length; i++) {
    subStart = substr.length ? subStart : i;
    const index = substr.indexOf(string[i]);

    if (index === -1) {
      substr += string[i];
      length = Math.max(length, substr.length);
    } else {
      i = subStart;
      substr = "";
    }
  }

  return length;
};

// O(n) time
// O(n) space
const longestSubstringWithMap = (string: string) => {
  let length = 0;
  const map = new Map();

  for (let start = 0, cursor = 0; cursor < string.length; cursor++) {
    let currChar = string[cursor];

    // If character is already visited:
    // - update start index to next char position if it's a part of current substring
    // - leave start as it is if character was found before
    if (map.has(currChar)) {
      start = Math.max(map.get(currChar) + 1, start);
    }

    length = Math.max(length, cursor - start + 1);
    map.set(currChar, cursor);
  }

  return length;
};

export const solutions = {
  longestSubstringWithCursorReset,
  longestSubstringWithMap,
};
