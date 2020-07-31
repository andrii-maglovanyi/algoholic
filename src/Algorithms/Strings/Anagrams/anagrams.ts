import { createCharMap, sortString } from "@Utils/strings";

/**
 * Time O(nlogn)
 * Space O(1)
 */
const directComparison = (textA: string, textB: string) =>
  sortString(textA) === sortString(textB);

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

export const solutions = {
  "Direct Comparison": directComparison,
  "Character Map Comparison": characterMapComparison,
};
