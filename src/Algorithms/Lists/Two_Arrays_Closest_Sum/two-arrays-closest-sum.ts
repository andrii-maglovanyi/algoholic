// O(n * log(n));
// O(1) space
const findClosestSumWithSorting = (
  arrayOne: number[],
  arrayTwo: number[],
  targetSum: number
) => {
  const sortedOne = arrayOne.sort((a, b) => a - b);
  const sortedTwo = arrayTwo.sort((a, b) => a - b);

  let pointerOne = arrayOne.length - 1;
  let pointerTwo = 0;

  let closestSum = sortedOne[pointerOne] + sortedTwo[pointerTwo];
  let closestSumIndexes = [[sortedOne[pointerOne], sortedTwo[pointerTwo]]];

  while (pointerOne >= 0 && pointerTwo < sortedTwo.length) {
    const newSum = sortedOne[pointerOne] + sortedTwo[pointerTwo];
    const oldDiff = Math.abs(targetSum - closestSum);
    const newDiff = Math.abs(targetSum - newSum);

    if (oldDiff > newDiff) {
      closestSum = newSum;
      closestSumIndexes = [[sortedOne[pointerOne], sortedTwo[pointerTwo]]];
    } else if (oldDiff === newDiff) {
      closestSumIndexes.push([sortedOne[pointerOne], sortedTwo[pointerTwo]]);
    }

    if (newSum < targetSum) {
      pointerTwo += 1;
    } else if (newSum > targetSum) {
      pointerOne -= 1;
    }
  }

  return closestSumIndexes;
};

export const solutions = {
  findClosestSumWithSorting,
};
