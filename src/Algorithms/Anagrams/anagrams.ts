import { createCharMap, sortString } from "../../utils/strings";

/**
 * Time O(n)
 * Space O(n)
 */
const characterMapComparison = (textA: string, textB: string) => {
  const charCountA = createCharMap(textA);
  const charCountB = createCharMap(textB);

  if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
    return false;

  for (let char in charCountA)
    if (charCountA[char] !== charCountB[char]) return false;

  return true;
};

/**
 * Time O(n)
 * Space O(1)
 */
const directComparison = (textA: string, textB: string) =>
  sortString(textA) === sortString(textB);

export const solutions = {
  "Character Map Comparison": characterMapComparison,
  "Direct Comparison": directComparison,
};
