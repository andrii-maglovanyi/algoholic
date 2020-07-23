// O(n) time
// O(1) space
const reverseCharactersList = (list: string[]) => {
  const length = list.length - 1;
  if (length < 1) {
    return list;
  }

  const mid = Math.floor(length / 2);
  for (let i = 0; i <= mid; i++) {
    const temp = list[i];
    list[i] = list[length - i];
    list[length - i] = temp;
  }

  return list;
};

// O(n) time
// O(1) space
const reverseWithTwoIndexes = (list: string[]) => {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const temp = list[left];
    list[left] = list[right];
    list[right] = temp;

    left++;
    right--;
  }

  return list;
};

export const solutions = {
  "Reverse Characters List": reverseCharactersList,
  "Reverse With Two Indexes": reverseWithTwoIndexes,
};
