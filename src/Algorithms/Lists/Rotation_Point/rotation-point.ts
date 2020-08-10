// O (log(n)) time
// O(1) space
const solution = (words: string[]) => {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilIndex = words.length;
  let currentIndex = 0;

  while (floorIndex < ceilIndex) {
    currentIndex = Math.floor((ceilIndex - floorIndex) / 2 + floorIndex);

    if (words[currentIndex] < firstWord) {
      ceilIndex = currentIndex;
    } else {
      floorIndex = currentIndex;
    }

    if (words[currentIndex] < words[currentIndex - 1]) {
      break;
    }
  }

  return currentIndex;
};

export const solutions = {
  solution,
};
