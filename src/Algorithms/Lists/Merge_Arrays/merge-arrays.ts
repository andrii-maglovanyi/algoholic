// O(n) time
// O(n) space
const solution = (arrayOne: number[], arrayTwo: number[]) => {
  let indexOne = 0;
  let indexTwo = 0;

  const result = [];
  while (indexOne < arrayOne.length || indexTwo < arrayTwo.length) {
    if (arrayOne[indexOne] <= arrayTwo[indexTwo]) {
      result.push(arrayOne[indexOne]);
      indexOne++;
    } else {
      result.push(arrayTwo[indexTwo]);
      indexTwo++;
    }
  }

  return result;
};

export const solutions = {
  Solution: solution,
};
