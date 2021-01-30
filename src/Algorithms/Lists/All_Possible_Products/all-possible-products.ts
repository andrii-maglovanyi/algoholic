// O(n^2) time
// O(n^2) space
const solution = (
  numbers: number[],
  previousProducts: number[] = [],
  currentIndex = 1
): number[] => {
  if (currentIndex === numbers.length) {
    return [...numbers, ...previousProducts];
  }

  let index = 0;
  let currentProducts: number[] = [];

  while (index < currentIndex) {
    currentProducts.push(numbers[index] * numbers[currentIndex]);
    index++;
  }

  index = 0;
  while (index < previousProducts.length) {
    currentProducts.push(previousProducts[index] * numbers[currentIndex]);
    index++;
  }

  return solution(
    numbers,
    [...previousProducts, ...currentProducts],
    currentIndex + 1
  );
};

export const solutions = {
  solution,
};
