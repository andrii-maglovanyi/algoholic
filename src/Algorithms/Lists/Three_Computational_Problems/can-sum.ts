// O(n^m) time
// O(m) space
// Where m = target sum, n = array length
const canSumMemo = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, boolean> = {}
) => {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  return false;
};

export const solutions = {
  canSumMemo,
};
