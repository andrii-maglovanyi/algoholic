/**
 * Time O(n)
 * Space O(1)
 */
const floydAlgorithm = (array: number[]) => {
  let tortoise = array[0],
    hare = array[0];

  while (true) {
    tortoise = array[tortoise];
    hare = array[array[hare]];

    if (tortoise === hare) {
      break;
    }
  }

  let pointerA = array[0];
  let pointerB = tortoise;

  while (pointerA !== pointerB) {
    pointerA = array[pointerA];
    pointerB = array[pointerB];
  }

  return pointerA;
};

export const solutions = {
  "Floyd's Algorithm": floydAlgorithm,
};
