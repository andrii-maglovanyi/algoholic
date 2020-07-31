import { withMemoization as memoize } from "@Utils/memoization";

/**
 * Time O(2^n) or exponential
 * Space O(n)
 */
const nonTailRecursive = (num: number): number => {
  if (num <= 0) return 0;
  if (num <= 1) return num;

  return nonTailRecursive(num - 1) + nonTailRecursive(num - 2);
};

/**
 * Tail call optimization
 * Time O(n)
 * Space O(n)
 */
const tailRecursive = (
  num: number,
  sum: number = 1,
  prev: number = 1
): number => {
  if (num <= 0) return 0;
  if (num <= 2) return sum;
  return tailRecursive(num - 1, prev + sum, sum);
};

/**
 * Time O(n)
 * Space O(n)
 */
const aggregateCalculations = (num: number) => {
  if (num <= 0) return 0;

  const series = [1, 1];

  for (let i = 2; i < num; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }

  return series[num - 1];
};

/**
 * Time O(n)
 * Space O(n)
 */
const withMemoization = (() => {
  const cache: { [key: number]: number } = {};

  const fibonacci = (num: number): number => {
    if (num <= 0) return 0;
    if (num <= 1) return num;

    if (cache[num]) {
      return cache[num];
    } else {
      const result = fibonacci(num - 1) + fibonacci(num - 2);
      cache[num] = result;

      return result;
    }
  };

  return fibonacci;
})();

/**
 * Time O(n)
 * Space O(n)
 */
const withFlexibleMemoization = memoize((num: number) => {
  if (num <= 0) return 0;
  if (num <= 1) return num;

  return withFlexibleMemoization(num - 1) + withFlexibleMemoization(num - 2);
});

/**
 * The most optimal solution in terms of time and space complexity would be
 * using a simple loop O(n) time, const space.
 *
 * O(n) time
 * O(1) space
 */
const simpleLoop = (num: number) => {
  let a = 1;
  let b = 0;
  let temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

export const solutions = {
  "Non Tail Recursive": nonTailRecursive,
  "Aggregate Calculations": aggregateCalculations,
  "Tail Recursive": tailRecursive,
  "With Memoization": withMemoization,
  "With Flexible Memoization": withFlexibleMemoization,
  "Simple Loop": simpleLoop,
};
