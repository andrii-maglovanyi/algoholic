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

// O(n*log(n)) time
// O(1) space
const countByDistinctNumbers = (array: number[]) => {
  let floor = 1;
  let ceiling = array.length - 1;

  while (floor < ceiling) {
    let middle = Math.floor((ceiling - floor) / 2 + floor);
    let floorStart = floor;
    let floorFinish = middle;
    let ceilingStart = middle + 1;
    let ceilingFinish = ceiling;

    let realFloorValues = 0;
    let realCeilingValues = 0;
    array.forEach((number) => {
      if (number >= floorStart && number <= floorFinish) {
        realFloorValues += 1;
      } else if (number >= ceilingStart && number <= ceilingFinish) {
        realCeilingValues += 1;
      }
    });

    let distinctFloorValues = floorFinish - floorStart + 1;
    let distinctCeilingValues = ceilingFinish - ceilingStart + 1;

    if (realFloorValues > distinctFloorValues) {
      floor = floorStart;
      ceiling = floorFinish;
    } else if (realCeilingValues > distinctCeilingValues) {
      floor = ceilingStart;
      ceiling = ceilingFinish;
    } else {
      return false;
    }
  }

  return ceiling;
};

export const solutions = {
  floydAlgorithm,
  countByDistinctNumbers,
};
