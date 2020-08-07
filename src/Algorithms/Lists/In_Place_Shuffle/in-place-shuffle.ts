const getRandom = (from: number, to: number) =>
  Math.floor(Math.random() * (to - from + 1)) + from;

// O(n*log(n)) time
// O(1) space
const nativeSort = (array: number[]) => {
  return array.sort(() => Math.round(Math.random()) * 2 - 1);
};

// O(n) time
// O(1) space
const randomSwap = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    const random = getRandom(0, array.length - 1);

    if (i !== random) {
      const temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
  }

  return array;
};

export const solutions = {
  "Native Sort": nativeSort,
  "Random Swap": randomSwap,
};
