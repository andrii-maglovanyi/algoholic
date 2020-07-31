export const stringToCharsArray = (string: string) =>
  string.toLowerCase().replace(/\W/g, "").split("");

export const createCharMap = (text: string) => {
  const charMap: { [key: string]: number } = {};

  for (let char of stringToCharsArray(text))
    charMap[char] = charMap[char] + 1 || 1;

  return charMap;
};

export const sortString = (text: string) =>
  stringToCharsArray(text).sort().join("");
