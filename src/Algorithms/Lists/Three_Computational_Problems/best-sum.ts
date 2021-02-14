// Brute Force:
// O(n^m * m) time
// O(m^2) space
// Where m = target sum, n = array length

// Memoized:
// O(m^2 * n) time
// O(m^2) space
const bestSumMemo = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];

      if (
        !shortestCombination ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

export const solutions = {
  bestSumMemo,
};
