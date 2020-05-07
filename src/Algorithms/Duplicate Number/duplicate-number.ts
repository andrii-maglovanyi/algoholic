/**
 * Time O(n)
 * Space O(1)
 */
const floydAlgorithm = (array: number[]) => {
  let tortoise = array[0],
    hare = array[0];

  // Phase 1. Tortoise and Hare start from the same beginning point.
  // Hare moves two steps and Tortoise moves one step, so Hare moves twice faster.
  // Stop the cycle when Hare and Tortoise meet.
  while (true) {
    tortoise = array[tortoise];
    hare = array[array[hare]];

    if (tortoise === hare) {
      break;
    }
  }

  // Phase 2. Tortoise starts again from the beginning. Hare starts from last meet point.
  // Both are moving with the same speed now.
  // When they meet again is the beginning of the cycle and the duplicate number.
  hare = tortoise;
  tortoise = array[0];

  while (tortoise !== hare) {
    tortoise = array[tortoise];
    hare = array[hare];
  }

  return tortoise;
};

export const solutions = {
  "Floyd's Algorithm": floydAlgorithm,
};
