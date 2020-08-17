// O(n) time
// O(n) space
const solutionWithTwoMaps = (numbers: number[]) => {
  const beforeProducts = new Map();
  const afterProducts = new Map();

  let left = 2;
  let right = numbers.length - 3;

  beforeProducts.set(0, 1);
  beforeProducts.set(1, numbers[0]);

  afterProducts.set(numbers.length - 1, 1);
  afterProducts.set(numbers.length - 2, numbers[numbers.length - 1]);

  while (left < numbers.length) {
    beforeProducts.set(left, beforeProducts.get(left - 1) * numbers[left - 1]);
    afterProducts.set(right, afterProducts.get(right + 1) * numbers[right + 1]);

    left++;
    right--;
  }

  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(beforeProducts.get(i) * afterProducts.get(i));
  }

  return result;
};

// O(n) time
// O(n) space
const singleArraySolution = (numbers: number[]) => {
  const allProductsExceptAtIndex = [];

  let productSoFar = 1;
  for (let i = 0; i < numbers.length; i++) {
    allProductsExceptAtIndex[i] = productSoFar;
    productSoFar *= numbers[i];
  }

  productSoFar = 1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    allProductsExceptAtIndex[i] *= productSoFar;
    productSoFar *= numbers[i];
  }

  return allProductsExceptAtIndex;
};

export const solutions = {
  solutionWithTwoMaps,
  singleArraySolution,
};
