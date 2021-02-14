// O(n^m * m) time
// O(m) space
// Where m = target sum, n = array length
const howSumMemo = (
  targetSum: number,
  numbers: number[]
  //   memo: Record<number, boolean> = {}
): number[] | null => {
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumMemo(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
};

export const solutions = {
  howSumMemo,
};
