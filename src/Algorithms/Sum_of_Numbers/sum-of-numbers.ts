/**
 * Time O(n2)
 * Space O(1)
 */
const findSum = (array: number[], sum: number) => {
  let pointerA = 0;
  let pointerB = 1;

  while (pointerA < array.length - 1) {
    if (array[pointerA] + array[pointerB] === sum) {
      return [array[pointerA], array[pointerB]];
    }

    if (pointerB === array.length - 1) {
      pointerA++;
      pointerB = pointerA + 1;
    } else {
      pointerB++;
    }
  }

  return -1;
};

/**
 * Time O(nlogn) (depends on a sorting algorithm)
 * Space O(n)
 */
const sortAndFindSum = (array: number[], sum: number) => {
  const sortedArray = [...array].sort((a, b) => a - b);
  let pointerA = 0;
  let pointerB = array.length - 1;

  while (pointerA < pointerB) {
    const currentSum = sortedArray[pointerA] + sortedArray[pointerB];

    if (currentSum === sum) {
      return [sortedArray[pointerA], sortedArray[pointerB]];
    }

    if (currentSum > sum) {
      pointerB--;
    } else {
      pointerA++;
    }
  }

  return -1;
};

/**
 * Time O(n)
 * Space O(n)
 */
const findSumWithSet = (array: number[], sum: number) => {
  const set = new Set();
  let result: number | [number, number] = -1;

  array.forEach((value) => {
    const diff = sum - value;
    if (set.has(value)) {
      result = [diff, value];
    }

    set.add(diff);
  });

  return result;
};

export const solutions = {
  "Two pointers": findSum,
  "Sort and find sum": sortAndFindSum,
  "Find sum with set": findSumWithSet,
};
