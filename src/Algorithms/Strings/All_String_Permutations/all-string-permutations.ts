// O(2^n) time
// O(n) space
const solution = (
  str: string,
  permutations: Set<string> = new Set(),
  firstChar = str[0]
): Set<string> | string[] => {
  let index = 0;
  const chars = str.split("");

  permutations.add(str);
  while (index < str.length - 1) {
    const temp = chars[index + 1];
    chars[index + 1] = chars[index];
    chars[index] = temp;
    permutations.add(chars.join(""));
    index++;
  }

  return chars[0] !== firstChar
    ? solution(chars.join(""), permutations, firstChar)
    : [...permutations].sort();
};

// O(2^n) time
// O(n) space
const getPermutations = (str: string) => {
  if (str.length <= 1) {
    return [str];
  }

  const allCharsExceptLast = str.slice(0, -1);
  const lastChar = str[str.length - 1];

  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  const permutations = new Set<string>();
  permutationsOfAllCharsExceptLast.forEach(
    (permutationOfAllCharsExceptLast) => {
      for (
        let position = 0;
        position <= allCharsExceptLast.length;
        position++
      ) {
        const permutation =
          permutationOfAllCharsExceptLast.slice(0, position) +
          lastChar +
          permutationOfAllCharsExceptLast.slice(position);

        permutations.add(permutation);
      }
    }
  );

  return [...permutations];
};

export const solutions = {
  solution,
  getPermutations: (str: string) => getPermutations(str).sort(),
};
