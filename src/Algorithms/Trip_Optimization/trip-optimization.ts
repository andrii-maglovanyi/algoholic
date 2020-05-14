const tripOptimization = function (
  tripDurations: number[],
  totalHours: number
) {
  let minPurchases = 0;
  let accumulatedDuration = 0;
  let index = tripDurations.length - 1;

  while (index >= 0) {
    if (totalHours === accumulatedDuration) {
      break;
    }

    if (accumulatedDuration + tripDurations[index] <= totalHours) {
      accumulatedDuration += tripDurations[index];
      minPurchases++;
    } else {
      index--;
    }
  }

  return minPurchases;
};

export const solutions = {
  "Loop and accumulator": tripOptimization,
};
