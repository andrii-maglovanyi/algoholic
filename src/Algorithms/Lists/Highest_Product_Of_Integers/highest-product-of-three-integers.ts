// O(n) time
// O(1) space
const solution = (arrayOfInts: number[]) => {
  if (arrayOfInts.length < 3) {
    throw new Error("Less than 3 items!");
  }

  let [lowest, highest] = arrayOfInts.slice(0, 2).sort();

  let lowestProductOfTwo = lowest * highest;
  let highestProductOfTwo = lowestProductOfTwo;
  let maxProduct = highestProductOfTwo * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];
    maxProduct = Math.max(
      maxProduct,
      lowestProductOfTwo * current,
      highestProductOfTwo * current
    );

    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      current * lowest,
      current * highest
    );

    highestProductOfTwo = Math.max(
      highestProductOfTwo,
      current * lowest,
      current * highest
    );

    lowest = Math.min(lowest, current);
    highest = Math.max(highest, current);
  }

  return maxProduct;
};

export const solutions = {
  Solution: solution,
};
